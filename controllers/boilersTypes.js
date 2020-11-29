const db = require('../models');
const boilersType = db.boilersType;

// Create new boiler type
// Validate
exports.create = (req, res) => {
if (!req.body.id || !req.body.description || !req.body.stock){
  res.status(400).send({msg: "Content can't be empty"});
  return;
}


// Create
const newBoilerType = new boilersType({
  id: req.body.id,
  description: req.body.description,
  stock: req.body.stock
});

// Save
newBoilerType
  .save(newBoilerType)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error ocurred while creating the new boiler type"
    });
  });
}