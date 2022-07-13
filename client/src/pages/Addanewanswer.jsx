import Headerhome from "../components/Headerhome";
import Answerscard from "../components/Answerscard";
import {useParams} from "react-router-dom";
import {useState,useEffect} from 'react';
import ReplyIcon from '@mui/icons-material/Reply';
import { Link } from "react-router-dom";
import './Addanewanswer.css'


const Addanewanswer = () => {
  
  const {id}=useParams()
  const [answer,setAnswer]=useState([])
  
  const answersQuestionsId = () => {
    fetch('/answers')
    .then(res => res.json())
    .then(answers => {
    const filtered = answers.filter(answer => answer.question_id === id)
    setAnswer(filtered)
    }
    )
    .catch(err => console.log(err))
    }
  useEffect(()=>{
    answersQuestionsId()
  },[])
  return ( 
  <>
  <Headerhome/> 
  <h1>All answers</h1>
  <div className="answerAndForm">
    
  {
    answer.map((item,i)=><Answerscard key={i} data={item}/>)
  }
<form className="answerForm">
<h2>Enter a new answer here!</h2>
<textarea name="" id="" cols="80" rows="15">
</textarea>
<input className="answerBtn" type="submit" value="Answer !" />
</form>

<Link className="cardBack" to="/home">Go back<ReplyIcon></ReplyIcon></Link>
</div>
  </> 
  );
}
 
export default Addanewanswer;