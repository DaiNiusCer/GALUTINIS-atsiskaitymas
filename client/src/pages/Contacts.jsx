import React from "react";
import "./Contacts.css";
import Header from "../components/Header";


const Contacts = () => {

  return (  
    <>
<Header/>
    <div className="containerContacts">
    <h1>If You want to contact us, please find contacts below</h1>
    
     <div className="conatctsCard">
      <p className="contacts"><span>Email: </span>example@example</p>
      <p className="contacts"><span>Street Address: </span>1814 Point Street</p> 
      <p className="contacts"><span>City: </span>Chicago</p> 
      <p className="contacts"><span>State: </span>IL</p> 
      <p className="contacts"> <span>State Full: </span>Illinois</p> 
      <p className="contacts"><span> Zipcode: </span>60641</p> 
      <p className="contacts"><span> Telephone Number: </span>773-794-8112</p> 
      <p className="contacts"><span>Mobile Number: </span>773-204-3414 </p> 
      <p className="contacts"><span>Timezone: </span>UTC-6: Central Standard Time (CST)</p> 
     </div>
    </div>
    </>
  );
}
 
export default Contacts
