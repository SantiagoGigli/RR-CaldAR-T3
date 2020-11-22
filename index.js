const express = require('express');
const app = express();
const port = 3000;

app.use('/', require('./controllers/technicians'));

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})