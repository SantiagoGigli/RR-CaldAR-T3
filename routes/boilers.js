const boilers = require('../controllers/boilers.js');
const router = require('express').Router();

router.post('/add', boilers.add);

router.get('/getById', boilers.getById);

router.get('/getAllBoilers', boilers.getAllBoilers);

router.get('/getByBoilerType', boilers.getByBoilerType);

router.get('/getByBoilerMaintainanceRate', boilers.getByBoilerMaintainanceRate);

router.get('/getByBoilerBulding', boilers.getByBoilerBulding);

router.put('/update', boilers.updateBoiler);

router.delete('/delete', boilers.deleteBoiler);

module.exports = router;
