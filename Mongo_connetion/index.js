const mongoose = require('mongoose');
const express = require('express');
// const studentRoutes = require('./studentRoutes');
const app = express();
const PORT=80;
mongoose.connect('mongodb+srv://amit_jobanputra:123@cluster3040.uzk8ozy.mongodb.net/Students');


app.use(express.json());
// app.use("/student",studentRoutes);

app.listen(PORT,()=>{
    console.log('Server is running on port: 127.0.0.1:'+PORT);
});
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