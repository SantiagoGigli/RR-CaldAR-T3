const express = require('express');
const router = express.Router();
const buildingsData = require('../data/BULDINGS_MOCK_DATA');

router.get('/getAllBuildings', (req, res) => {
    res.json(buildingsData);
});

router.get('/getById/:id', (req, res) => {
    const requestBuildingId = parseInt(req.params.id);
    const building = buildingsData.filter(building => building.id === requestBuildingId);
    building.length ? res.json(building) : res.status(400).json({msg: `The building with id ${requestBuildingId} doesn't exist`});
});

router.get('/getByAttribute', (req, res) => {
    const queryKeys = Object.keys(req.query);
    const queryAttr = queryKeys.map(key => req.query[key]);
    const matchingBuildings = [];
    for (let i = 0; i < buildingsData.length; i++) {
        const building = buildingsData[i];
        const buildingAttr = queryKeys.map(key => building[key]);
        if (queryAttr.length === buildingAttr.length && buildingAttr.every((val, index) => val == queryAttr[index])) {
            matchingBuildings.push(building);
        }
    }
    matchingBuildings.length ? res.json(matchingBuildings) : res.status(400).json({msg: 'There isn\'t any building match with your search'})
});

module.exports = router;
