import exp from 'constants';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'


const app = express();
dotenv.config();



mongoose.connect(process.env.MONGO).then(()=>{
    console.log("db is live");
})

app.listen(3000,()=>{
    console.log("server is live")
})