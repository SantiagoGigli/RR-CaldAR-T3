const express = require('express');
const router = express.Router();
const abmUtils = require('../utils/ABMUtils');
const buildingsData = require('../data/BULDINGS_MOCK_DATA.json');

router.get('/getAllBuildings', (req, res) => {
    res.json(buildingsData);
});

router.get('/getById/:id', (req, res) => {
    abmUtils.getById(req, res, buildingsData);
});

router.get('/getByAttribute', (req, res) => {
    abmUtils.getByAttribute(req, res, buildingsData);
});

router.delete('/deleteById/:id', (req, res) => {
    abmUtils.deleteById(req, res, buildingsData, '/../data/BULDINGS_MOCK_DATA.json');
});

module.exports = router;
