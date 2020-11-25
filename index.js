const express = require('express');
const controllersCustomers = require('./controllers/Customers');
const controllersBoilers = require('./controllers/boilers');
const controllersTechnicians = require('./controllers/technicians');
const app = express();
const port = 3000;

app.use('/', controllersCustomers);
app.use('/', controllersBoilers);
app.use('/', controllersTechnicians);

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
