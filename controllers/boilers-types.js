const express = require('express');
//const app = express();
const router=express.Router();
const boilers_types = require('../data/boilers-types.json');
const fs= require('fs');

// Get list boiler types by attribute type
// http://localhost:3000/getBoilersTypesByType/D
router.get('/getBoilersTypesByType/:type', (req,res)=>{
    
    console.log('getBoilersTypesByType:'+req.params.type);

    const found=boilers_types.some(boilers_types=>boilers_types.description.substring(5,6)==req.params.type)
    
    if(found){
        res.json(boilers_types.filter(boilers_types=>boilers_types.description.substring(5,6)==req.params.type));
    }
    else{
        res.status(400).json({msg: 'There are no boilers of the types ' + req.params.type });
    }
});


// Get list boiler types
// http://localhost:3000/getAllBoilersTypes
router.get('/getAllBoilersTypes',(req,res)=>{
    console.log('getAllBoilersTypes');
    res.json(boilers_types);
});



module.exports=router;