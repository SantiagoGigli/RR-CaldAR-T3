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

// Update boiler type
exports.update = (req, res) => {
  if (!req.body){
    return res.status(400).send({
      message: "Data body can't be empty!"
    });
  }

  // Validate request
  if (!req.body.id || !req.body.description || !req.body.stock){
    res.status(400).send({
      message: "Content can't be empty"
    });
   return;
  }

  const id = req.params.id;
  
  boilersType.findOneAndUpdate({id}, req.body, {useFindAndModify: false})
    .then(data => {
      if (!data){
        res.status(400).send({
          message: `Can't update boiler type with id ${id}. Boiler type was not found` 
        });
      } else{
        res.send({message: "Boiler type was update successfuly"});
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating boiler type with id ${id}`
      });
    });




}