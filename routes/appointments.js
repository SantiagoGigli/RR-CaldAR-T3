const appointments = require('../controllers/appointments.js');
const router = require('express').Router();


// Add a new appointments
router.post('/addNewappointments', appointments.create);

// Update a appointments type
router.put('/updateById/:id', appointments.update);

// Delete a appointments type by ID
router.delete('/deleteById/:id', appointments.delete);

// Get all the appointments type
router.get('/getAll', appointments.findAll);

// Get appointments by ID
router.get('/getById/:id', appointments.findOne);

// Get appointments monthly by ID
router.get('/getByType/:type', appointments.findType);

module.exports = router;
