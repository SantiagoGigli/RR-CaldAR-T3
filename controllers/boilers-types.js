const express = require('express');
//const app = express();
const router=express.Router();
const boilers_types = require('../data/boilers-types.json');
const fs= require('fs');

// Get list boilers types by attribute type
// http://localhost:3000/getBoilersTypesByType/D
router.get('/getBoilersTypesByType/:type', (req,res)=>{
    
    console.log('getBoilersTypesByType:'+req.params.type);

    const found=boilers_types.some(boiler_type=>boiler_type.description.substring(5,6)==req.params.type)
    
    if(found){
        res.json(boilers_types.filter(boiler_type=>boiler_type.description.substring(5,6)==req.params.type));
    }
    else{
        res.status(400).json({msg: 'There are no boilers of the types ' + req.params.type });
    }
});


// Get list boilers types
// http://localhost:3000/getAllBoilersTypes
router.get('/getAllBoilersTypes',(req,res)=>{
    console.log('getAllBoilersTypes');
    res.json(boilers_types);
});


//Get boilers types by Id
//http://localhost:3000/getBoilersTypesById/2
router.get('/getBoilersTypesById/:id',(req,res)=>{
    console.log('getBoilersTypesById:'+req.params.id);
    const found=boilers_types.some(boiler_type=>boiler_type.id===parseInt(req.params.id));

    if (found){
        res.json(boilers_types.filter(boiler_type=>boiler_type.id===parseInt(req.params.id)));
    }
    else{
        res.status(400).json({msg: 'The are no boiler types with id ' + req.params.id });
    }
});



module.exports=router;