const express = require('express');
const controllersBoilersTypes = require('./controllers/boilers-types');
const app = express();
const port = 3000;

app.use('/boilers-types', controllersBoilersTypes);
//app.use('/', require('./controllers/boilers-types'))

app.use('/boilers', require('./controllers/boilers'))
app.use('/', require('./controllers/customers'))

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
