var app = require('express')();
var users = require('./users');
var database = require('./db');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
var db = database.connect;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/index', function(req,res){
    res.send('<h1>index page</h1>');
});

app.get('/employees', function(req,res){
    db.employees.find(function(err, docs){
	res.json(docs);
    });
});

app.get('/employees/:name', function(req,res){
    db.employees.findOne({name: req.params.name}, function(err, docs){
    	res.json(docs);
    });
});

app.get('/employees/sort/name', function(req,res){
    db.employees.find().sort({name: 1}, function(err, docs){
    	res.json(docs);
    });
});

app.post('/employees', function (req, res) {
    var json = req.body;
    db.employees.insert(json, function(err, docs){
    	res.send('Add ' + json.name + ' Completed!');
    });
});

app.put('/employees', function (req, res) {
    var json = req.body;
    db.employees.findAndModify({
    	query: {name: json.name},
	update: {$set: json},
	new: true
    }, function(err, docs){
    	res.send('Update ' + json.name + ' Completed!');
    });
});

app.delete('/employees', function (req, res) {
    var json = req.body;
    //soft delete
    db.employees.findAndModify({
    	query: {name: json.name},
	update: {$set: {deleted:true}},
	new: true
    }, function(err, docs){
    	res.send('Update ' + json.name + ' Completed!');
    });
    //hard delete
    //db.employees.remove({name:json.name}, function(err, docs){
    //	res.send('Delete '+json.name+' Complete');
    //});
});

app.listen(port, function(){
    console.log('Start node.js on port '+port);
});
