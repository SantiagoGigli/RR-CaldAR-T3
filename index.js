const express = require('express');
const controllerBoilersTypes = require('./controllers/boilersTypes');
const controllerAppointments = require('./controllers/appointments');
const controllerBuildings = require('./controllers/buildings');
const controllerCustomers = require('./controllers/Customers');
const controllerBoilers = require('./controllers/boilers');
const controllerTechnicians = require('./controllers/technicians');
const app = express();
const port = 3000;

app.use('/boilerTypes', controllerBoilersTypes);
app.use('/customers', controllerCustomers);
app.use('/boilers', controllerBoilers);
app.use('/buildings', controllerBuildings);
app.use('/appointments', controllerAppointments);
app.use('/technicians', controllerTechnicians);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
