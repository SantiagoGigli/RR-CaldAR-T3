const { ObjectId } = require('mongodb');
const db = require('../models');

const add = (req, res) => {
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
  };
  const boiler = new db.Boiler(newBoilerJson);
  boiler.save()
    .then(response => {
      res.json({msg:'Boiler added', boiler: response});
    })
    .catch(e => {
      res.status(400).json({msg:'Unable to add boiler'});
  });
};

const getById = (req, res) => {
  db.Boiler.findOne({_id: ObjectId(req.params.id)})
    .then(response => {
      res.json(response);
    })
    .catch(e => {
      res.status(400).json({msg: `Unable to find boiler with id: ${req.query.id}`});
  });
};

const getAllBoilers = (req, res) => {
  db.Boiler.find()
    .then(response => {
      res.json(response);
    })
    .catch(e => {
      res.status(500).json({msg: 'Unable to get boilers'});
  });
};

const getByBoilerType = (req, res) => {
  db.Boiler.find({typeId: req.query.typeId})
    .then(response => {
      res.json(response);
    })
    .catch(e => {
      res.status(400).json({msg: 'Unable to get by boiler type'});
  });
};

const getByBoilerMaintainanceRate = (req, res) => {
  db.Boiler.find({maintainanceRate: req.query.maintainanceRate})
    .then(response => {
      res.json(response);
    })
    .catch(e => {
      res.status(400).json({msg: 'Unable to get by boiler type'});
  });
};

const getByBoilerBulding = (req, res) => {
  db.Boiler.find({idBuilding: req.query.idBuilding})
    .then(response => {
      res.json(response);
    })
    .catch(e => {
      res.status(400).json({msg: 'Unable to get by boiler type'});
  });
};

const updateBoiler = (req, res) => {
  const body = req.body;
  db.Boiler.updateOne(
    {_id: ObjectId(body.id)},
    {
      $set: body.update
    }
  )
    .then(response => {
      res.json({msg: 'record updated!'});
    })
    .catch(e => {
      res.status(400).json({msg: 'Unable to update'});
  });
};

const deleteBoiler = (req, res) => {
  db.Boiler.deleteOne({_id: ObjectId(req.params.id)})
    .then(reponse => {
      res.json({msg: 'Deleted'});
    })
    .catch(e => {
      res.status(400).json({msg: 'Failed to delete'});
  });
};

module.exports = {add, getById, getAllBoilers, getByBoilerType, getByBoilerMaintainanceRate, getByBoilerBulding, updateBoiler, deleteBoiler};
