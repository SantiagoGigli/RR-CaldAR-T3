const router = require('express').Router();
const buildings = require('../controllers/buildings.js');

// Add a new buildings
router.post('/', buildings.create);

// Update a buildings
router.put('/:id', buildings.update);

// Delete a buildings by ID
router.delete('/:id', buildings.delete);

// Get all the buildings
router.get('/', buildings.findAll);

// Get all by Boiler Id
router.get('/:id', buildings.getAllByBoilerId);

// Get all by name
router.get('/', buildings.findAllByName);

// Get buildings by ID
router.get('/:id', buildings.findOne);

module.exports = router;
