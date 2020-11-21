const { json } = require('express');
const express = require('express');
const router = express.Router();
const buildingsData = require('../data/BULDINGS_MOCK_DATA');

router.get('/getAllBuildings', (req, res) => {
    res.json(buildingsData)
});

router.get('/getById/:id', (req, res) => {
    const requestBuildingId = parseInt(req.params.id);
    const building = buildingsData.filter((building) => building.id === requestBuildingId);
    building.length ? res.json(building) : res.status(400).json({msg: `The building with id ${requestBuildingId} doesn't exist`});
});

module.exports = router;
