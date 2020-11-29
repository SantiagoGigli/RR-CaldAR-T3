const techniciansRouter = require('./technicians');
const buildingsRouter = require('./buildings');
const router = require('express').Router();

router.use('/technicians', techniciansRouter);
router.use('/buildings', buildingsRouter);

module.exports = router;