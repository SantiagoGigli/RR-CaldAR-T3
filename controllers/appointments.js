const { ObjectId } = require('mongodb');
const db = require('../models');

const { Appointments } = db;

// Create new appointment
// Validate
exports.create = (req, res) => {
  if (
    !req.body.idBuilding
    || !req.body.idBoiler
    || !req.body.date
    || !req.body.startTime
    || !req.body.endTime
    || !req.body.idTechnician
    || !req.body.type
  ) {
    res.status(400).send({ msg: 'Content can not be empty' });
    return;
  }

  // Create
  const newAppointments = new Appointments({
    id: req.body.id,
    idBuilding: req.body.idBuilding,
    idBoiler: req.body.idBoiler,
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    idTechnician: req.body.idTechnician,
    type: req.body.type,
  });

  // Save
  newAppointments
    .save(newAppointments)
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

// Update appointment
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data body can not be empty!',
    });
  }

  // Validate request
  if (
    !req.body.idBuilding
    || !req.body.idBoiler
    || !req.body.date
    || !req.body.startTime
    || !req.body.endTime
    || !req.body.idTechnician
    || !req.body.type
  ) {
    return res.status(400).send({
      message: 'Content can not be empty',
    });
  }

  const { id } = req.params;

  return Appointments
    .findOneAndUpdate({ _id: ObjectId(req.params.id) }, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: `Can't update the appointment with id ${id}. Appointment was not found`,
        });
      } else {
        res.send({ message: 'Appointment was update successfully' });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating the Appointments with id ${id}`,
        err,
      });
    });
};

// Delete appointment by id
exports.delete = (req, res) => {
  const { id } = req.params;
  Appointments
    .findOneAndRemove({ _id: ObjectId(req.params.id) })
    .then(() => res.send({
      message: 'Appointment was removed successfuly',
    }))
    .catch((err) => {
      res.status(500).send({
        message: `Error removing appointment ${id}`,
        err,
      });
    });
};

// Get all appointments type
exports.findAll = (req, res) => {
  Appointments
    .find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Something happend, could not retrieve appointments type',
        err,
      });
    });
};

// Get appointment by id
exports.findOne = (req, res) => Appointments
  .findOne({ _id: ObjectId(req.params.id) })
  .then((data) => {
    if (!data) {
      return res.status(404).send({
        message: `Couldn't find appointment type witd id ${req.params.id}`,
      });
    }
    return res.send(data);
  })
  .catch((err) => res.status(500).send({
    message: 'Something happend, could not retrieve appointment type',
    err,
  }));

// Get appointment type Monthly by id
exports.findType = (req, res) => Appointments
  .find({ type: req.params.type })
  .then((data) => {
    if (!data) {
      return res.status(404).send({
        message: `Could not find type ${req.params.type}`,
      });
    }
    return res.send(data);
  })
  .catch((err) => res.status(500).send({
    message: 'Something happend, could not retrieve type',
    err,
  }));
