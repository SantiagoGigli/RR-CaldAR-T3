const router = require('express').Router();
const appointments = require('../controllers/appointments.js');

// Add a new appointments
router.post('/', appointments.create);

// Update a appointments type
router.put('/:id', appointments.update);

// Delete a appointments type by ID
router.delete('/:id', appointments.delete);

// Get all the appointments type
router.get('/', appointments.findAll);

// Get appointments by ID
router.get('/:id', appointments.findOne);

// Get appointments by type (Monthly / Eventual)
router.get('/:type', appointments.findType);

module.exports = router;
