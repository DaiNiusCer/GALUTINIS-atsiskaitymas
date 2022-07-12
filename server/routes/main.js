import express from 'express'
import fetch from 'node-fetch';
const router=express.Router()

router.get('/', async function(req, res){
  const main=await fetch('http://localhost:8080/questions').then(data=>data.json())
  res.json(main)
 });

 router.get('/:id', async function(req, res){
  const main=await fetch(`http://localhost:8080/questions/${req.params.id}`).then(data=>data.json())
  res.json(main)
 });


 export default router