import "./../css/Welcome-Page.css";
// import com from "./../images/company-logo.jpg"
import {Link} from "react-router-dom";
const  Welcome= () => {
    return (
  
  <div className="E-1-container">
    <h1>May Your dreams come true</h1>
    <div className="E-1-circle1"></div>
    <div className="E-1-circle2"></div>
    <div className="E-1-box1">
      <img src="./company-logo.jpg" alt="" />
      <h3> Preneurship</h3>
      <div className="E-1-box2">
        <h3>Get Started</h3>
        <input type="text" name="" id="idea_icon" placeholder="Idea by" /> <br />
        <h5>Date of Birth</h5>
        <input type="date" name="" id="" placeholder="Date of birth" /> <br />
        <input type="text" name="" id="phone_icon" placeholder="Phone no" /> <br />
        <br />
       {/* <h3>Are you looking for a...</h3> */}
       {/* <Link className="E-1-btn1" type="submit" to="/buddy">Partner in business</Link> */}
       <Link className="E-1-btn1" type="submit" to="/entrepreneur/partners">Next</Link>
        {/* <select name="" id="">
          <option value=""> Select</option> */}
         
          {/* <option value="" href="/two">Partner in business</option>
          <option value="" href="/three">Investor</option> */}
        {/* </select>  */}
        {/* <Link className="E-1-btn1" type="submit" href="/two">Next &#62;</Link> */}
      </div>
    </div>
  </div>

    
        );
    };
    
    export default Welcome;