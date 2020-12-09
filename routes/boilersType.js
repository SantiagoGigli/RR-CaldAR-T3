const router = require('express').Router();
const boilersType = require('../controllers/boilersTypes.js');

// Add a new boiler type
router.post('/', boilersType.create);

// Update a boiler type
router.put('/:id', boilersType.update);

// Delete a boiler type by ID
router.delete('/:id', boilersType.delete);

// Get all the boiler type
router.get('/', boilersType.findAll);

// Get boiler type by ID
router.get('/:id', boilersType.findOne);

// Get boiler type by description
router.get('/:description', boilersType.findDescription);

module.exports = router;
