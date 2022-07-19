import React from 'react';
import './Questioncard.css';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useState } from 'react';


const Questioncard2 = ({questions,deleteFunction,user,questionsData}) => {
  const[isActive,setIsActive]=useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
};
  const navigate=useNavigate()
  
  const navigateClick=(id)=>{
  navigate(`/answers/${id}`)
  }
  //Klausimu PATCH
const updateFunction=(e)=>{
  e.preventDefault();
  const question=e.target.elements.questionEdit.value
  
  fetch(`/questions/${questions.id}`, {
    method: "PATCH",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${localStorage.getItem('yoursToken')}`
    },
    body:JSON.stringify({
      question:question
      
    })
    })
    .then(()=>e.target.reset())
    .then(()=>questionsData())
    .then(()=>alert("Your question has been updated!"))

}

//Klausimu PATCH
 
  return ( 
    <>
    <div className="allquestions">
    <p className='questionid'>Question ID:{questions.id}</p>
    <p className='question'>Question: {questions.question}</p>
    <button onClick={()=>navigateClick(questions.id)} className='ansawerbtn'>See all answers</button>
    <br/>
    <div className="deleteEditBtnField">
   {user.id==questions.user_id? <button className="deleteBtn" id={questions.id} onClick={()=>deleteFunction(questions.id)}><DeleteIcon/></button>:null}
   {user.id==questions.user_id? <button className="editBtn" id={questions.id} onClick={()=>handleClick()}> < ModeEditIcon/></button>:null}
    </div>
    <div className={isActive?`${"editFormFieldShow"}`:`${"editFormField"}`}>
<form className="answerForm" onSubmit={updateFunction}>
<h2>Edit Your's a answers here!</h2>
<textarea type="text" name="questionEdit" id="" cols="80" rows="15" required>
</textarea>
<input className="answerBtn" type="submit" value="Edit !" />
</form>
</div>
    
    </div>
    </>
    
   );
}
 
export default Questioncard2;