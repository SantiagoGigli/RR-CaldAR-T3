const fs = require('fs');

module.exports = {
  getById: (req, res, data) => {
    const requestEntityId = parseInt(req.params.id);
    const entity = data.filter(ent => ent.id === requestEntityId);
    entity.length ? res.json(entity) : res.status(400).json({msg: `The entity with id ${requestEntityId} doesn't exist`});
  },
  getByAttribute: (req, res, data) => {
    const queryKeys = Object.keys(req.query);
    const queryAttr = queryKeys.map(key => req.query[key]);
    const matchingEntities = [];
    for (let i = 0; i < data.length; i++) {
      const entity = data[i];
      const entityAttrs = queryKeys.map(key => entity[key]);
      if (queryAttr.length === entityAttrs.length && entityAttrs.every((val, index) => val == queryAttr[index])) matchingEntities.push(entity);
    }
    matchingEntities.length ? res.json(matchingEntities) : res.status(400).json({msg: 'There isn\'t any entity match with your search'});
  },
  deleteById: (req, res, data, mockedDataFilePath) => {
    const requestEntityId = parseInt(req.params.id);
    const entity = data.some(ent => ent.id === requestEntityId);
    if (entity) {
      const newData = data.filter(ent => ent.id !== requestEntityId);
      fs.writeFile(__dirname + mockedDataFilePath, JSON.stringify(newData), err => {
        if (err) console.log(err);
      });
      res.json({msg: 'Entity deleted', result: newData});
    } else {
      res.status(400).json({msg: `The entity with id ${requestEntityId} doesn't exist`});
    }
  }
}
