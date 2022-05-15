import "./../css/Release.css";
import {Link} from "react-router-dom";
import e from "./../images/img3.jpg";
const Release= () => {
    return (<>
      <div className="E-R-container1">
    <div className="E-R-circle1"></div>
    <div className="E-R-circle2"></div>
    <div className="E-R-main-box">
      <div className="E-R-box1">
        <h2>Ready To Release Equity  <br/> 
        For &#8377; </h2>
        <input></input>
        <br/> <br/> <br/> <br/> <br/> <br/> 
        {/* <p>Looking for a buddy?</p> */}
    <Link to="/enterpreneur/final-success" className="E-R-btn1" type="submit">YES</Link>
     <Link  to="/entrepreneur/partners/home" className="E-R-btn1" type="submit">NO</Link> 
      
      </div>
      <div className="E-R-box2"><img src={e} alt=""/></div>
    </div>
  </div></>

 

    );
};

export default Release;





   /* <img src="./h.png" className="E-R-s" alt="" />
    <img src="./c.png" className="E-R-t" alt="" />
    <img src="./s.png" className="E-R-u" alt="" />
  </div>


  <div className="E-R-container">
    <div className="E-R-circle1"></div>
    <div className="E-R-circle2"></div>
    <div className="E-R-box1">
      <img src="" alt="" />
      <h3>Preneurship</h3>

      <div className="E-R-box2">
        <h3>Settings</h3>
        <input type="text" name="" id="" placeholder="Contact us"/> <br/>
        <input type="text" name="" id="" placeholder="Change language"/> <br />
        <input type="text" name="" id="" placeholder="Payments"/> <br/>
         <Link href="./eleven" className="E-R-btn" type="submit">Next &#62;</Link>
      </div>
    </div> */