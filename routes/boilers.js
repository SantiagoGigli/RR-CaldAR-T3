const boilers = require('../controllers/boilers.js');
const router = require('express').Router();


router.post('/add', boilers.add);

// // Update a technician
// router.get('/updateById/:id', technicians.update);

// // Delete a technician by ID
// router.get('/deleteById/:id', technicians.delete);

// // Get all the technicians
// router.get('/deleteById', technicians.findAll);

// // Get technician by ID
// router.get('/deleteById/:id', technicians.findOne);

module.exports = router;