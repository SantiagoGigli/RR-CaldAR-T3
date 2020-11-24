const express = require('express');
const fs = require('fs');
const router = express.Router();
const boilers = require('../data/boilers.json');

//Get all boilers
router.get('/getAllBoilers', (req, res) => {
  res.json(boilers);
})

//Get boiler by Id
router.get('/getBoilerById', (req, res) => {
  const id = req.query.id;
  const found = boilers.some(boiler => boiler.id === parseInt(id));
  if(found) {
    res.json(boilers.filter(boiler => boiler.id === parseInt(id)));
  }
  else {
    res.status(400).json({msg: 'The boiler with id ' + id + ' does not exist'});
  }
});

//Get Boiler By Attribute: Type Id
router.get('/getBoilersByType', (req, res) => {
  const type = req.query.type;
  const boilersFound = boilers.some(boiler => boiler.typeId === parseInt(type));
  if(boilersFound) {
    res.json(boilers.filter(boiler => boiler.typeId === parseInt(type)));
  }
  else {
    res.status(400).json({msg: 'There are no boilers of the type ' + typeId});
  }
})

//Get Boiler By Attribute: Maintainace Rate
router.get('/getBoilersByMaintainaceRate', (req, res) => {
  const mRate = req.query.mRate;
  const boilersFound = boilers.some(boiler => boiler.maintainace_rate === mRate);
  if(boilersFound) {
    res.json(boilers.filter(boiler => boiler.maintainace_rate === mRate));
  }
  else {
    res.status(400).json({msg: 'There are no boilers with maintainace ' + mRate });
  }
})

//Delete boiler by Id
router.get('/deleteBoilerById', (req, res) => {
  const id = req.query.id;
  const found = boilers.some(boiler => boiler.id === parseInt(id));  
  if(found) {
    const remainingBoilers = boilers.filter(boiler => boiler.id !== parseInt(id));
    fs.writeFile('data/boilers.json', JSON.stringify(remainingBoilers), err => {
      if(err) {console.log(err);}
    });
    res.json({msg: 'Boiler deleted ', boilers: remainingBoilers});
  }
  else {
    res.status(400).json({msg: 'The boiler with id ' + id + ' does not exist'});
  }
});

module.exports = router;
