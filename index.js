const express = require('express');
const controllersBoilersTypes = require('./controllers/boilers-types');
const controllersCustomers = require('./controllers/Customers');
const controllersBoilers = require('./controllers/boilers');
const app = express();
const port = 3000;

app.use('/boilers-types', controllersBoilersTypes);
app.use('/', controllersCustomers);
app.use('/', controllersBoilers);
app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

