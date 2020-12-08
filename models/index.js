const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.url = process.env.mongoURL;

db.technicians = require('./technicians.js')(mongoose);
db.buildings = require('./buildings.js')(mongoose);
db.customers = require('./customers.js')(mongoose);
db.boilersType = require('./boilersType.js')(mongoose);
db.appointments = require('./appointments.js')(mongoose);
db.Boiler = require('./boiler.js')(mongoose);

module.exports = db;
