const boilers = require('../controllers/boilers.js');
const router = require('express').Router();

router.post('/addNew', boilers.add);

router.get('/getById/:id', boilers.getById);

router.get('/getAllBoilers', boilers.getAllBoilers);

router.get('/getByBoilerType', boilers.getByBoilerType);

router.get('/getByBoilerMaintainanceRate', boilers.getByBoilerMaintainanceRate);

router.get('/getByBoilerBulding', boilers.getByBoilerBulding);

router.put('/updateById', boilers.updateBoiler);

router.delete('/deleteById/:id', boilers.deleteBoiler);

module.exports = router;
