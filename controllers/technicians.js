const express = require('express');
const fs = require('fs');
const technicians = require('../data/technicians.json');
const app = express();

// Get all the technicians
app.get('/getTechniciansAll', (req,res) => {
  res.json(technicians);
});

// Get technicians by ID
app.get('/getTechnicianById', (req,res) => {
  let found = technicians.some(tech => tech.id === parseInt(req.query.id));
  if (found){
    res.json(technicians.find(tech => tech.id === parseInt(req.query.id)));
  } else {
    res.status(404).json({msg: `Technician with ID ${req.query.id} doens't exist`});
  } 
});

// Get technicians by attribute (Name)
app.get('/getTechniciansByName', (req,res) => {
  res.json(technicians.filter(tech => tech.first_name.includes(req.query.first_name)));
});

// Delete technicians by ID
app.get('/deleteTechnicianById', (req,res) => {
  let found = technicians.some(tech => tech.id === parseInt(req.query.id));
  const techniciansLeft = technicians.filter(tech => tech.id !== parseInt(req.query.id));
  if (found){
    fs.writeFile('data/technicians.json', JSON.stringify(techniciansLeft), err => {
      if (err){
        console.log(err);
      } else {
        res.json({msg: `technician ${req.query.id} deleted`, Technicians: techniciansLeft});
      }
    });
  } else {
    res.status(404).json({msg: `Technician with ID ${req.query.id} doens't exist`});
  }
});

module.exports = app;