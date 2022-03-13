const express = require ('express');
var cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const app= express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/BankUserData');

app.use(express.json());
app.use('/users',userRoutes);


app.use('*',(req,res,next)=>{
    res.status(404).end()
})
app.use((err,req,res,next)=>{
    res.status(500).json({err});
})
const PORT = 5000
app.listen(PORT,()=>{
    console.log(`app runing on port ${PORT}`)
})