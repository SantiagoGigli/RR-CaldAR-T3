const express = require('express');
const fs = require('fs');
const router = express.Router();
const customers = require('../data/Customers.json');

//get all customers
router.get('/customers', (req, res) => {
  res.json(customers);
})

//get customers by id
router.get('/getCustomersById', (req,res) => {
  const id = req.query.id;
  const customer = customers.find(customer => customer.id === parseInt(id));
  res.json(customer);
})

//get customers by name
router.get('/getCustomersByType', (req,res) => {
  const type = req.query.customerType;
  const ctype = customers.filter(customer => customer.customerType.includes(type));
  res.json(ctype);
})

//delete customer by id
router.get('/deleteCustomerById', (req,res) => {
  const id = req.query.id;
  const remCustomers = customers.filter(customer => customer.id !== parseInt(id));
  fs.writeFile('data/Customers.json', JSON.stringify(remCustomers), err => {
    if(err){console.log(err)}
  });
  res.json({msg: 'Customer deleted ', customers: remCustomers});
})

module.exports = router;