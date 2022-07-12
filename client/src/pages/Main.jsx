import Header from "../components/Header";
import Questioncard from "../components/Questioncard";
import {useState,useEffect} from 'react';
const Main = ({q}) => {
  const[answers,setAnswers]=useState([])
  const answersData=()=>{
    fetch('/answers')
    .then(res=>res.json())
    .then(data=>setAnswers(data))
  }

  useEffect(()=>{
    answersData()
  },[])




  return ( 
    
    <>
<Header/>

<div className="allQuestions">
<h1>See all blogs questions and answers</h1>
  {
    q.map((item,i)=><Questioncard key={i} questions={item} answers={answers}/>)
  }
  
  
  
</div>
    </>
   );
}
 
export default Main;