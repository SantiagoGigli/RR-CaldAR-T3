const express = require('express');
const { ObjectId } = require('mongodb');
const db = require('../models');

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
  try{
    const boiler = new db.Boiler(newBoilerJson);
    await boiler.save();
    res.json({msg:'Boiler added', boiler});
  } catch(e){
    res.status(400).json({msg:'Unable to add boiler'});
  }
};

const getById = async(req, res) => {
  try{
    const boiler = await db.Boiler.findOne({_id: ObjectId(req.query.id)});
    res.json(boiler);
  } catch(e){
    res.status(400).json({msg: `Unable to find boiler with id: ${req.query.id}`});
  }
}

const getAllBoilers = async(req, res) => {
  try{
    res.json(await db.Boiler.find());
  } catch(e){
    res.status(500).json({msg: 'Unable to get boilers'});
  }
}

module.exports = {add, getById, getAllBoilers};
