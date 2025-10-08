const mongoose = require('mongoose');

const practiceSchema = new mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    course:String
});
const Practice=new mongoose.model("abc",practiceSchema);//table name
console.log("connected to mongo db");
module.exports=Practice;