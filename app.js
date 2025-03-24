import express from 'express';
import bodyParser from 'body-parser'; 
import cors from 'cors';
import connectDB from './database.js';
import userRouter from './routes.js';



const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000;
connectDB();

app.use(userRouter);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});