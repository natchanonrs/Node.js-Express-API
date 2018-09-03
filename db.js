var mongojs = require('mongojs');

var databaseUrl = 'mongojs';
var collections = ['employees'];

var connect = mongojs(databaseUrl, collections);

var ObjectId = mongojs.ObjectId;

module.exports = {
    connect: connect,
    ObjectId: ObjectId
};

