import Headerhome from "../components/Headerhome";
import Questioncard2 from "../components/Questioncard2";
import { useEffect,useState } from "react";



const Home = ({q}) => {
  
 
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
    <Headerhome/>
    <h1>Welcome to our featured page</h1>
    <div className="allQuestions">
<h1>See all blogs questions and answers</h1>
  {
    q.map((item,i)=><Questioncard2 key={i} questions={item} answers={answers}/>)
  }
</div>
    </>
   );
}
 
export default Home;