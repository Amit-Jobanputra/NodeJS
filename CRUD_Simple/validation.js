const joi = require('joi');
const { abort } = require('process');
exports.createValidator=joi.object({
    name:joi.string().min(3).max(30).required(),
    city:joi.string().min(3).max(30).required(),
});
exports.updateValidator=joi.object({
    name:joi.string().min(3).max(30).required(),
    city:joi.string().min(3).max(30).required(),
});

exports.validate=(schema,data)=>{
    const [error,value]=schema.validate(data
        ,{abortEarly:false}
    );
    if(error){
        return{
            success:false,
            message:error.details.map((err)=>({field:err.path[0], message:err.message})),
        };
    };
    return {
        success:true,
        data:value,
    };
}