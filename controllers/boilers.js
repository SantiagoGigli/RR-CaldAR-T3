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

//Get Boiler By Attribute: Type Id
router.get('/boilers/typeId/:typeId', (req,res)=>{
    const boilersFound=boilersData.some(boiler=>boiler.typeId===parseInt(req.params.typeId))
    if(boilersFound){
        res.json(boilersData.filter(boiler=>boiler.typeId===parseInt(req.params.typeId)));
    }
    else{
        res.status(400).json({msg: 'There are no boilers of the type ' + req.params.typeId });
    }
})

//Get Boiler By Attribute: Maintenace Rate
router.get('/boilers/maintainaceRate/:maintainace_rate', (req,res)=>{
    const boilersFound=boilersData.some(boiler=>boiler.maintainace_rate===req.params.maintainace_rate)
    if(boilersFound){
        res.json(boilersData.filter(boiler=>boiler.maintainace_rate===req.params.maintainace_rate));
    }
    else{
        res.status(400).json({msg: 'There are no boilers with maintaince ' + req.params.maintainace_rate });
    }
})


//Delete boiler

module.exports=router;