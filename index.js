<<<<<<< HEAD
=======
// Emiliano
>>>>>>> dc4223e88fc1a751f57c6be9fff5b77b60c8c5fb
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
<<<<<<< HEAD
const port = process.env.PORT || 3000;
//const dotenv = require('dotenv').config();
=======

const port = process.env.PORT || 3000;
require('dotenv').config();
>>>>>>> dc4223e88fc1a751f57c6be9fff5b77b60c8c5fb
const db = require('./models');
const router = require('./routes');

app.use(bodyParser.json());

/* eslint-disable no-console */
// Connect to the server
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log('Cannot connect to the database', err);
    process.exit();
  });

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
/* eslint-enable no-console */
