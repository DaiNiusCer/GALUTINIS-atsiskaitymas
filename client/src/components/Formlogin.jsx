import React from "react";
import "./Formregister.css";

const Formlogin = ({loginPerson}) => {
  return ( 
    <div className="container">
      <h1>Login to use all our's features</h1>
    <form className="personForm" onSubmit={loginPerson}>
      
      <h3>Login form </h3>
      <label htmlFor="">Enter Your's nickname</label>
      <br />
      <input type="text" name="nickname" required/>
      <br />
      <label>Enter Your's password</label>
      <br />
      <input type="password" name="password" required /> 

      <input className="submitBtn" type="submit" value="Submit" />
    
    </form>
    </div>
   );
}
 
export default Formlogin;