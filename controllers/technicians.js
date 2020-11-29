const db = require('../models');
const Technician = db.technicians;

exports.create = (req, res) => {
  if(!req.body.name || !req.body.id || !req.body.email || !req.body.hourRate || !req.body.typeBoilers || !req.body.dailyCapacity) {
    res.status(400).send({ message: "Content can not be empty!"});
    return;
  }
  const technician = new Technician({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    hourRate: req.body.hourRate,
    typeBoilers: req.body.typeBoilers,
    dailyCapacity: req.body.dailyCapacity,
  });
  technician
    .save(technician)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while creating the technician."
      });
    });
}

exports.findAll = (req, res) => {
  Technician.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving technicians."
      });
    });
}

exports.findOne = (req, res) => {
  Technician.findOne({id: req.params.id})
    .then(data => {
      if(!data) {
        return res.status(404).send({
          message: `Technician with id ${req.params.id} was not found`
        });
      };
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving technician."
      });
    });
}

exports.findName = (req, res) => {
  const name = req.params.name;
  Technician.findOne({name})
    .then(data => {
      if(!data) {
        return res.status(404).send({
          message: `Technician with name ${name} was not found`
        });
      };
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving technician."
      });
    });
}

exports.delete = (req, res) => {
  const id = req.params.id;
  Technician.findOneAndRemove({id}, {useFindeAndModify: false})
    .then(data => res.send({message: `Technician was removed succesfully`}))
    .catch(err => {
      res.status(500).send({
        message: `Some error ocurred while removing technician with id = ${id}`
      });
    });
}

exports.update = (req, res) => {
  if(!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  if(!req.body.name || !req.body.id || !req.body.email || !req.body.hourRate || !req.body.typeBoilers || !req.body.dailyCapacity) {
    res.status(400).send({ message: "Content can not be empty!"});
    return;
  };
  const id = req.params.id;
  Technician.findOneAndUpdate({id}, req.body, {useFindAndModify: false})
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: `Cannot update Technician with id = ${id}. Maybe Technician was not found`
        });
      }
      else res.send({message: "Technician was updated succesfully"});
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Technician with id = ${id}`
      });
    });
};
