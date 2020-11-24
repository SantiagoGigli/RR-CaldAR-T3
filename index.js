const express = require('express');
const controllersTechnicians = require('./controllers/technicians')
const app = express();
const port = 3000;

app.use('/', controllersTechnicians);

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})