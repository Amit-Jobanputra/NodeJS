const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://amit_jobanputra:amit2003@cluster3040.uzk8ozy.mongodb.net/Students', { useNewUrlParser: true, useUnifiedTopology: true });

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

const student=new Student({
    name:"Amit Jobanputra",
    department:"MCA",
    startYear:2024,
    endYear:2026,
    enrollment:240823040,
    address:"Rajkot"
});
student
    .save()
    .then(()=>{
        console.log("Student Recored Saved");
    })
    .catch((error)=>{
        console.log("Error Saving Student:",error);
    });