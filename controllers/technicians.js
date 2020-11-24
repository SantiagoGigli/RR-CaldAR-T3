const express = require('express');
const fs = require('fs');
const technicians = require('../data/technicians.json');
const app = express();

// Get all the technicians

app.get('/getTechniciansAll', (req,res)=>{
  res.json(technicians);
});

// Get technicians by ID

app.get('/getTechnicianById', (req,res) => {
  res.json(technicians.filter(tech => tech.id === parseInt(req.query.id)));
});

// Get technicians by attribute (Name)

app.get('/getTechniciansByName', (req,res) => {
  res.json(technicians.filter(tech => tech.first_name.includes(req.query.first_name)));
});

// Delete technicians by ID

app.get('/deleteTechnicianById', (req,res) => {
	const techniciansLeft = technicians.filter(tech => tech.id !== parseInt(req.query.id));
	fs.writeFile('data/technicians.json',JSON.stringify(techniciansLeft),err=>{
		if(err){
			console.log(err);
		}	else{
				res.json({msg: `Technician ${req.params.id} deleted`, Technicians: techniciansLeft });
			}
	});
});

module.exports = app;