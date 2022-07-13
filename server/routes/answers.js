import express from 'express';
import fetch from 'node-fetch';
import isAuthed from '../isAuthed.js'
const router=express.Router()

router.get('/', async function(req, res){
  const answers=await fetch('http://localhost:8080/answers').then(data=>data.json())
  res.json(answers)
 });

 router.get('/:question_id', async function(req, res){
  const answers=await fetch(`http://localhost:8080/answers/${req.params.question_id}`).then(data=>data.json())
  res.json(answers)
 });

 router.post('/',isAuthed, async function(req, res){
  const addanswers=await 
  fetch(' http://localhost:8080/answers',{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      user_id: req.token.id,
      question_id: req.body.question_id,
      answer:req.body.answer
    })
  })
  res.send(addanswers)
 });

 export default router