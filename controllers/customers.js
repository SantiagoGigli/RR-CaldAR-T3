const db = require('../models');

const { Customers } = db;

// Add a new customer
// POST http://localhost:3000/customers/add
exports.create = (req, res) => {
  // Validate
  if (!req.body.id || !req.body.type || !req.body.address) {
    res.status(400).send({
      message: 'Content cant be empty',
    });
    return;
  }

  // Create
  const newCustomer = new Customers({
    id: req.body.id,
    type: req.body.type,
    address: req.body.address,
    email: req.body.email,
    buildings: req.body.buildings,
  });

  // Save
  newCustomer
    .save(newCustomer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while creating the new customer',
      });
    });
};

// Update
// PUT http://localhost:3000/customers/update/3
exports.update = (req, res) => {
  // Validate
  if (!req.body) {
    res.status(400).send({
      message: 'Data body cant be empty!',
    });
    return;
  }
  if (!req.body.id || !req.body.type || !req.body.address) {
    res.status(400).send({
      message: 'Content cant be empty',
    });
    return;
  }
  const { id } = req.params;
  Customers
    .findOneAndUpdate({ id }, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Customer ID: ${id} not found`,
        });
<<<<<<< HEAD
      } else{
          res.send({ message: 'Customer ' + id + ' updated'});
      }       
=======
        return;
      }
      res.send({ message: `Customer ${id} updated` });
>>>>>>> dc4223e88fc1a751f57c6be9fff5b77b60c8c5fb
    })
    .catch((err) => res.status(500).send({
      message: err.message || 'Error updating customer',
    }));
};

// Delete Customer
// DELETE http://localhost:3000/customers/delete/1
exports.delete = (req, res) => {
  const { id } = req.params;
  Customers
    .findOneAndRemove({ id }, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Customer ID: ${id} not found`,
        });
      }
      return res.send({ message: `Customer ${id} removed` });
    })
    .catch((err) => res.status(500).send({
      message: err.message || 'Error removing customer',
    }));
};

// Get All Customers
// GET http://localhost:3000/customers/getAll
exports.findAll = (req, res) => {
  Customers
    .find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Customers Find All Error',
      });
    });
};

// Get Customer by Id
// GET http://localhost:3000/customers/getById/3
exports.findOne = (req, res) => {
<<<<<<< HEAD
  const id = req.params.id;
  customers.findOne({id})
    .then(data => {
      if (!data){
=======
  const { id } = req.params;
  Customers
    .findOne({ id })
    .then((data) => {
      if (!data) {
>>>>>>> dc4223e88fc1a751f57c6be9fff5b77b60c8c5fb
        return res.status(404).send({
          message: `Customer ID: ${id} not found`,
        });
      }
      return res.send(data);
    })
    .catch((err) => res.status(500).send({
      message: err.message || 'Customer Find One Error',
    }));
};

// Get Customer by Type
// GET http://localhost:3000/customers/getByType/particular
exports.findType = (req, res) => {
  const { type } = req.params;
  Customers
    .find({ type })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Customer type: ${type} not found`,
        });
      }
      return res.send(data);
    })
    .catch((err) => res.status(500).send({
      message: err.message || 'Customer find by type Error',
    }));
};
