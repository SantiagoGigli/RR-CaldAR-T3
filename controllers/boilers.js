const { ObjectId } = require('mongodb');
const db = require('../models');

const add = (req, res) => {
  const requieredParams = [
    'typeId',
    'maintainanceRate',
    'hourMaintainanceCost',
    'hourEventualCost',
  ];
  const requestBody = req.body;
  const requestParams = Object.keys(requestBody);
  const isRequestComplete = requieredParams.every((key) => requestParams.includes(key));
  if (!isRequestComplete) {
    res.status(400).json({ msg: 'There are missing fields' });
    return;
  }
  const newBoilerJson = {
    typeId: requestBody.typeId,
    maintainanceRate: requestBody.maintainanceRate,
    hourMaintainanceCost: requestBody.hourMaintainanceCost,
    hourEventualCost: requestBody.hourEventualCost,
    idBuilding: requestBody.idBuilding ? ObjectId(requestBody.idBuilding) : null,
  };
  const boiler = new db.Boiler(newBoilerJson);
  boiler
    .save()
    .then((response) => {
      res.json({ msg: 'Boiler added', boiler: response });
    })
    .catch((e) => {
      res.status(500).json({ msg: 'Unable to add boiler', e });
    });
};

const getById = (req, res) => {
  db.Boiler.findOne({ _id: ObjectId(req.params.id) })
    .then((response) => {
      res.json(response);
    })
    .catch((e) => {
      res
        .status(500)
        .json({ msg: `Unable to find boiler with id: ${req.query.id}`, e });
    });
};

const getAllBoilers = (req, res) => {
  db.Boiler.find()
    .then((response) => {
      res.json(response);
    })
    .catch((e) => {
      res.status(500).json({ msg: 'Unable to get boilers', e });
    });
};

const getByBoilerType = (req, res) => {
  db.Boiler.find({ typeId: req.query.typeId })
    .then((response) => {
      res.json(response);
    })
    .catch((e) => {
      res.status(400).json({ msg: 'Unable to get by boiler type', e });
    });
};

const getByBoilerMaintainanceRate = (req, res) => {
  db.Boiler.find({ maintainanceRate: req.query.maintainanceRate })
    .then((response) => {
      res.json(response);
    })
    .catch((e) => {
      res.status(400).json({ msg: 'Unable to get by boiler type', e });
    });
};

const getByBoilerBulding = (req, res) => {
  db.Boiler.find({ idBuilding: req.query.idBuilding })
    .then((response) => {
      res.json(response);
    })
    .catch((e) => {
      res.status(400).json({ msg: 'Unable to get by boiler type', e });
    });
};

const updateBoiler = (req, res) => {
  const { body } = req;
  db.Boiler.updateOne(
    { _id: ObjectId(body.id) },
    {
      $set: body.update,
    },
  )
    .then(() => {
      res.json({ msg: 'record updated!' });
    })
    .catch((e) => {
      res.status(400).json({ msg: 'Unable to update', e });
    });
};

const deleteBoiler = (req, res) => {
  db.Boiler.deleteOne({ _id: ObjectId(req.params.id) })
    .then(() => {
      res.json({ msg: 'Deleted' });
    })
    .catch((e) => {
      res.status(400).json({ msg: 'Failed to delete', e });
    });
};

module.exports = {
  add,
  getById,
  getAllBoilers,
  getByBoilerType,
  getByBoilerMaintainanceRate,
  getByBoilerBulding,
  updateBoiler,
  deleteBoiler,
};
