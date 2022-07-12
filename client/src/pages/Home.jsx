import Headerhome from "../components/Headerhome";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
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
  return ( 
    <>
    <Headerhome/>
    <h1>Welcome to our featured page</h1>
    </>
   );
}
 
export default Home;