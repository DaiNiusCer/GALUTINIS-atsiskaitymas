import React from 'react';
import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import {Routes,Route, useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import './App.css';
import Addanewanswer from './pages/Addanewanswer';
import Askquestion from './pages/Askquestion';
import Contacts from './pages/Contacts';
import Contacts2 from './pages/Contacts2';
import Aboutus from './pages/Aboutus';
import Aboutus2 from './pages/Aboutus2';
import Footer from './components/Footer'

function App() {
  //Visi hooks pradžia
  const[questions,setQuestions]=useState([])
  const[answers,setAnswers]=useState([])
  const[logedIn,setLogedIn]=useState(false)
  const[user,setUser]=useState({})
  //Visi hooks pabaiga
 //Autorizacijos efectas
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
      setLogedIn(false)
    }
    else{
      setLogedIn(true)
      setUser({ nickname: res.nickname, id: res.id })
      }
    })
},
[navigate]
)
//Autorizacijos efectas

//Questions GET pradžia
const questionsData=()=>{
  fetch('/questions')
  .then(res=>res.json())
  .then(data=>setQuestions(data))
}
//Questions GET pabaiga

//Answers GET pradžia
const answersData=()=>{
  fetch('/answers')
  .then(res=>res.json())
  .then(data=>setAnswers(data))
}
//Answers GET pabaiga


useEffect(()=>{
  questionsData()
  answersData()
  
},[])







  return (
   <>
<Routes>
<Route path="/"element={<Main q={questions}/>}/>
<Route path="/register"element={<Register/>}/>
<Route path="/login"element={<Login/>}/>
<Route path="/home"element={<Home q={questions} questionsData={questionsData}/>}/>
<Route path="/answers/:id"element={<Addanewanswer answersData={answers} questionsData={questionsData} user={user}/>}/>
<Route path="/ask"element={<Askquestion questionsData={questionsData}/>}/>
<Route path="/contacts"element={<Contacts/>}/>
<Route path="/contacts2"element={<Contacts2/>}/>
<Route path="/aboutus"element={<Aboutus/>}/>
<Route path="/about"element={<Aboutus2/>}/>
</Routes>
<Footer/>
   </>
  );
}

export default App;
