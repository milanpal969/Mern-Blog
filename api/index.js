import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';

const app = express();
dotenv.config();
// app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("db is live");
});

app.use('/api/auth', authRoute);

app.listen(3000,()=>{
    console.log("server is live");
});
