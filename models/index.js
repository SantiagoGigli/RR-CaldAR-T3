const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.url = process.env.mongoURL;
db.technicians = require('./technicians.js')(mongoose);
db.customers = require('./customers.js')(mongoose);

module.exports = db;
