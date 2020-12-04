const db = require('../models');
const appointments = db.appointments;

// Create new appointment
// Validate
exports.create = (req, res) => {
  if (!req.body.id || !req.body.idBuilding || !req.body.idBoiler || !req.body.date || !req.body.startTime || !req.body.endTime || !req.body.idTechnician || !req.body.type){
    res.status(400).send({msg: "Content can't be empty"});
    return;
  }

  // Create
  const newAppointments = new appointments({
    id: req.body.id,
    idBuilding: req.body.idBuilding,
    idBoiler: req.body.idBoiler,
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    idTechnician: req.body.idTechnician,
    type: req.body.type
  });

  // Save
  newAppointments
    .save(newAppointments)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error ocurred while creating the new boiler type'
      });
    });
};

// Update appointment
exports.update = (req, res) => {
  if (!req.body){
    return res.status(400).send({
      message: 'Data body can\'t be empty!'
    });
  }

  // Validate request
  if (!req.body.id || !req.body.idBuilding || !req.body.idBoiler || !req.body.date || !req.body.startTime || !req.body.endTime || !req.body.idTechnician || !req.body.type){
    res.status(400).send({
      message: 'Content can\'t be empty'
    });
   return;
  }

  const id = req.params.id;
  
  appointments.findOneAndUpdate({id}, req.body, {useFindAndModify: false})
    .then(data => {
      if (!data){
        res.status(400).send({
          message: `Can't update the appointment with id ${id}. Appointment was not found` 
        });
      } else{
        res.send({message: 'Appointment type was update successfully'});
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating the Appointments with id ${id}`
      });
    });
};

// Delete appointment by id
exports.delete = (req, res) => {
  const id = req.params.id;
  appointments.findOneAndRemove({id}, {useFindAndModify: false})
  .then(data => 
    res.send({
      message: 'Appointment was removed successfuly'
    })
  )
  .catch(err => {
    res.status(500).send({
      message: `Error removing appointment ${id}`
    });
  });
};

// Get all appointments type
exports.findAll = (req, res) => {
  appointments.find({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: 'Something happend, could not retrieve appointments type'
    });
  });
};

// Get appointment by id
exports.findOne = (req, res) => {
  appointments.findOne({id: req.params.id})
  .then(data => {
    if(!data){
      return res.status(404).send({
        message: `Couldn't find appointment type witd id ${id}`
      })
    }
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: 'Something happend, couldn\'t retrieve appointment type'
    });
  });
};

// Get appointment type Monthly by id
exports.findType = (req, res) => {
  appointments.find({type: req.params.type})
  .then(data => {
    if(!data){
      return res.status(404).send({
        message: `Couldn't find type ${type}`
      })
    }
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: 'Something happend, couldn\'t retrieve type'
    });
  });
};
