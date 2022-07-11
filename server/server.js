import express from 'express';
import Main from './routes/main.js';
import Answers from './routes/answers.js'

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Portas
const PORT=5000;
//Portas

//Routes pradžia
app.use('/questions',Main);
app.use('/answers',Answers);
//Routes pabaiga


//Serverio paleidimas pradžia
app.listen(PORT, ()=>console.log(`***Server is runing on ${PORT} PORT`));
//Serverio paleidimas pabaiga