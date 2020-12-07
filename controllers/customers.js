const db = require('../models');
const customers = db.customers;

// Add a new customer
//POST http://localhost:3000/customers/add
exports.create = (req, res) => {
  //Validate
  if (!req.body.id || !req.body.type || !req.body.address){
    res.status(400).send({
      message: 'Content cant be empty'
    });
    return;
  };
  
  //Create
  const newCustomer = new customers ({
    id: req.body.id,
    type: req.body.type,
    address: req.body.address,
    email: req.body.email,
    buildings: req.body.buildings
  });

  //Save
  newCustomer
    .save(newCustomer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message  || 'Some error ocurred while creating the new customer'
      });
    });
};

//Update
//PUT http://localhost:3000/customers/update/3
exports.update = (req, res) => {
  //Validate
  if (!req.body){
    return res.status(400).send({
      message: 'Data body cant be empty!'
    });
  }
  if (!req.body.id || !req.body.type || !req.body.address){
    res.status(400).send({
      message: 'Content cant be empty'
    });
    return;
  }
  const id = req.params.id;
  customers.findOneAndUpdate({id}, req.body, {useFindAndModify: false})
    .then(data => {
      if (!data){
        return res.status(404).send({
          message: 'Customer ID: ' + id + ' not found'
        });
      } else{
          res.send({ message: 'Customer ' + id + ' updated'});
      }       
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message  || 'Error updating customer'
      });
    });
};  

//Delete Customer
//DELETE http://localhost:3000/customers/delete/1
exports.delete = (req, res) => {
  const id = req.params.id;
  customers.findOneAndRemove({id}, {useFindAndModify: false})
    .then(data => {
      if (!data){
        return res.status(404).send({
          message: 'Customer ID: ' + id + ' not found'
        });
      }
      res.send({ message: 'Customer ' + id + ' removed'});       
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message  || 'Error removing customer'
      });
    });
};  

//Get All Customers
//GET http://localhost:3000/customers/getAll
exports.findAll = (req, res) => {
  customers.find({})
    .then(data => {
      res.send(data);  
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message  || 'Customers Find All Error'
      });
    });
};

//Get Customer by Id
//GET http://localhost:3000/customers/getById/3
exports.findOne = (req, res) => {
  const id = req.params.id;
  customers.findOne({id})
    .then(data => {
      if (!data){
        return res.status(404).send({
          message: 'Customer ID: ' + id + ' not found'
        });
      }
      res.send(data);  
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message  || 'Customer Find One Error'
      });
    });
};  

// Get Customer by Type
//GET http://localhost:3000/customers/getByType/particular
exports.findType = (req, res) => {
  const type = req.params.type;
  customers.find({type})
  .then(data => {
    if(!data){
      return res.status(404).send({
        message: 'Customer type: ' + type + ' not found'
      })
    }
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: 
        err.message || 'Customer find by type Error'
    })
  })
};
