const express = require('express')
const app = express()
const port = 3000

const technicians = require('./data/technicians.json');


app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


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
    res.json(technicians.filter(tech => tech.id === parseInt(req.params.id)))
  })
}

getTechnicianById();

// Get technicians by attribute





// Delete technicians by ID

deleteTechnicianById = () => {
  app.delete('/technicians/:id', (req,res) => {
    res.json({msg: `Technician ${req.params.id} deleted`, technicians: technicians.filter(tech => tech.id !== parseInt(req.params.id))})
  })
}

deleteTechnicianById();
