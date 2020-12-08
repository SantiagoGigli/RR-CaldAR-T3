const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
//db.url = process.env.mongoURL;

db.Technicians = require('./technicians.js')(mongoose);
db.Buildings = require('./buildings.js')(mongoose);
db.Customers = require('./customers.js')(mongoose);
db.BoilersType = require('./boilersType.js')(mongoose);
db.Appointments = require('./appointments.js')(mongoose);
db.Boiler = require('./boiler.js')(mongoose);

module.exports = db;
