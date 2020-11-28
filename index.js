const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const dotenv = require('dotenv').config();
const db = require('./models');
const router = require('./routes');

app.use(bodyParser.json());

//Connect to the server
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(()=> {
    console.log("Connected to the database");
  })
  .catch(err => {
    console.log("Cannot connect to the database", err);
    process.exit();
  })

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
