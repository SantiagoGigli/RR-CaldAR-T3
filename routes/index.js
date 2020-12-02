const techniciansRouter = require('./technicians');
const customersRouter= require('./customers');
const router = require('express').Router();

router.use('/technicians', techniciansRouter);
router.use('/customers', customersRouter);

module.exports = router;