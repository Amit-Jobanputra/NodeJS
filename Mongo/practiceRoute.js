const express = require('express');
const Router=express.Router();
const practiceController = require("./practiceController");
const {create,update}=require("./practiceValidtor");

Router.get('/index',practiceController.index);
Router.post('/store',(req,res,next)=>{
    const {error} = create.validate(req.body);
    if(error){
        return res.status(400).send({
            message:error.details[0].message,
        });
    }
    practiceController.store(req,res,next);
});
module.exports=Router;