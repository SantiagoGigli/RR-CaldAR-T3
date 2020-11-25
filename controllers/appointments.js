const express = require('express');
const router = express.Router();
const appointmentsData = require('../data/APPOINTMENTS_MOCK_DATA.json');

router.get('/getAllAppointments', (req, res) => {
  res.json(appointmentsData);
});

router.get('/getById', (req, res) => {
    const requestEntityId = parseInt(req.query.id);
    const entity = appointmentsData.filter(ent => ent.id === requestEntityId);
    entity.length ? res.json(entity) : res.status(400).json({msg: `The entity with id ${requestEntityId} doesn't exist`});
});

router.get('/getByAttribute', (req, res) => {
  const queryKeys = Object.keys(req.query);
  const queryAttr = queryKeys.map(key => req.query[key]);
  const matchingEntities = [];
  for (let i = 0; i < appointmentsData.length; i++) {
    const entity = appointmentsData[i];
    const entityAttrs = queryKeys.map(key => entity[key]);
    const areArraysEqual =entityAttrs.every((val, index) => val == queryAttr[index])
    if (queryAttr.length === entityAttrs.length && areArraysEqual) matchingEntities.push(entity);
  }
  if (entity) {
    res.json(matchingEntities);
  } else {
    res.status(400).json({msg: `The entity with id ${requestEntityId} doesn't exist`});
  }
});

router.get('/deleteById', (req, res) => {
  abmUtils.deleteById(req, res, appointmentsData, '/../data/APPOINTMENTS_MOCK_DATA.json');
});

module.exports = router;
