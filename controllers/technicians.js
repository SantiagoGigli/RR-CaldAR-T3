const { ObjectID } = require('mongodb');
const db = require('../models');

const Technician = db.Technicians;

exports.create = (req, res) => {
  if (
    !req.body.name
    || !req.body.email
    || !req.body.hourRate
    || !req.body.typeBoilers
    || !req.body.dailyCapacity
  ) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  const technician = new Technician({
    name: req.body.name,
    email: req.body.email,
    hourRate: req.body.hourRate,
    typeBoilers: req.body.typeBoilers,
    dailyCapacity: req.body.dailyCapacity,
  });
  technician
    .save(technician)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while creating the technician.',
      });
    });
};

exports.findAll = (req, res) => {
  Technician.find({})
    .then((data) => {
      res.status(200).send({
        message: 'Request completed succesfully.', data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while retrieving technicians.',
      });
    });
};

exports.findOne = (req, res) => {
  Technician.findOne({ _id: ObjectID(req.params.id) })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Technician with id ${req.params.id} was not found`,
        });
        return;
      }
      res.status(200).send({
        message: 'Request completed succesfully.', data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while retrieving technician.',
      });
    });
};

exports.findName = (req, res) => {
  const { name } = req.params;
  Technician.findOne({ name })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Technician with name ${name} was not found`,
        });
        return;
      }
      res.status(200).send({
        message: 'Request completed succesfully.', data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while retrieving technician.',
      });
    });
};

exports.delete = (req, res) => {
  Technician.findOneAndRemove({ _id: ObjectID(req.params.id) }, { useFindeAndModify: false })
    .then(() => res.status(200).send({ message: 'Technician was removed succesfully' }))
    .catch((err) => {
      res.status(500).send({
        message: `Some error ocurred while removing technician with id = ${ObjectID(req.params.id)}`,
        err,
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Data to update can not be empty!',
    });
    return;
  }
  if (
    !req.body.name
    || !req.body.email
    || !req.body.hourRate
    || !req.body.typeBoilers
    || !req.body.dailyCapacity
  ) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  Technician.findOneAndUpdate({ _id: ObjectID(req.params.id) }, req.body,
    { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Technician with id = ${ObjectID(req.params.id)}. Maybe Technician was not found`,
        });
      } else res.status(200).send({ message: 'Technician was updated succesfully' });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Technician with id = ${ObjectID(req.params.id)}`,
        err,
      });
    });
};
