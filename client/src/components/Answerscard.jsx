import React from "react";

const Answerscard = ({data}) => {
  console.log(data)
  const{id,user_id,question_id,answer}=data
  return ( 
  <>
  
  <div className="authanswers">
    <p className="answerP"><span className="answerSpan">Answer ID: </span>{id}</p>
    <p className="answerP"><span className="answerSpan">User ID: </span>{user_id}</p>
    <p className="answerP"><span className="answerSpan">Question ID: </span>{question_id}</p>
  <h4>{answer}</h4>
  </div>

  </> 
  );
}
 
export default Answerscard;