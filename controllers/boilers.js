const express = require('express');
const db = require('../models');
const router = express.Router();

const add = async(req, res) => {
  const requieredParams = ['typeId', 'maintainaceRate', 'hourMaintainaceCost', 'hourEventualCost', 'idBuilding'];
  const requestBody = req.body;
  const requestParams = Object.keys(requestBody);
  const isRequestComplete = requieredParams.every(key => requestParams.includes(key));
  if (!isRequestComplete){
    return res.status(400).json({msg: 'There are missing fields'});
  }
  const newBoilerJson = {
    typeId: requestBody.typeId,
    maintainaceRate: requestBody.maintainaceRate,
    hourMaintainaceCost: requestBody.hourMaintainaceCost,
    hourEventualCost: requestBody.hourEventualCost,
    idBuilding: requestBody.idBuilding
  }
  const boiler = new db.Boiler(newBoilerJson);
  try{
    await boiler.save(boiler);
    res.json({msg:'Boiler added', boiler});
  } catch(e){
    res.status(400).json({msg:'Unable to add boiler'});
  }
}

module.exports = {add, findById};
