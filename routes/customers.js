const customers = require("../controllers/customers");
const router = require("express").Router();

// Add a new customer
router.post("/add", customers.create);

// Update a customer
router.put("/update/:id", customers.update);

// Delete a customer by ID
router.delete("/delete/:id", customers.delete);

// Get all the customers
router.get("/getAll", customers.findAll);

// Get customer by ID
router.get("/getById/:id", customers.findOne);

// Get customer by Type
router.get("/getByType/:type", customers.findType);

module.exports = router;
