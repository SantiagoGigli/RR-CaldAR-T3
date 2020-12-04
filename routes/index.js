const boilersTypeRouter = require('./boilersType');
const appointmentsRouter = require('./appointments');
const techniciansRouter = require('./technicians');
const boilersRouter = require('./boilers');
const customersRouter= require('./customers');
const router = require('express').Router();

router.use('/boilersType', boilersTypeRouter);
router.use('/appointments', appointmentsRouter);
router.use('/technicians', techniciansRouter);
router.use('/boilers', boilersRouter);
router.use('/customers', customersRouter);

module.exports = router;
