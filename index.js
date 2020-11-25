const express = require('express');
const controllerAppointments = require('./controllers/appointments');
const controllerBuildings = require('./controllers/buildings');
const controllersCustomers = require('./controllers/Customers');
const controllersBoilers = require('./controllers/boilers');
const app = express();
const port = 3000;

app.use('/', controllersCustomers);
app.use('/', controllersBoilers);
app.use('/api/buildings', controllerBuildings);
app.use('/api/appointments', controllerAppointments);

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

