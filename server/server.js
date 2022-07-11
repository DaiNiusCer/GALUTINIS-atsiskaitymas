import express from "express";

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Portas expresui
const PORT=5000;

//Serverio paleidimas

app.listen(PORT, ()=>console.log(`***Server is runing on ${PORT} PORT`))