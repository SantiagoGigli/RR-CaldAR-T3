const customers = require('../controllers/customers');
const router = require('express').Router();

// Add a new customer
router.post('/', customers.create);

// Update a customer

// Delete a customer by ID

// Get all the customers

// Get customer by ID


module.exports = router;