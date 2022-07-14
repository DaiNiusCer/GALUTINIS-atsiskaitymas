import Headerhome from "../components/Headerhome";
import {useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import Questionform from "../components/Questionform";
import './Askquestion.css'

const Askquestion = ({questionsData}) => {
  const navigate=useNavigate()
  

  useEffect(() => {
    const token = localStorage.getItem('yoursToken');
    fetch('/verify', {
    headers: {
    'Authorization': `Bearer ${token}`
    }
    })
    .then(res => res.json())
    .then(res => {
    if (res.err) {
    localStorage.removeItem('yoursToken');
    return navigate('/');
    }
    }
    )
    }, 
 
    [navigate])
 //Autorizacija
 
 
 //Klausimo POST pradžia
 const addQuestion=(e)=>{
  e.preventDefault()
  const question=e.target.elements.question.value
  fetch(' /questions',{
    method:'POST',
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${localStorage.getItem('yoursToken')}`
    },
    body:JSON.stringify({
      question:question
      
    })
  })
  
  .then(()=>e.target.reset())
  .then(()=> questionsData())
  .then(() => alert('Question added!'))
  
 
 }
 
 //Klausimo POST pabaiga
 


  return ( 
    
    <>
    <Headerhome/>
    <h1>Ask a new question</h1>
    <Questionform addQuestion={addQuestion} />
    </>
   );
}
 
export default Askquestion;