import Headerhome from "../components/Headerhome";
import Answerscard from "../components/Answerscard";
import {useParams} from "react-router-dom";
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom'

const Addanewanswer = () => {
  const {id}=useParams()
  const [answer,setAnswer]=useState(null)
  const navigate=useNavigate()

  const answersQuestionsId=()=>{
  fetch(`/answers/${id}`)
  .then(res=>res.json())
  .then(data=>setAnswer(data))
  .then(data=>console.log(data))
  }
  useEffect(()=>{
    answersQuestionsId()
  },[])
  return ( 
  <>
  <Headerhome/>
  {
    answer&&
    <Answerscard data={answer}/>
  }
  </> 
  );
}
 
export default Addanewanswer;