import "./../css/Buddy.css";
import {Link} from "react-router-dom";
const  Buddy= () => {
    return (<>
        <div className="E-2-container1">
    <h3>Just a few more steps!</h3>
    <div className="E-2-navbar"></div>
    <div className="E-2-circle1"></div>
    <div className="E-2-circle2"></div>
    <div className="E-2-circle3"></div>
    <div className="E-2-sidebar"></div>
    <span><img src="./logo512.png" alt="" /></span>
  </div>

  <div className="E-2-box2">
    <input type="text"  name="" placeholder="Company name" /> <br />
   {/* <input type="text" name="" id="" placeholder="Upload"> <br>  */}
    <input type="file" name="upload" accept="application/pdf"  placeholder="Company name"/>

    <input type="text"   placeholder="Description"/> <br/>
    <input type="text" placeholder="Add pitch"/> <br/>
    <Link className="E-2-btn1" type="submit" to="/entrepreneur/partners/verification">Next &#62;</Link> 
    <br/>
  </div>
  </>
        );
    };
    
    export default Buddy;
