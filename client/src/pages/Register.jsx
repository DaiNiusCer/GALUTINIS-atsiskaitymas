import React from "react";
import Formregister from "../components/Formregister";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate=useNavigate();
  const registerPerson=(e)=>{
    e.preventDefault();
    const nickname=e.target.elements.nickname.value;
    const email=e.target.elements.email.value;
    const password=e.target.elements.password.value;
    console.log(nickname,email,password);
    fetch(' /register',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        nickname:nickname,
        email:email,
        password:password,
      })
    })
.then(()=>e.target.reset())
.then(()=>alert('You has been registered !'))
.then(()=>navigate('/login'))
  }
  return ( 
    <>
    <Header/>
    <Formregister registeredPerson={registerPerson}/>
    </>
    
   );
}
 
export default Register;