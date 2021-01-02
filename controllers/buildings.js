const { ObjectID } = require('mongodb');
const db = require('../models');

const { Buildings } = db;

// Add a new buildings
// POST http://localhost:3000/buildings/addNew
exports.create = (req, res) => {
  // Validate
  if (!req.body.address) {
    res.status(400).send({
      message: 'Building Creation need ID and ADDRESS.',
    });
    return;
  }

  // Create
  const building = new Buildings({
    address: req.body.address,
    name: req.body.name,
    phone: req.body.phone,
    idCustomer: req.body.idCustomer,
    boilers: req.body.boilers,
  });

  // Save
  building
    .save(building)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Building Creation Error.',
      });
    });
};

// Update
// PUT http://localhost:3000/buildings/updateById/1
exports.update = (req, res) => {
  // Validate
  if (!req.body.address) {
    res.status(400).send({
      message: 'Building Update need ID and ADDRESS.',
    });
    return;
  }

  Buildings
    .findOneAndUpdate({ _id: ObjectID(req.params.id) }, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Building ID: ${ObjectID(req.params.id)} not found.`,
        });
      }
      return res.send({ message: `Building ${ObjectID(req.params.id)} updated` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Building Update Error.',
      });
    });
};

// Delete One
exports.delete = (req, res) => {
  Buildings
    .findOneAndRemove({ _id: ObjectID(req.params.id) }, { useFindeAndModify: false })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Building ID: ${ObjectID(req.params.id)} not found.`,
        });
      }
      return res.send({ message: `Building ${ObjectID(req.params.id)} removed` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Building Delete One Error.',
      });
    });
};

// Retrieve All
exports.findAll = (req, res) => {
  Buildings
    .find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Building Find All Error.',
      });
    });
};

// Retrieve One
exports.findOne = (req, res) => {
  Buildings
    .findOne({ _id: ObjectID(req.params.id) })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Building ID: ${req.params.id} not found.`,
        });
      }
      return res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Building Find One Error.',
      });
    });
};
// Retrieve All By Name
exports.findAllByName = (req, res) => {
  const namePar = req.query.name;
  Buildings
    .find({ name: namePar })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Building Find All By Name Error.',
      });
    });
};

// Retrieve All By Boiler ID
exports.getAllByBoilerId = (req, res) => Buildings
  .find({ boilers: parseInt(req.params.id) })
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || 'Building Find All By Boiler ID Error.',
    });
  });
