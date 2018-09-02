var mongojs = require('mongojs');

var databaseUrl = 'mongojs';
var collections = ['employees'];

var connect = mongojs(databaseUrl, collections);

module.exports = {
    connect: connect
};

