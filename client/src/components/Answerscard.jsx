import React from "react";
import Headerhome from "../components/Headerhome";

const Answerscard = ({data}) => {
  console.log(data)
  const{id,user_id,question_id,answer}=data
  return ( 
  <>
  <div className="authanswers">
  <h1>All answers</h1>
  <p>{answer}</p>
  </div>

  </> 
  );
}
 
export default Answerscard;