const express=require('express')
const router=express.Router();

const boilersData=require('../data/boilers.json')

//Get all boilers

router.get('/boilers',(req,res)=>{
    res.json(boilersData)
})

//Get boiler by Id


//getBoilerByAttribute


//Delete boiler

module.exports=router;