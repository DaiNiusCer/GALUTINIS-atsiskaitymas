import React from "react";

const Answerscard = ({data}) => {
  console.log(data)
  const{id,user_id,question_id,answer}=data
  return ( 
  <>
  
  <div className="authanswers">
  <h4>{answer}</h4>
  </div>

  </> 
  );
}
 
export default Answerscard;