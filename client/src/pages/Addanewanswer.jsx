import Headerhome from "../components/Headerhome";
import Answerscard from "../components/Answerscard";
import {useParams} from "react-router-dom";
import ReplyIcon from '@mui/icons-material/Reply';
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import './Addanewanswer.css'


const Addanewanswer = ({answersData}) => {
  const navigate=useNavigate()
  const {id}=useParams();
  const [answer,setAnswer]=useState([]);
  const[logedIn,setLogedIn]=useState(false);
  const[user,setUser]=useState({});
  //Papildoma autorizacija
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
      setUser({id: res.id })
      }
    })
    answersQuestionsId()
    
  },
[navigate]
)
  //Papildoma autorizacija
 
  //Atsakymu GET pagal ID
  const answersQuestionsId = () => {
    fetch('/answers')
    .then(res => res.json())
    .then(answers => {
    const filtered = answers.filter(answer => answer.question_id == id)
    setAnswer(filtered)
    })
    .catch(err => console.log(err))
    };

   
//Atsakymu GET pagal ID

//Atsakymu POST
  const addAnswer=(e)=>{
    
 e.preventDefault()
 const answer=e.target.elements.answer.value
 fetch(' /answers',{
  method:'POST',
  headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${localStorage.getItem('yoursToken')}`
  },
  body:JSON.stringify({
    question_id:id,
    answer:answer
    
  })
})

.then(()=>e.target.reset())
.then(()=> answersQuestionsId())
.then(() => alert('Answer added!'))
}
//Atsakymu POST
//Atsakymu DELETE
const deleteFunction=(question_id)=>{
  fetch(`/answers/delete/${question_id}`, {
    method: "DELETE",
    headers:{
      "Authorization":`Bearer ${localStorage.getItem('yoursToken')}`
    }
    })
    .then(()=> answersQuestionsId())
    .then(()=>alert("Deleted!"))
    
  
  
}
//Atsakymu DELETE

  return ( 
    
  <>
  <Headerhome/> 
  <h1>All answers</h1>
  <div className="answerAndForm">
    
  {
    answer.map((item,i)=><Answerscard key={i} data={item} deleteFunction={deleteFunction} user={user}/>)
  }
<form className="answerForm" onSubmit={addAnswer}>
<h2>Enter a new answer here!</h2>
<textarea type="text" name="answer" id="" cols="80" rows="15" required>
</textarea>
<input className="answerBtn" type="submit" value="Answer !" />
</form>

<Link className="cardBack" to="/home">Go back<ReplyIcon></ReplyIcon></Link>
</div>
  </> 
  );
}
 
export default Addanewanswer;