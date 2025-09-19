const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    department: String,
    startYear: Number,
    endYear: Number,
    enrollment:Number,
    address:String,
});

const Student=mongoose.model('Student', studentSchema);
console.log("Connected to MongoDB");

module.exports=Student;