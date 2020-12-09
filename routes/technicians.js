const router = require('express').Router();
const technicians = require('../controllers/technicians.js');

router.post('/', technicians.create);
router.put('/:id', technicians.update);
router.delete('/:id', technicians.delete);
router.get('/', technicians.findAll);
router.get('/:id', technicians.findOne);
router.get('/:name', technicians.findName);

module.exports = router;
