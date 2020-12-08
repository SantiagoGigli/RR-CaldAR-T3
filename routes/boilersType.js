const router = require('express').Router();
const boilersType = require('../controllers/boilersTypes.js');

// Add a new boiler type
router.post('/addNew', boilersType.create);

// Update a boiler type
router.put('/updateById/:id', boilersType.update);

// Delete a boiler type by ID
router.delete('/deleteById/:id', boilersType.delete);

// Get all the boiler type
router.get('/getAll', boilersType.findAll);

// Get boiler type by ID
router.get('/getById/:id', boilersType.findOne);

// Get boiler type by description
router.get('/getByDescription/:description', boilersType.findDescription);

module.exports = router;
