const Joi = require('joi');

exports.createValidator =Joi.object({ 
    name: Joi.string().min(2).max(100).required(),
    department: Joi.string().min(2).max(100).required(),
    startYear: Joi.number().min(1900).max(2100).required(),
    endYear: Joi.number().min(1900).max(2100).required(),
    enrollment: Joi.number().min(100000000).max(999999999).required(),
    address: Joi.string().min(5).max(200).required()
});

exports.updateValidator = Joi.object({ 
    name: Joi.string().min(2).max(100),
    department: Joi.string().min(2).max(100),
    startYear: Joi.number().min(1900).max(2100),
    endYear: Joi.number().min(1900).max(2100),
    enrollment: Joi.number().min(100000000).max(999999999),
    address: Joi.string().min(5).max(200)
});

exports.validate=(schema,data)=>{
    const {error,value}=schema.validate(data,{abortEarly:false});
    if(error){
        return({
            success:false,
            errors:error.details.map((detail)=>({
                field:detail.path[0],
                message:detail.message
            })),
        });
    }
    return({success:true,data:value});
};