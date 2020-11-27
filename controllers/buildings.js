const express = require('express');
const fs = require('fs');
const buildingsData = require('../data/buildings.json');
const router = express.Router();

router.get('/getAllBuildings', (req, res) => {
  res.json(buildingsData);
});

router.get('/getBuildingById', (req, res) => {
  const requestBuildingId = parseInt(req.query.id);
  const building = buildingsData.find(building => building.id === requestBuildingId);
  if (building.id){
    res.json(building);
  } else{
    res.status(400).json({msg: `The building with id ${requestBuildingId} doesn't exist`});
  }   
});

router.get('/getBuildingsByAttribute', (req, res) => {
  const queryKeys = Object.keys(req.query);
  const queryAttr = queryKeys.map(key => req.query[key]);
  const matchingBuildings = [];
  for (let i = 0; i < buildingsData.length; i++){
    const building = buildingsData[i];
    const buildingAttr = queryKeys.map(key => building[key]);
    const areArraysEqual = buildingAttr.every((val, index) => val.toString() === queryAttr[index]);
    if (queryAttr.length === buildingAttr.length && areArraysEqual) matchingBuildings.push(building);
  }
  if (matchingBuildings.length){
    res.json(matchingBuildings);
  } else{
    res.status(400).json({msg: 'There isn\'t any building match with your search'});
  }
});

router.get('/deleteBuildingById', (req, res) => {
  const requestBuildingId = parseInt(req.query.id);
  const building = buildingsData.some(building => building.id === requestBuildingId);
  if (building){
    const newData = buildingsData.filter(building => building.id !== requestBuildingId);
    fs.writeFile(__dirname + '/../data/buildings.json', JSON.stringify(newData), err => {
      if (err) console.log(err);
    });
    res.json({msg: 'Building deleted', buildings: newData});
  } else{
    res.status(400).json({msg: `The building with id ${requestBuildingId} doesn't exist`});
  }
});

module.exports = router;
