import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Answerscard = ({data,deleteFunction,user}) => {
  const{id,user_id,question_id,answer}=data;
  const[isActive,setIsActive]=useState(false)

  const handleClick = () => {
    console.log("edit!")
     setIsActive(current => !current);
};

  return ( 
  <>
  
  <div className="authanswers">
    <p className="answerP"><span className="answerSpan">Answer ID: </span>{id}</p>
    <p className="answerP"><span className="answerSpan">User ID: </span>{user_id}</p>
    <p className="answerP"><span className="answerSpan">Question ID: </span>{question_id}</p>
  <h4>{answer}</h4>
  <div className="deleteEditBtnField_">
 { user.id==user_id?<button className="deleteBtn" id={id} onClick={()=>deleteFunction(id)}><DeleteIcon/></button>:null}
{user.id==user_id? <button className="editBtn" id={id} onClick={()=>handleClick()}> < ModeEditIcon/></button>:null}
 </div>
<div className={isActive?`${"editFormFieldShow"}`:`${"editFormField"}`}>
<form className="answerForm" >
<h2>Edit Your's a answers here!</h2>
<textarea type="text" name="answer" id="" cols="80" rows="15" required>
</textarea>
<input className="answerBtn" type="submit" value="Edit !" />
</form>
</div>

  </div>

  </> 
  );
}
 
export default Answerscard;