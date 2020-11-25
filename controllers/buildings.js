const express = require('express');
const router = express.Router();
const buildingsData = require('../data/BULDINGS_MOCK_DATA.json');

router.get('/getAllBuildings', (req, res) => {
  res.json(buildingsData);
});

router.get('/getById', (req, res) => {
  const requestEntityId = parseInt(req.query.id);
  const entity = buildingsData.some(ent => ent.id === requestEntityId);
  if (entity) {
    res.json(entity);
  } else {
    res.status(400).json({msg: `The entity with id ${requestEntityId} doesn't exist`});
  }
});

router.get('/getByAttribute', (req, res) => {
  const queryKeys = Object.keys(req.query);
  const queryAttr = queryKeys.map(key => req.query[key]);
  const matchingEntities = [];
  for (let i = 0; i < buildingsData.length; i++) {
    const entity = buildingsData[i];
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
  const requestEntityId = parseInt(req.query.id);
  const entity = buildingsData.some(ent => ent.id === requestEntityId);
  if (entity) {
    const newData = buildingsData.filter(ent => ent.id !== requestEntityId);
    fs.writeFile(__dirname + mockedDataFilePath, JSON.stringify(newData), err => {
      if (err) console.log(err);
    });
    res.json({msg: 'Entity deleted', result: newData});
  } else {
    res.status(400).json({msg: `The entity with id ${requestEntityId} doesn't exist`});
  }
});

module.exports = router;
