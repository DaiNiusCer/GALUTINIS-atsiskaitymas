import React from 'react';
import './Questioncard.css';


const Questioncard = ({questions,answers}) => {


  return ( 
    <>
    <div className="question">
   <p>Question ID:{questions.id}</p>
   <p>User ID:{questions.user_id}</p>
   <p>Question: {questions.question}</p>
   <p>Answers:
    {
answers.map((item)=><p>{item.question_id===questions.id}</p>)
    }
   </p>
    </div>
    </>
   );
}
 
export default Questioncard;