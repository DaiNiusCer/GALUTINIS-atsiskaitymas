import Headerhome from "../components/Headerhome";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import Questionform from "../components/Questionform";
import './Askquestion.css'

const Askquestion = () => {
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
const question=(e)=>{
e.preventDefault
console.log('clicked')
}
 //Klausimo POST pabaiga
 useEffect(()=>{
  question()
  
  
},[])


  return ( 
    
    <>
    <Headerhome/>
    <h1>Ask a new question</h1>
    <Questionform question={question}/>
    </>
   );
}
 
export default Askquestion;