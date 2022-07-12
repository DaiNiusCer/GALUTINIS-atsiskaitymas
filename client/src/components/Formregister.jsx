import React from "react";
import "./Formregister.css";

const Formregister = ({registeredPerson}) => {

  return ( 
    <div className="container">
      <h1>Register to get more features</h1>
    <form onSubmit={registeredPerson}>
      <h3>Registration form </h3>
      <label htmlFor="">Enter Your's nickname</label>
      <br />
      <input type="text" name="nickname" />
      <br />
      <label>Enter Your's email</label>
      <br />
      <input type="email" name="email" /> 
      <br />
      <label>Enter Your's password</label>
      <br />
      <input type="password" name="password" /> 

      <input className="submitBtn" type="submit" value="Submit" />
    </form>
    </div>
   );
}
 
export default Formregister;