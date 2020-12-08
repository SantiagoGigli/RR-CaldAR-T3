const router = require('express').Router();
const buildings = require('../controllers/buildings.js');

// Add a new buildings
router.post('/addNew', buildings.create);

// Update a buildings
router.put('/updateById/:id', buildings.update);

// Delete a buildings by ID
router.delete('/deleteById/:id', buildings.delete);

// Get all the buildings
router.get('/getAll', buildings.findAll);

// Get all by Boiler Id
router.get('/getAllByBoilerId/:id', buildings.getAllByBoilerId);

// Get all by name
router.get('/getAllByName', buildings.findAllByName);

// Get buildings by ID
router.get('/getById/:id', buildings.findOne);

module.exports = router;
