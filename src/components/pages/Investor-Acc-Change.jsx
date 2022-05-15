import "./../css/Investor-Acc-Change.css";
import {Button} from "react-bootstrap";
import e from "./../css/img3.jpg";
const  IChange= () => {
    return (<>  <div className="E-8-container1">
    <div className="E-8-circle1"></div>
    <div className="E-8-circle2"></div>
    <div className="E-8-main-box">
      <div className="E-8-box1">
        <h2>Change account to</h2>
        <p>Looking for a buddy?</p>
    <Button href="./buddy" className="E-8-btn1" type="submit">YES</Button>
     <Button  href="./investor-home" className="E-8-btn1" type="submit">NO</Button> 
      
      </div>
      <div className="E-8-box2"><img src={e} alt=""/></div>
    </div>
  </div></>
    );
};

export default IChange;