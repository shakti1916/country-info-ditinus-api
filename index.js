import express from 'express'
import axios from 'axios'
import router from './routes/index.js';
import dotenv from 'dotenv'
import cors from 'cors'


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT

app.use("/api",router)

app.get("/ditinus",(req,res)=>{
    res.status(200).json({message:"Hello world"})
})

app.listen(PORT,()=>{
    console.log(`Server started ${PORT}`)
})