const router = require('express').Router();
const boilersTypeRouter = require('./boilersType');
const appointmentsRouter = require('./appointments');
const techniciansRouter = require('./technicians');
const buildingsRouter = require('./buildings');
const boilersRouter = require('./boilers');
const customersRouter = require('./customers');

router.use('/boilersType', boilersTypeRouter);
router.use('/appointments', appointmentsRouter);
router.use('/technicians', techniciansRouter);
router.use('/buildings', buildingsRouter);
router.use('/technicians', techniciansRouter);
router.use('/boilers', boilersRouter);
router.use('/customers', customersRouter);

module.exports = router;
