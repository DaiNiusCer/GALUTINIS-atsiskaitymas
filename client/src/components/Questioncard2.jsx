import React from 'react';
import './Questioncard.css';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


const Questioncard2 = ({questions,deleteFunction,user}) => {

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
   {user.id==questions.user_id? <button className="deleteBtn" id={questions.id} onClick={()=>deleteFunction(questions.id)}><DeleteIcon/></button>:null}
   {user.id==questions.user_id? <button className="editBtn" id={questions.id}> < ModeEditIcon/></button>:null}
    </div>
    
    </div>
    </>
    
   );
}
 
export default Questioncard2;