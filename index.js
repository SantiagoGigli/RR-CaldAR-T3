const express = require('express')
const app = express()
const port = 3000

app.use('/api/buildings', require('./controllers/buildings'));
app.use('/api/appointments', require('./controllers/appointments'));

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})