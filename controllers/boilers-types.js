const express = require('express');
const fs = require('fs');
const dirJson ='../data/boilers-types.json';
let boilers_types = require(dirJson);
const router = express.Router();

// Get list boilers types by attribute type
// http://localhost:3000/boilers-types/getBoilersTypesByType?type=A
router.get('/getBoilersTypesByType', (req,res) => {
  const type = req.query.type;  
  const found = boilers_types.some(boiler_type => boiler_type.description.substring(5,6)===type);
  if(found){
    res.json(boilers_types.filter(boiler_type => boiler_type.description.substring(5,6)===type));
  }
  else{
    res.status(400).json({msg: 'Boiler type with type '+ type + ' not found.'});
  };
});

// Get list boilers types
// http://localhost:3000/boilers-types/getAllBoilersTypes
router.get('/getAllBoilersTypes',(req,res) => {
  res.json(boilers_types);
});

//Get boilers types by Id
//http://localhost:3000/boilers-types/getBoilersTypesById?id=2
router.get('/getBoilersTypesById',(req,res) => {
  const id = req.query.id;   
  const found = boilers_types.some(boiler_type => boiler_type.id===parseInt(id));
  if (found){
    res.json(boilers_types.filter(boiler_type => boiler_type.id===parseInt(id)));
  }
  else{
    res.status(400).json({msg: 'Boiler type with id '+ id + ' not found.'});
  };
});

//Delete boilers types by id
//http://localhost:3000/boilers-types/deleteBoilersTypesById?id=2
router.get('/deleteBoilersTypesById', (req, res) => {
  const id = req.query.id; 
  const found = boilers_types.some(boiler_type=>boiler_type.id===parseInt(id));
  if (found) {
    const boilersTypesUpdate = boilers_types.filter(boiler_type => boiler_type.id !== parseInt(id));   
    fs.writeFileSync('data/boilers-types.json', JSON.stringify(boilersTypesUpdate), err => {
      if(err) console.log(err);      
    });        
    delete require.cache[require.resolve(dirJson)];   // Deleting loaded module
    boilers_types = require(dirJson);
    res.json({msg: 'Boiler Type with id '+ id+' deleted', boilersTypes: boilers_types});
  } 
  else {
    res.status(400).json({msg: 'Boiler type with id '+ id + ' not found.'});
  };
});

module.exports = router;
