const express = require('express');
const router = express.Router();
const customers = require('../data/Customers.json')

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
            res.json(customers.filter(customers => customers.id === parseInt(req.params.id)))
            })
    }

    getCustomerById();

  //get customers by name


    getCustomerByAttribute = () => {
        router.get('/customers/customertype/:customerType', (req,res) => {
            res.json(customers.filter(customers => customers.customerType.includes(req.params.customerType)))
            })
    }

    getCustomerByAttribute();

  //delete customer by id

    deleteCustomerById = () => {
        router.get('/customers/remove/:id', (req,res) => {
            res.json({msg: `Customer with ID ${req.params.id} deleted`, customers: customers.filter(customers => customers.id !== parseInt(req.params.id))})
            })
    }

    deleteCustomerById();


    module.exports = router;