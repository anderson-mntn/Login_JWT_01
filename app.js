require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION_URL,
    { 
        useNewUrlParser : true,
        useUnifiedTopology: true
    }    
)

app.use('/user', userRouter); // .use() serve para qndtipo de req nao for especifiado.

app.listen(process.env.PORT, ()=>{console.log("Server Running.");})