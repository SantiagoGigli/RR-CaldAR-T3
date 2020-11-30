const { ObjectId } = require('mongodb');
const db = require('../models');

const add = async(req, res) => {
  const requieredParams = ['typeId', 'maintainanceRate', 'hourMaintainanceCost', 'hourEventualCost', 'idBuilding'];
  const requestBody = req.body;
  const requestParams = Object.keys(requestBody);
  const isRequestComplete = requieredParams.every(key => requestParams.includes(key));
  if (!isRequestComplete){
    return res.status(400).json({msg: 'There are missing fields'});
  }
  const newBoilerJson = {
    typeId: requestBody.typeId,
    maintainanceRate: requestBody.maintainanceRate,
    hourMaintainanceCost: requestBody.hourMaintainanceCost,
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
};

const getAllBoilers = async(req, res) => {
  try{
    res.json(await db.Boiler.find());
  } catch(e){
    res.status(500).json({msg: 'Unable to get boilers'});
  }
};

const getByBoilerType = async(req, res) => {
  try{
    res.json(await db.Boiler.find({typeId: req.query.typeId}));
  } catch(e){
    res.status(400).json({msg: 'Unable to get by boiler type'});
  }
};

const getByBoilerMaintainanceRate = async(req, res) => {
  try{
    res.json(await db.Boiler.find({maintainanceRate: req.query.maintainanceRate}));
  } catch(e){
    res.status(400).json({msg: 'Unable to get by boiler type'});
  }
};

const getByBoilerBulding = async(req, res) => {
  try{
    res.json(await db.Boiler.find({idBuilding: req.query.idBuilding}));
  } catch(e){
    res.status(400).json({msg: 'Unable to get by boiler type'});
  }
};

const updateBoiler = async(req, res) => {
  const body = req.body;
  try{
    await db.Boiler.updateOne(
      {_id: ObjectId(body.id)},
      {
        $set: body.update
      }
    );
    res.json({msg: 'record updated!'});
  } catch(e){
    res.status(400).json({msg: 'Unable to update'});
  }
};

const deleteBoiler = async(req, res) => {
  try{
    await db.Boiler.deleteOne({_id: ObjectId(req.query.id)});
    res.json({msg: 'Deleted'});
  } catch(e){
    res.status(400).json({msg: 'Failed to delete'});
  }
};

module.exports = {add, getById, getAllBoilers, getByBoilerType, getByBoilerMaintainanceRate, getByBoilerBulding, updateBoiler, deleteBoiler};
