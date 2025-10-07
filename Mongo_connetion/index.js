const mongoose = require('mongoose');
const express = require('express');
const studentRoutes = require('./studenRoute');
const app = express();
const PORT=8000;
mongoose.connect('mongodb+srv://amit_jobanputra:123@cluster3040.uzk8ozy.mongodb.net/Students');


app.use(express.json());
app.use("/student",studentRoutes);

app.listen(PORT,()=>{
    console.log('Server is running on port: 127.0.0.1:'+PORT);
});
