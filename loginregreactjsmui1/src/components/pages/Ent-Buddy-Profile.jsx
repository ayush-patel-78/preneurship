import "./../css/Buddy-Profile.css";
import {Link} from "react-router-dom";
// import l from "./../images/product-images.jpg";
const  BProfile= () => {
    return (<>
        {/* <div className="E-13-navbar2">
        <Link to="/buddy-home"><img src={h}className="E-11-s" alt="" /></Link> 
   <Link to="/buddy-profile">  <img src={c} className="E-11-t" alt=""/></Link> 
    <Link to="/buddy-setting"> <img src={s} className="E-11-u" alt=""/></Link>
        
  
    
    </div> */}
    <div className="E-13-container1">
      <div className="E-13-navbar"><img src="./logo512.png" alt=""/> <span>
          <h5>John dept</h5>
          <p>Ozone pvt. ltd</p>
        </span> </div>

    </div>

    <div className="E-13-box2">
      <h2>My profile</h2>
      <input type="text" name="" id="" placeholder="Company name"/> <br/>
      <input type="text" name="" id="" placeholder="Company documents"/> <br/>
      <input type="text" name="" id="" placeholder="Adhar card"/> <br/>
      <input type="text" name="" id="" placeholder="Pan card"/> <br/>
      <input type="text" name="" id="" placeholder="Voter ID card"/> <br/>
      <input type="text" name="" id="" placeholder="product description"/> <br/>
      <input type="text" name="" id="" placeholder="Pitch"/> <br/>
      {/* <div className="E-13-product-section">
        <label for="">Images</label> <br/>

        <span><img src={l} alt=""/></span>
        <span><img src={l} alt=""/></span>
        <span><img src={l} alt=""/></span>+ <br/>

      </div> */}
      
        <Link to="/entrepreneur/partners/home"  className="E-13-btn1" type="submit"> Update</Link>
        <Link to="/entrepreneur/partners/home"  className="E-13-btn2" type="submit"> Back</Link>
        {/* <Link to="./buddy-account-type-change"  className="E-13-btn3" type="submit"> Change Account Type</Link> */}
    </div></>
    );
};

export default BProfile;