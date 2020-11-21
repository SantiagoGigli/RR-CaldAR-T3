const express = require('express')
const app = express()
const port = 3000

const customers = require('./data/Customers.json')

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


//get all customers

getAllCustomers = () =>{
  app.get('/customers', (req, res) => {
    res.json(customers);
  })
}

getAllCustomers();

//get customers by id

getCustomerById = () => {
  app.get('/customers/:id', (req,res) => {
    res.json(customers.filter(tech => tech.id === parseInt(req.params.id)))
  })
}

getCustomerById();