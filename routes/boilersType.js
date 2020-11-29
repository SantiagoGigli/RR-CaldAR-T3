const boilersType = require('../controllers/boilersTypes.js');
const router = require('express').Router();


// Add a new boiler type
router.post('/addNewBoilerType', boilersType.create);

// Update a boiler type
router.put('/updateById/:id', boilersType.update);

// Delete a boiler type by ID
router.delete('/deleteById/:id', boilersType.delete);

// Get all the boiler type
router.get('/getAll', boilersType.findAll);

// Get boiler type by ID
router.get('/getById/:id', boilersType.findOne);

module.exports = router;