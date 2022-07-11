import React from 'react';
import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';
import {Routes,Route} from 'react-router-dom';
import {useState,useEffect} from 'react';
import './App.css';

function App() {
  //Visi hooks pradžia
  const[questions,setQuestions]=useState([])
  //Visi hooks pabaiga

//Questions GET pradžia
const questionsData=()=>{
  fetch('/questions')
  .then(res=>res.json())
  .then(data=>setQuestions(data))
}
//Questions GET pabaiga



//useEffect questions pradžia
useEffect(()=>{
  questionsData()
},[])
//useEffect questions pabaiga




  return (
   <>
<Routes>
<Route path="/"element={<Main q={questions}/>}/>
<Route path="/register"element={<Register/>}/>
<Route path="/login"element={<Login/>}/>
</Routes>
   </>
  );
}

export default App;
