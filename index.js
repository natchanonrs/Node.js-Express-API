var app = require('express')();
var users = require('./users');
var database = require('./db');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');

var port = process.env.PORT || 8081;
var db = database.connect;
var OId = database.ObjectId;

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.disable('etag');

app.get('/index', function(req,res){
    res.send('<h1>index page</h1>');
});

app.get('/employees', function(req,res){
    db.employees.find(function(err, docs){
	res.json(docs);
    });
});

app.get('/employees/:id', function(req,res){
    db.employees.findOne({_id: OId(req.params.id)}, function(err, docs){
    	res.json(docs);
    });
});

app.post('/employees', function (req, res) {
    var json = req.body;
    db.employees.insert(json, function(err, docs){
    	res.send('Add ' + json.name + ' Completed!');
    });
});

app.put('/employees/:id', function (req, res) {
    var json = req.body;
    var id = req.params.id;
    db.employees.findAndModify({
    	query: {_id: OId(id)},
	update: {$set: json},
	new: true
    }, function(err, docs){
    	res.send('Update ' + id + ' Completed!');
    });
});

app.delete('/employees/:id', function (req, res) {
    var id = req.params.id;
    //soft delete
    //db.employees.findAndModify({
    //	query: {name: name},
	//update: {$set: {deleted:true}},
	//new: true
    //}, function(err, docs){
    //	res.send('Update ' + name + ' Completed!');
    //});
    //hard delete
    db.employees.remove({_id: OId(id)}, function(err, docs){
    	res.send('Delete '+ id +' Complete');
    });
});

app.listen(port, function(){
    console.log('Start node.js on port '+port);
});
