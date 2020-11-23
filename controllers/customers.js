const express = require('express');
const router = express.Router();
const customers = require('../data/Customers.json');
const fs = require('fs');

//get all customers

    getAllCustomers = () =>{
        router.get('/customers', (req, res) => {
            res.json(customers);
            })
    }

    getAllCustomers();

  //get customers by id

    getCustomerById = () => {
        router.get('/customers/:id', (req,res) => {
            res.json(customers.filter(customers => customers.id === parseInt(req.params.id)));
            })
    }

    getCustomerById();

  //get customers by name


    getCustomerByAttribute = () => {
        router.get('/customers/customertype/:customerType', (req,res) => {
            res.json(customers.filter(customers => customers.customerType.includes(req.params.customerType)));
            })
    }

    getCustomerByAttribute();

  //delete customer by id
  deleteCustomerById = () => {
    router.get('/customers/delete/:id',(req,res)=>{
          const remCustomers = customers.filter(customer=> customer.id !== parseInt(req.params.id));
          fs.writeFile('data/Customers.json',JSON.stringify(remCustomers),err=>{
              if(err){
                  console.log(err);
              }
          });
          res.json({msg: 'Customer deleted ', Customers: remCustomers});
      }
    )}
  deleteCustomerById();


    module.exports = router;