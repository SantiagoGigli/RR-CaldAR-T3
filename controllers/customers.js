const { ObjectID } = require('mongodb');
const db = require('../models');

// eslint-disable-next-line prefer-destructuring
const Customers = db.Customers;

// Add a new customer
// POST http://localhost:3000/api/customers/
exports.create = (req, res) => {
  // Validate
  if (
    !req.body.type
    || !req.body.address
    || !req.body.email
    || !req.body.buildings
  ) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create
  const newCustomer = new Customers({
    type: req.body.type,
    address: req.body.address,
    email: req.body.email,
    buildings: ObjectID(req.body.buildings),
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
// PUT http://localhost:3000/api/customers/5fd1881b3175f528a8450472
exports.update = (req, res) => {
  // Validate
  if (!req.body) {
    res.status(400).send({
      message: 'Data to update can not be empty!',
    });
    return;
  }
  if (
    !req.body.type
    || !req.body.address) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  Customers
    .findOneAndUpdate({ _id: ObjectID(req.params.id) }, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Customer with id = ${ObjectID(req.params.id)}. Maybe Customer was not found`,
        });
      }
      return res.status(200).send({ message: 'Customer was updated succesfully' });
    })
    .catch((err) => res.status(500).send({
      message: err.message || `Error updating Customer with id = ${ObjectID(req.params.id)}`,
    }));
};

// Delete Customer
// DELETE http://localhost:3000/api/customers/
exports.delete = (req, res) => {
  Customers
    .findOneAndRemove({ _id: ObjectID(req.params.id) }, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Customer ID: ${ObjectID(req.params.id)} was not found`,
        });
      }
      return res.send({ message: 'Customer was removed succesfully' });
    })
    .catch((err) => res.status(500).send({
      message: err.message || 'Error removing Customer',
    }));
};

// Get All Customers
// GET http://localhost:3000/api/customers
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
// GET http://localhost:3000/api/customers/5fd18a67c6b77c4c102c1d21
exports.findOne = (req, res) => {
  Customers
    .findOne({ _id: ObjectID(req.params.id) })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Customer with ID: ${req.params.id} was not found`,
        });
      }
      return res.status(200).send({
        message: 'Request completed succesfully.', data,
      });
    })
    .catch((err) => res.status(500).send({
      message: err.message || 'Some error ocurred while retrieving Customer',
    }));
};

// Get Customer by Type
// GET http://localhost:3000/api/customers/getByType/particular
exports.findType = (req, res) => {
  const { type } = req.params;
  Customers
    .find({ type })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Customer type: ${type} was not found`,
        });
      }
      return res.send(data);
    })
    .catch((err) => res.status(500).send({
      message: err.message || 'Some error ocurred while retrieving Customers',
    }));
};
