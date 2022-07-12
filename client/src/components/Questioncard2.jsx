import React from 'react';
import './Questioncard.css';
import { useNavigate } from 'react-router-dom';

const Questioncard2 = ({questions,answers}) => {
const navigate=useNavigate()
 
const navigateClick=(id)=>{

navigate(`/answers/${id}`)
}
  return ( 
    <>
    <div className="allquestions">
    <p className='questionid'>Question ID:{questions.id}</p>
    <p className='question'>Question: {questions.question}</p>
    <button onClick={()=>navigateClick(id)} className='ansawerbtn'>See all answers</button>
    </div>
    </>
    
   );
}
 
export default Questioncard2;