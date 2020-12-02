<<<<<<< HEAD
const boilersTypeRouter = require('./boilersType');
const appointmentsRouter = require('./appointments');

const router = require('express').Router();

router.use('/boilersType', boilersTypeRouter);
router.use('/appointments', appointmentsRouter);

=======
const techniciansRouter = require('./technicians');
const customersRouter= require('./customers');
const router = require('express').Router();

router.use('/technicians', techniciansRouter);
router.use('/customers', customersRouter);
>>>>>>> development

module.exports = router;
