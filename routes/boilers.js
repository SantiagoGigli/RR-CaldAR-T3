const boilers = require('../controllers/boilers.js');
const router = require('express').Router();

router.post('/add', boilers.add);

router.get('/getById', boilers.getById);

router.get('/getAllBoilers', boilers.getAllBoilers)

// // Delete a technician by ID
// router.get('/deleteById/:id', technicians.delete);

// // Get all the technicians
// router.get('/deleteById', technicians.findAll);

// // Get technician by ID
// router.get('/deleteById/:id', technicians.findOne);

module.exports = router;