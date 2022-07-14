import express from 'express'
import fetch from 'node-fetch';
import isAuthed from '../isAuthed.js';


const router=express.Router()
//Klausimu atvaizdavimas
router.get('/', async function(req, res){
  const main=await fetch('http://localhost:8080/questions').then(data=>data.json())
  res.json(main)
 });
//Klausimu atvaizdavimas

//Klausimu atvaizdavimas pagal id
 router.get('/:id', async function(req, res){
  const main=await fetch(`http://localhost:8080/questions/${req.params.id}`).then(data=>data.json())
  res.json(main)
 });
//Klausimu atvaizdavimas pagal id

//Klausimu POST
 router.post('/',isAuthed, async function(req, res){
  const addquestion=await 
  fetch(' http://localhost:8080/questions',{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      user_id: req.token.id,
      question:req.body.question
    })
  })
  res.send(addquestion)
 });
 //Klausimu POST

 export default router