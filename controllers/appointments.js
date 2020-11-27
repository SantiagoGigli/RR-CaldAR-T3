const express = require('express');
const fs = require('fs');
const appointmentsData = require('../data/appointments.json');
const router = express.Router();

router.get('/getAllAppointments', (req, res) => {
  res.json(appointmentsData);
});

router.get('/getAppointmentById', (req, res) => {
    const requestEntityId = parseInt(req.query.id);
    const entity = appointmentsData.find(ent => ent.id === requestEntityId);
    if (entity){
      res.json(entity);
    } else{
      res.status(400).json({msg: `The entity with id ${requestEntityId} doesn't exist`});
    }
});

router.get('/getAppointmentsByAttribute', (req, res) => {
  const queryKeys = Object.keys(req.query);
  const queryAttr = queryKeys.map(key => req.query[key]);
  const matchingEntities = [];
  for (let i = 0; i < appointmentsData.length; i++) {
    const entity = appointmentsData[i];
    const entityAttrs = queryKeys.map(key => entity[key]);
    const areArraysEqual = entityAttrs.every((val, index) => val == queryAttr[index]);
    if (queryAttr.length === entityAttrs.length && areArraysEqual) matchingEntities.push(entity);
  }
  if (matchingEntities.length){
    res.json(matchingEntities);
  } else{
    res.status(400).json({msg: `No results`});
  }
});

router.get('/deleteAppointmentById', (req, res) => {
  const requestEntityId = parseInt(req.query.id);
  const entity = appointmentsData.some(ent => ent.id === requestEntityId);
  if (entity){
    const newData = appointmentsData.filter(ent => ent.id !== requestEntityId);
    fs.writeFile(__dirname + '/../data/appointments.json', JSON.stringify(newData), err => {
      if (err) console.log(err);
    });
    res.json({msg: 'Entity deleted', result: newData});
  } else{
    res.status(400).json({msg: `The entity with id ${requestEntityId} doesn't exist`});
  }
});

module.exports = router;
