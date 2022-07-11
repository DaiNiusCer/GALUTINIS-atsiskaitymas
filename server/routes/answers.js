import express from 'express'
import fetch from 'node-fetch';
const router=express.Router()

router.get('/', async function(req, res){
  const answers=await fetch('http://localhost:8080/answers').then(data=>data.json())
  res.json(answers)
 });

 export default router