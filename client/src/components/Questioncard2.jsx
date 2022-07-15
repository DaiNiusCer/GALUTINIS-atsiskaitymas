import React from 'react';
import './Questioncard.css';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Questioncard2 = ({questions,answers}) => {
const{id,user_id,question_id,answer}=answers
  const navigate=useNavigate()
 
const navigateClick=(id)=>{

navigate(`/answers/${id}`)
}
  return ( 
    <>
    <div className="allquestions">
    <p className='questionid'>Question ID:{questions.id}</p>
    <p className='question'>Question: {questions.question}</p>
    <button onClick={()=>navigateClick(questions.id)} className='ansawerbtn'>See all answers</button>
    <br/>
    <div className="deleteEditBtnField">
    <button className="deleteBtn" id={questions.id}> <DeleteIcon/></button>
    <button className="editBtn" id={questions.id}> < ModeEditIcon/></button>
    </div>
    
    </div>
    </>
    
   );
}
 
export default Questioncard2;