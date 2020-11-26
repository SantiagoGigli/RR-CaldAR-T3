const express = require('express');
const controllersBoilersTypes = require('./controllers/boilers-types');
const controllerAppointments = require('./controllers/appointments');
const controllerBuildings = require('./controllers/buildings');
const controllersCustomers = require('./controllers/Customers');
const controllersBoilers = require('./controllers/boilers');
const controllersTechnicians = require('./controllers/technicians');
const app = express();
const port = 3000;

app.use('/boilers-types', controllersBoilersTypes);
app.use('/', controllersCustomers);
app.use('/', controllersBoilers);
app.use('/api/buildings', controllerBuildings);
app.use('/api/appointments', controllerAppointments);
app.use('/', controllersTechnicians);

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
