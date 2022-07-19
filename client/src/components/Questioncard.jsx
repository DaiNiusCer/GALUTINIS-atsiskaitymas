import React from 'react';
import './Questioncard.css';



const Questioncard = ({questions,answers}) => {
  

  return ( 
    
    <>
    <div className="allquestions">
   <p className='questionid'>Question ID:{questions.id}</p>
   <p className='question'>Question: {questions.question}</p>
   <p><span>Answers:</span></p>
   {
answers.filter(item => item.question_id==questions.id).map((element,i) => <p className='answers' key={i}>{element.answer}
</p>)
    }
    </div>
    </>
   );
}
 
export default Questioncard;