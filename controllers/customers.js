const db = require('../models');
const customers = db.customers;

// Add a new customer
//POST http://localhost:3000/customers/add
exports.create = (req, res) => {
  //Validate
  if (!req.body.id || !req.body.type || !req.body.address){
    res.status(400).send({
      message: "Customer Creation needs ID, TYPE and ADDRESS"
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
          err.message  || "Customer Creation Error"
      });
    });
};

//Update
//PUT http://localhost:3000/customers/update/1
exports.update = (req, res) => {
  const id = req.params.id;

  //Validate
  if (!req.body){
    return res.status(400).send({
      message: "Data body can't be empty!"
    });
  }
  if (!req.body.id || !req.body.type || !req.body.address){
    res.status(400).send({
      message: "Content can't be empty"
    });
   return;
  }

  customers.findOneAndUpdate({id}, req.body, {useFindAndModify: false})
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message:"Customer ID: "+id+" not found."
        });
      } else
      res.send({ message: "Customer "+id+ " updated"});       
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message  || "Customer Update Error"
      });
    });
};  

//Get All Customers
//GET http://localhost:3000/customers/getAllCustomers
exports.findAll = (req, res) => {
  customers.find({})
    .then(data => {
      res.send(data);  
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message  || "Customers Find All Error."
      });
    });
};

//Get Customer by Id
//GET
exports.findOne = (req, res) => {
  customers.findOne({id: req.params.id})
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message:"Customer ID: "+req.params.id+" not found"
        });
      }
      res.send(data);  
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message  || "Customer Find One Error"
      });
    });
};  
