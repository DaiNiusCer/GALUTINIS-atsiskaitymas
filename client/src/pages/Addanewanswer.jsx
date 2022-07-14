import Headerhome from "../components/Headerhome";
import Answerscard from "../components/Answerscard";
import {useParams} from "react-router-dom";
import {useState,useEffect} from 'react';
import ReplyIcon from '@mui/icons-material/Reply';

import { Link } from "react-router-dom";
import './Addanewanswer.css'


const Addanewanswer = ({answersData}) => {
  
  const {id}=useParams();
  const [answer,setAnswer]=useState([]);
 
  const answersQuestionsId = () => {
    fetch('/answers')
    .then(res => res.json())
    .then(answers => {
    const filtered = answers.filter(answer => answer.question_id == id)
    setAnswer(filtered)
    })
    .catch(err => console.log(err))
    };

    
    useEffect(()=>{
      answersQuestionsId()
     
    },[])

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




  return ( 
    
  <>
  <Headerhome/> 
  <h1>All answers</h1>
  <div className="answerAndForm">
    
  {
    answer.map((item,i)=><Answerscard key={i} data={item}/>)
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