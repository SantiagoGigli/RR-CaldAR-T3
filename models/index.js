const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.url = process.env.mongoURL;
db.boilersType = require('./boilersType.js')(mongoose);


module.exports = db;
