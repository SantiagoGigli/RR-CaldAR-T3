const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.url = process.env.mongoURL;
/*db.url = "mongodb+srv://IgnacioAristo:radium1234@caldar.ejvrp.mongodb.net/caldar?retryWrites=true&w=majority";*/
db.technicians = require('./technicians.js')(mongoose);
db.customers = require('./customers.js')(mongoose);

module.exports = db;
