const db = require('../models');
const customers = db.customers;

// Add a new customer
//POST http://localhost:3000/customers
exports.create = (req, res) => {
  //Validate
  if (!req.body.id || !req.body.type || !req.body.address){
    res.status(400).send({
      message: "Customer Creation needs ID, TYPE and ADDRESS"
    });
    return;
  };
  
  //Create
  const customer = new customers ({
    id: req.body.id,
    type: req.body.type,
    address: req.body.address,
    email: req.body.email,
    buildings: req.body.buildings
  });

  //Save
  customer
    .save(customer)
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

