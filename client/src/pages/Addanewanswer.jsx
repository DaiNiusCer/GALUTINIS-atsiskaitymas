import Headerhome from "../components/Headerhome";
import Answerscard from "../components/Answerscard";
import {useParams} from "react-router-dom";
import {useState,useEffect} from 'react';


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
  {
    answer.map((item,i)=><Answerscard key={i} data={item}/>)
  }
<form>
<h1>Enter a new answer here!</h1>
<textarea name="" id="" cols="30" rows="10">
</textarea>
<input type="submit" value="Answer !" />
</form>
  </> 
  );
}
 
export default Addanewanswer;