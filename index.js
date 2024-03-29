import express from "express";
import * as dotenv from 'dotenv'
import { dbConnection } from "./database/dbConnection.js";
import userRouter from "./src/modules/user/user.router.js";
import cors from "cors"

const app =  express();

app.use(cors())
dotenv.config();
dbConnection();
app.use(express.json());
app.use("/users", userRouter);

app.listen(process.env.PORT, ()=>{
    console.log("Application started");
})
