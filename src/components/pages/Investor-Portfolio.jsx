import "./../css/Investor-Portfolio.css";
import h from "./../css/h.png";
import c from "./../css/c.png";
import s from "./../css/s.png";
import p from "./../css/p.png";
import {Button} from "react-bootstrap";
const IPortfolio= () => {
    return (<> <div className="E-11-navbar2">
   <Button href="/investor-home"><img src={h}className="E-11-s" href="" alt="" /></Button> 
   <Button href="/investor-profile"><img src={c} className="E-11-t" alt=""/></Button> 
   <Button href="/release"><img src={p} className="E-11-v"  alt=""/></Button> 
    <Button href="/investor-setting"><img src={s} className="E-11-u" alt=""/></Button>
   
  </div>
  <div className="E-11-container1">
    <div className="E-11-navbar"></div>
    <div className="E-11-circle1"></div>
    <div className="E-11-circle2"></div>
    <div className="E-11-circle3"></div>

    <span><img src="./logo512.png" alt=""/></span>
  </div>

  <div className="E-11-box2">
    <input type="text" name="" placeholder="Ownership" id=""/> <br/>
    <input type="text" name=""  placeholder="Dilution equity" id=""/> <br/>
    <input type="text" name="" placeholder="Equity owners" id=""/> <br/>
    {/* <Button className="E-11-btn1"  type="submit" href="./release">Next &#62;</Button> */}
  </div>
  </>
);
};
export default IPortfolio;