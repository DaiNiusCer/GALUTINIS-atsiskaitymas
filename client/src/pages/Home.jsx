import Headerhome from "../components/Headerhome";
import Questioncard2 from "../components/Questioncard2";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";



const Home = ({q,questionsData}) => {
  
  const navigate=useNavigate()
  const[answers,setAnswers]=useState([])
  const[logedIn,setLogedIn]=useState(false);
  const[user,setUser]=useState({});
 
  const answersData=()=>{
    fetch('/answers')
    .then(res=>res.json())
    .then(data=>setAnswers(data))
  }

    //Autorizacijos efectas
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
      answersData()
  },
  [navigate]
  )
    
   //Autorizacijos efectas
//Klausimu DELETE
const deleteFunction=(question_id)=>{
  fetch(`/questions/delete/${question_id}`, {
    method: "DELETE",
    headers:{
      "Authorization":`Bearer ${localStorage.getItem('yoursToken')}`
    }
    })
   .then(()=>questionsData())
    .then(()=>alert("Deleted!"))
    
  
  
}
//Klausimu DELETE
  


  return ( 
    <>
    <Headerhome/>
    <h1>Welcome to our featured page</h1>
    <div className="allQuestions">
<h1>See all blogs questions and answers</h1>
  {
    q.map((question,i)=><Questioncard2 key={i} questions={question}  deleteFunction={deleteFunction} user={user}/>)
  }
</div>
    </>
   );
}
 
export default Home;