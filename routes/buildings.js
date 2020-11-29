const buildings = require('../controllers/buildings.js');
const router = require('express').Router();

// Add a new buildings
router.post('/', buildings.create);

// Update a technician
router.put('/:id', buildings.update);

// Delete a technician by ID
router.delete('/:id', buildings.delete);

// Get all the technicians
router.get('/', buildings.findAll);

// Get technician by ID
router.get('/:id', buildings.findOne);

module.exports = router;
