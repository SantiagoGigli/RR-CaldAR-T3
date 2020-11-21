const express = require('express');
const router = express.Router();
const buildingsData = require('../data/BULDINGS_MOCK_DATA');

router.get('/getAllBuildings', (req, res) => {
    res.json(buildingsData)
});

module.exports = router;
