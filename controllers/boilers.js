const express=require('express')
const router=express.Router();

const boilersData=require('../data/boilers.json')

//Get all boilers

router.get('/boilers',(req,res)=>{
    res.json(boilersData)
})

//Get boiler by Id
router.get('/boilers/:id',(req,res)=>{
    const found=boilersData.some(boiler=>boiler.id===parseInt(req.params.id));

    if (found){
        res.json(boilersData.filter(boiler=>boiler.id===parseInt(req.params.id)));
    }
    else{
        res.status(400).json({msg: 'The boiler with id ' + req.params.id + ' does not exist'});
    }
});

//getBoilerByAttribute


//Delete boiler

module.exports=router;