const { ObjectId } = require('mongodb');
const db = require('../models');

const { BoilersType } = db;

// Create new boiler type
// Validate
exports.create = (req, res) => {
  if (!req.body.id || !req.body.description || !req.body.stock) {
    res.status(400).send({ msg: 'Content can not be empty' });
    return;
  }

  // Create
  const newBoilerType = new BoilersType({
    id: req.body.id,
    description: req.body.description,
    stock: req.body.stock,
  });

  // Save
  newBoilerType
    .save(newBoilerType)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message
          || 'Some error ocurred while creating the new boiler type',
      });
    });
};

// Update boiler type
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Data body can not be empty!',
    });
    return;
  }

  // Validate request
  if (!req.body.id || !req.body.description || !req.body.stock) {
    res.status(400).send({
      message: 'Content can not be empty',
    });
    return;
  }

  const { id } = req.params;

  BoilersType
    .findOneAndUpdate({ id }, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: `Can't update boiler type with id ${id}. Boiler type was not found`,
        });
      } else {
        res.send({ message: 'Boiler type was update successfully' });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating boiler type with id ${id}`,
        err,
      });
    });
};

// Delete boiler type
exports.delete = (req, res) => {
  const { id } = req.params;
  BoilersType
    .findOneAndRemove({ id }, { useFindAndModify: false })
    .then(() => res.send({
      message: 'Bolier type was removed successfully',
    }))
    .catch((err) => {
      res.status(500).send({
        message: `Error removing building type ${id}`,
        err,
      });
    });
};

// Get all boilers type
exports.findAll = (req, res) => {
  BoilersType
    .find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Something happend, could not retrieve boilers type',
        err,
      });
    });
};

// Get boiler type by id
exports.findOne = (req, res) => {
  BoilersType
    .findOne({ _id: ObjectId(req.params.id) })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Couldn't find boiler type witd id ${req.params.id}`,
        });
        return;
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Something happend, couldn not retrieve boilers type',
        err,
      });
    });
};

// Get boiler type by description
exports.findDescription = (req, res) => {
  BoilersType
    .find({ description: req.params.description })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Couldn't find boiler type description ${req.params.description}`,
        });
        return;
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Something happend, could not retrieve boilers type',
        err,
      });
    });
};
