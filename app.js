import express from 'express';
import dotenv from 'dotenv';
import connectDb  from './config/db.js';
const PORT = process.env.PORT || 5000;

dotenv.config(); // for the processing the dot configuration
const app = express(); 

connectDb();
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});


