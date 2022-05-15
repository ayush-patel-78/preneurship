import "./../css/Buddy-Verification.css";
import {Link} from "react-router-dom";
import s from "./../images/success icon.png"
// import i from "./../css/id card.png"
import i from "./../images/id card.png"
import p from "./../images/icons8-camera-24.png"
import l from "./../images/img3.jpg"
const  BVerify= () => {
    return (<>
  <div className="container1">
  <div className="circle1"></div>
  <div className="circle2"></div>
  <div className="main-box">
    <div className="box1">
      <h2>Its time to verify! <img src={s} alt="" /> </h2>
      <label for=""> <img src={i} alt="" />  Aadhar card <span>*</span></label> <br />
      <input type="file" name="upload" accept="application/pdf" />
      <label for=""> <img src={i} alt="" /> Pan card</label> <br />
      <input type="file" name="upload" accept="application/pdf" />
      <label for=""> <img src={i} alt="" /> Voter ID card</label> <br />
      <input type="file" name="upload" accept="application/pdf" />
      <label for=""> <img src={p} alt="" /> Instant picture <span>*</span></label> <br />
      <input type="file" name="upload" accept="application/pdf" />
      <Link  to="/entrepreneur/partners/success" className="btn1" type="submit">Next &#62;</Link>
    </div>
    <div className="box2"><img src={l} alt="" /></div>
  </div>
</div>
</>
        );
    };
    
    export default BVerify;