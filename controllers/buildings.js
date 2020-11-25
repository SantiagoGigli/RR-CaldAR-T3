const express = require('express');
const fs = require('fs');
const buildingsData = require('../data/BULDINGS_MOCK_DATA.json');
const router = express.Router();

router.get('/getAllBuildings', (req, res) => {
  res.json(buildingsData);
});

router.get('/getById', (req, res) => {
  const requestBuildingId = parseInt(req.query.id);
  const building = buildingsData.find(building => building.id === requestBuildingId);
  if (building.id) {
    res.json(building);
  } else {
    res.status(400).json({msg: `The building with id ${requestBuildingId} doesn't exist`});
  }   
});

router.get('/getByAttribute', (req, res) => {
  const queryKeys = Object.keys(req.query);
  const queryAttr = queryKeys.map(key => req.query[key]);
  const matchingBuildings = [];
  for (let i = 0; i < buildingsData.length; i++) {
    const building = buildingsData[i];
    const buildingAttr = queryKeys.map(key => building[key]);
    const areArraysEqual = buildingAttr.every((val, index) => val.toString() === queryAttr[index]);
    if (queryAttr.length === buildingAttr.length && areArraysEqual) matchingBuildings.push(building);
  }
  if (matchingBuildings.length) {
    res.json(matchingBuildings);
  } else {
    res.status(400).json({msg: 'There isn\'t any building match with your search'});
  }
});

router.get('/deleteById', (req, res) => {
  const requestBuildingId = parseInt(req.query.id);
  const building = buildingsData.some(building => building.id === requestBuildingId);
  if (building) {
    const newData = buildingsData.filter(building => building.id !== requestBuildingId);
    fs.writeFile(__dirname + '/../data/BULDINGS_MOCK_DATA.json', JSON.stringify(newData), err => {
      if (err) console.log(err);
    });
    res.json({msg: 'Building deleted', buildings: newData});
  } else {
    res.status(400).json({msg: `The building with id ${requestBuildingId} doesn't exist`});
  }
});

module.exports = router;
