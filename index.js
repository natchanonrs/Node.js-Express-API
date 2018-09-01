var app = require('express')();
var users = require('./users');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/index', function(req,res){
    res.send('<h1>index page</h1>');
});

app.get('/all', function(req,res){
    res.json(users.findAll());
});

app.get('/search', function(req,res){
    res.json(users.findAll());
});

app.get('/sort', function(req,res){
    res.json(users.findAll());
});

app.post('/newuser', function (req, res) {
    var json = req.body;
    res.send('Add ' + json.name + ' Completed!');
});

app.listen(port, function(){
    console.log('Start node.js on port '+port);
});