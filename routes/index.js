const boilersTypeRouter = require('./boilersType');
const appointmentsRouter = require('./appointments');
const techniciansRouter = require('./technicians');
const buildingsRouter = require('./buildings');
const customersRouter= require('./customers');
const router = require('express').Router();

router.use('/boilersType', boilersTypeRouter);
router.use('/appointments', appointmentsRouter);
router.use('/technicians', techniciansRouter);
router.use('/buildings', buildingsRouter);
router.use('/technicians', techniciansRouter);
router.use('/customers', customersRouter);

module.exports = router;
