const express = require('express');
const router=express.Router();
const dir_json='../data/boilers-types.json';
let boilers_types = require(dir_json);
const fs= require('fs');


// Get list boilers types by attribute type
// http://localhost:3000/boilers-types/getByType/D
router.get('/getByType/:type', (req,res)=>{
    
    console.log('getBoilersTypesByType:'+req.params.type);

    const found=boilers_types.some(boiler_type=>boiler_type.description.substring(5,6)==req.params.type)
    
    if(found){
        res.json(boilers_types.filter(boiler_type=>boiler_type.description.substring(5,6)==req.params.type));
    }
    else{
        res.status(400).json({msg: 'Boiler type with type '+ req.params.type + ' not found.' });
    }
});


// Get list boilers types
// http://localhost:3000/boilers-types/getAll
router.get('/getAll',(req,res)=>{
    console.log('getAllBoilersTypes');
    res.json(boilers_types);
});


//Get boilers types by Id
//http://localhost:3000/boilers-types/getById/2
router.get('/getById/:id',(req,res)=>{
    console.log('getBoilersTypesById:'+req.params.id);
    const found=boilers_types.some(boiler_type=>boiler_type.id===parseInt(req.params.id));

    if (found){
        res.json(boilers_types.filter(boiler_type=>boiler_type.id===parseInt(req.params.id)));
    }
    else{
        res.status(400).json({msg: 'Boiler type with id '+ req.params.id + ' not found.'});
    }
});


//Delete boilers types by id
//http://localhost:3000/boilers-types/deleteById/2
router.delete('/deleteById/:id', (req, res) => {
    console.log('deleteBoilersTypesById:'+req.params.id);
    const found=boilers_types.some(boiler_type=>boiler_type.id===parseInt(req.params.id));
    if (found) {
        const boilersTypesUpdate = boilers_types.filter(boiler_type => boiler_type.id !== parseInt(req.params.id));   
        fs.writeFileSync('data/boilers-types.json', JSON.stringify(boilersTypesUpdate), err => {
            if (err) {
                console.log(err);                
            }            
        });        
        delete require.cache[require.resolve(dir_json)]   // Deleting loaded module
        boilers_types = require(dir_json);
        res.json({msg: 'Boiler Type with id '+ req.params.id+' deleted', NewBoilersTypes: boilers_types});
    } else {
        res.status(400).json({msg: 'Boiler type with id '+ req.params.id + ' not found.'});
    }

});


module.exports=router;