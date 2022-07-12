import React from "react";

const Answerscard = ({data}) => {
  return ( 
  <>
  

<form>
  <h1>All answers</h1>
  {
    data.map(item=><p>{item.answer}</p>)
  }
<h1>Enter a new answer here</h1>
<textarea name="" id="" cols="30" rows="10">
</textarea>

<input type="submit" value="Answer !" />


</form>


  </> );
}
 
export default Answerscard;