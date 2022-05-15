import "./../css/Investor-OverView.css";
import {Link}  from "react-router-dom";
// import h from "./../images/h.png";
// import c from "./../images/c.png";
// import s from "./../images/s.png";
// import p from "./../images/p.png";

const IOverView= () => {
    return (<> 
     <div className="E-11-container1">
    <div className="E-11-navbar">
    <span><img src="./logo512.png" alt=""/></span>

    </div>
    <div className="E-11-circle1"></div>
    <div className="E-11-circle2"></div>
    <div className="E-11-circle3"></div>

  </div>

  <div className="E-11-box2">
    <input type="text" name="" placeholder="Company Valuation" id=""/> <br/>
    <input type="text" name=""  placeholder="Gross Margin" id=""/> <br/>
    <input type="text" name="" placeholder="Profit In A Month" id=""/> <br/>
    <input type="text" name="" placeholder="Profit In A Year" id=""/> <br/>
    <input type="text" name="" placeholder="Company Sales" id=""/> <br/>
    <Link className="E-11-btn1"  type="submit"  to= '/enterpreneur/portfolio/details'> Next &#62;</Link>
  </div></>
    );
};

export default IOverView;