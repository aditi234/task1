const express=require('express');
const router=express.Router();
const Images=require('./model');
const catchAsync=require('./catchAsync');

//get all images from database
router.get('/', catchAsync(async(req, res, next)=>{
    const img = await Images.find();
    res.send({
      img
    });
}));

module.exports=router;