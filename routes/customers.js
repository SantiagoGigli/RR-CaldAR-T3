const router = require('express').Router();
const customers = require('../controllers/customers');

// Add a new customer
router.post('/', customers.create);

// Update a customer
router.put('/:id', customers.update);

// Delete a customer by ID
router.delete('/:id', customers.delete);

// Get all the customers
router.get('/', customers.findAll);

// Get customer by ID
router.get('/:id', customers.findOne);

// Get customer by Type
router.get('/:type', customers.findType);

module.exports = router;
