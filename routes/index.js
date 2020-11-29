const techniciansRouter = require('./technicians');
const boilersRouter = require('./boilers');
const router = require('express').Router();

router.use('/technicians', techniciansRouter);
router.use('/boilers', boilersRouter);

module.exports = router;