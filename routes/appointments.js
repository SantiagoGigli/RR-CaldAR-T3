const router = require('express').Router();
const appointments = require('../controllers/appointments.js');

// Add a new appointments
router.post('/addNew', appointments.create);

// Update a appointments type
router.put('/updateById/:id', appointments.update);

// Delete a appointments type by ID
router.delete('/deleteById/:id', appointments.delete);

// Get all the appointments type
router.get('/getAll', appointments.findAll);

// Get appointments by ID
router.get('/getById/:id', appointments.findOne);

// Get appointments by type (Monthly / Eventual)
router.get('/getByType/:type', appointments.findType);

module.exports = router;
