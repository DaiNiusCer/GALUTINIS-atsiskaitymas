import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Answerscard = ({data,deleteFunction,user}) => {
  const{id,user_id,question_id,answer}=data
  console.log(user)
  return ( 
  <>
  
  <div className="authanswers">
    <p className="answerP"><span className="answerSpan">Answer ID: </span>{id}</p>
    <p className="answerP"><span className="answerSpan">User ID: </span>{user_id}</p>
    <p className="answerP"><span className="answerSpan">Question ID: </span>{question_id}</p>
  <h4>{answer}</h4>
 { user.id==user_id?<button className="deleteBtn" id={id} onClick={()=>deleteFunction(id)}><DeleteIcon/></button>:null}
  </div>

  </> 
  );
}
 
export default Answerscard;