const boilersTypeRouter = require('./boilersType');
const appointmentsRouter = require('./appointments');

const router = require('express').Router();

router.use('/boilersType', boilersTypeRouter);
router.use('/appointments', appointmentsRouter);


module.exports = router;
