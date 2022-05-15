import "./../css/Buddy-Home.css";
import l from "./../css/product-images.jpg";
import h from "./../css/h.png";
import c from "./../css/c.png";
import s from "./../css/s.png";
// import n from "./../css/n1.webp";
import {Button} from "react-bootstrap";
const  BHome= () => {
    return (
    <>
       <div className="E-12-navbar2">
       <Button href="/buddy-home"><img src={h}className="E-12-s" alt="" /></Button> 
   <Button href="/buddy-profile"><img src={c} className="E-12-t" alt=""/></Button> 
    <Button href="/buddy-setting"> <img src={s} className="E-12-u" alt=""/></Button>
    </div>
    <div className="E-12-container1">
      <div className="E-12-navbar"> <span>
          <h5>John dept</h5>
          <p>Ozone pvt. ltd</p>
          <Button href="./buddy-messages" className="E-12-notification "> <span>Inbox</span>
  <span className="E-12-badge">+</span>
</Button> 
        </span>
       </div>
      <div className="E-12-circle1"></div>
      <div className="E-12-circle2"></div>
      <span><img src="./logo512.png" alt=""/></span>
    </div>
    <div className="E-12-box2">
      <input type="text" placeholder="Product description" name="" id=""/> <br/>
      <input type="text" placeholder="Pitch"  name="" id=""/> <br/>
      <div className="E-12-product-section">
        <label for="">Images</label> <br/>
        <span><img src={l} alt=""/></span>
        <span><img src={l} alt=""/></span>
        <span><img src={l} alt=""/></span>+ <br/>
      </div>
      <Button href="./buddy-profile" className="E-12-btn1"  type="submit">Next &#62;</Button>
    </div></>
    );
};

export default BHome;