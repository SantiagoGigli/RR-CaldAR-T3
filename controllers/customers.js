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
  const found = customers.find(customer => customer.id === parseInt(id));
  if(found) {
    res.json(customers.filter(customer => customer.id === parseInt(id)));
  }
  else {
    res.status(400).json({msg: 'The customer with id ' + id + ' does not exist'});
  }
})

//get customers by name
router.get('/getCustomersByType', (req,res) => {
  const type = req.query.customerType;
  const ctype = customers.filter(customer => customer.customerType.includes(type));
  if(ctype) {
    res.json(customers.filter(customer => customer.customerType.includes(type)));
  }
  else {
    res.status(400).json({msg: 'There are no customers with ' + customerType + ' type'});
  }
})

//delete customer by id
router.get('/deleteCustomerById', (req, res) => {
  const id = req.query.id;
  const found = customers.some(customer => customer.id === parseInt(id));  
  if(found) {
    const remCustomers = customers.filter(customer => customer.id !== parseInt(id));
    fs.writeFile('data/Customers.json', JSON.stringify(remCustomers), err => {
      if(err) {console.log(err);}
    });
    res.json({msg: 'Customer deleted ', boilers: remCustomers});
  }
  else {
    res.status(400).json({msg: 'The customer with id ' + id + ' does not exist'});
  }
});

module.exports = router;
