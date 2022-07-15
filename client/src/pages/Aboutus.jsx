import Header from "../components/Header";
import './Aboutus.css'



const Aboutus = () => {
  return ( 
    <>
    <Header/>
    <div className="body">
    <div className="tekstas">
     <br/>
    
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ut.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aperiam consectetur vero, animi at eveniet provident autem ab modi accusantium deserunt natus iusto, aut voluptates?</p>
       </div>
       <div>
         </div> 
         <video autoPlay loop muted>
        <source src="videos/file.mp4" type="video/mp4"/>
    </video>


    </div>
    </>
   );
}
 
export default Aboutus;
