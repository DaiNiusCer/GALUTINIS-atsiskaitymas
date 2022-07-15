import React from "react";
import "./Contacts.css";
import Headerhome from "../components/Headerhome";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Contacts = () => {
  const navigate=useNavigate()
  const[logedIn,setLogedIn]=useState(false);
  const[user,setUser]=useState({});
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
      setLogedIn(false);
      return navigate('/');
    }
    else{
      setLogedIn(true)
      setUser({id: res.id })
      }
    })
   
},
[navigate]
)
  return (  
    <>
<Headerhome/>
    <div className="containerContacts">
    <h1>If You want to contact us, please find contacts below</h1>
    
     <div className="conatctsCard">
      <p className="contacts"><span>Email: </span>example@example</p>
      <p className="contacts"><span>Street Address: </span>1814 Point Street</p> 
      <p className="contacts"><span>City: </span>Chicago</p> 
      <p className="contacts"><span>State: </span>IL</p> 
      <p className="contacts"> <span>State Full: </span>Illinois</p> 
      <p className="contacts"><span> Zipcode: </span>60641</p> 
      <p className="contacts"><span> Telephone Number: </span>773-794-8112</p> 
      <p className="contacts"><span>Mobile Number: </span>773-204-3414 </p> 
      <p className="contacts"><span>Timezone: </span>UTC-6: Central Standard Time (CST)</p> 
     </div>
    </div>
    </>
  );
}
 
export default Contacts
