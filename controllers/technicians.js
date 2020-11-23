const express = require('express');
const app = express();
const technicians = require('../data/technicians.json');
const fs = require('fs');

// Get all the technicians

getTechniciansAll = () => {
    app.get('/technicians', (req,res)=>{
      res.json(technicians);
    })
  }
  getTechniciansAll();
  
// Get technicians by ID

getTechnicianById = () => {
    app.get('/technicians/:id', (req,res) => {
        res.json(technicians.filter(tech => tech.id === parseInt(req.params.id)));
    })
}
getTechnicianById();

// Get technicians by attribute (Name)

TechniciansByAttribute = () => {
    app.get('/technicians/firstname/:first_name', (req,res)=>{
        res.json(technicians.filter(tech => tech.first_name.includes(req.params.first_name)));
    })
}
TechniciansByAttribute();

// Delete technicians by ID

deleteTechnicianById = () => {
    app.delete('/technicians/:id', (req,res) => {
        const techniciansLeft = technicians.filter(tech => tech.id !== parseInt(req.params.id));
        fs.writeFile('data/technicians.json',JSON.stringify(techniciansLeft),err=>{
            if(err){
                console.log(err);
            }   else{
                    res.json({msg: `Technician ${req.params.id} deleted`, Technicians: techniciansLeft });
                }
        });
        
    });
}
deleteTechnicianById();

module.exports = app;