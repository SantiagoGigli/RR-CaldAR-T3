const technicians = require('../controllers/technicians.js');
const router = require('express').Router();

router.get('/', technicians.findAll);
router.get('/:id', technicians.findOne);
router.get('/name/:name', technicians.findName);
router.post('/', technicians.create);
router.put('/:id', technicians.update);
router.delete('/:id', technicians.delete);

module.exports = router;