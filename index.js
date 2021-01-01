const express = require('express');

const app = express();
const bodyParser = require('body-parser');

// const cors = require('cors');

// app.use(cors);

const port = process.env.PORT || 3000;
require('dotenv').config();
const db = require('./models');

const router = require('./routes');

app.use(bodyParser.json());

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

// API Rest routes
app.use('/api', router);

// Static Files
app.use(express.static('public'));

// Redirect to index
app.get('*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
