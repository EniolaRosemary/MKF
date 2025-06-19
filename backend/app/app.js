import express from 'express';
import dotenv from "dotenv";
import dbConnect from '../config/dbConnect.js';
import userRoutes from '../routes/usersRoute.js';

dotenv.config();
dbConnect();

const app = express();

app.use(express.json());

app.get("/",  (
    req, res
) =>{
 res.json({message : "welcome to my API"});
});
app.use('/', userRoutes);

export default app;

//enni.123