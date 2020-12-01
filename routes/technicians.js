const technicians = require('../controllers/technicians.js');
const router = require('express').Router();

router.post('/addNew', technicians.create);
router.put('/updateById/:id', technicians.update);
router.delete('/deleteById/:id', technicians.delete);
router.get('/getAll', technicians.findAll);
router.get('/getById/:id', technicians.findOne);
router.get('/getByType/:name', technicians.findName);

module.exports = router;