const router = require('express').Router();
const boilers = require('../controllers/boilers.js');

router.post('/', boilers.add);

router.get('/:id', boilers.getById);

router.get('/', boilers.getAllBoilers);

router.get('/', boilers.getByBoilerType);

router.get('/', boilers.getByBoilerMaintainanceRate);

router.get('/', boilers.getByBoilerBulding);

router.put('/:id', boilers.updateBoiler);

router.delete('/:id', boilers.deleteBoiler);

module.exports = router;
