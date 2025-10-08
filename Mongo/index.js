const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
const practiceroute=require("./practiceRoute") 
app.use(express.json());
mongoose.connect('mongodb+srv://amit_jobanputra:123@cluster3040.uzk8ozy.mongodb.net/Practice');//database name
app.use("/practice",practiceroute)
app.listen(port, () => {
    console.log(`Example app listening on port: 127.0.0.1:${port}`);
});