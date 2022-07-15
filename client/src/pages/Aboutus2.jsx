import Headerhome from "../components/Headerhome";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Aboutus.css';



const Aboutus2 = () => {
  const navigate=useNavigate();
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
    <div className="body">
    <div class="tekstas">
     <br/>
    
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aperiam consectetur vero, animi at eveniet provident autem ab modi accusantium deserunt natus iusto, aut voluptates?</p>
       </div>
       <div>
         </div> 
         <video autoPlay loop muted>
        <source src="videos/file.mp4" type="video/mp4"/>
    </video>


    </div>
    </>
   );
}
 
export default Aboutus2;
