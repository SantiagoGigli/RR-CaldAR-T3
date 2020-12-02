const { parse } = require('dotenv/types');
const { Int32 } = require('mongodb');
const db = require('../models');
const buildings = db.buildings;

// Add a new buildings
//POST http://localhost:3000/buildings/addNew
exports.create = (req, res) => {
  //Validate
  if (!req.body.id || !req.body.address){
    res.status(400).send({
      message: 'Building Creation need ID and ADDRESS.'
    });
    return;
  };
  
  //Create
  const building = new buildings ({
    id: req.body.id,
    address: req.body.address,
    name: req.body.name,
    phone: req.body.phone,
    idCustomer: req.body.idCustomer,
    boilers: req.body.boilers
  });

  //Save
  building
    .save(building)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message  || 'Building Creation Error.'
      });
    });
};

//Update
//PUT http://localhost:3000/buildings/updateById/1
exports.update = (req, res) => {
  //Validate
  if (!req.body.id || !req.body.address){
    res.status(400).send({
      message: 'Building Update need ID and ADDRESS.'
    });
    return;
  };

  const id = req.params.id;

  buildings.findOneAndUpdate({id}, req.body, {useFindAndModify: false})
    .then(data => {
      if (!data){
        return res.status(404).send({
          message:'Building ID: '+id+' not found.'
        });
      } else
      res.send({ message: 'Building '+id+ ' updated'});       
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message  || 'Building Update Error.'
      });
    });
};  

//Delete One
//DELETE http://localhost:3000/buildings/deleteById/1
exports.delete = (req, res) => {
  const id = req.params.id;
  buildings.findOneAndRemove({id}, {useFindAndModify: false})
    .then(data => {
      if (!data){
        return res.status(404).send({
          message:'Building ID: '+id+' not found.'
        });
      }
      res.send({ message: 'Building '+id+ ' removed'});       
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message  || 'Building Delete One Error.'
      });
    });
};  

//Retrieve All
//GET http://localhost:3000/buildings/getAll
exports.findAll = (req, res) => {
  buildings.find({})
    .then(data => {
      res.send(data);  
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message  || 'Building Find All Error.'
      });
    });
};

//Retrieve One
//GET http://localhost:3000/buildings/getById/1
exports.findOne = (req, res) => {
  buildings.findOne({id: req.params.id})
    .then(data => {
      if (!data){
        return res.status(404).send({
          message:'Building ID: '+req.params.id+' not found.'
        });
      }
      res.send(data);  
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message  || 'Building Find One Error.'
      });
    });
};  

//Retrieve All By Name
//GET http://localhost:3000/buildings/getAllByName?name=Empire 2
exports.findAllByName = (req, res) => {
  const namePar = req.query.name; 
  buildings.find({name: namePar})
    .then(data => {
      res.send(data);  
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message  || 'Building Find All By Name Error.'
      });
    });
};

//Retrieve All By Boiler ID
//GET http://localhost:3000/buildings/getAllByBoilerId/1
exports.getAllByBoilerId = (req, res) => {
  buildings.find({boilers: parseInt(req.params.id)})
    .then(data => {
      res.send(data);  
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message  || 'Building Find All By Boiler ID Error.'
      });
    });
};
