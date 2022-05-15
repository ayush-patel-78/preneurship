import "./../css/Buddy-Acc-Change.css";
import {Button} from "react-bootstrap";
import s from "./../css/img3.jpg"
const  BChange= () => {
    return (<>

        <div className="E-7-container1">
          <div className="E-7-circle1"></div>
          <div className="E-7-circle2"></div>
          <div className="E-7-main-box">
            <div className="E-7-box1">
              <h2>Change account to</h2>
              <p>Looking for investors?</p>
              <Button className="E-7-btn1" href="./investor" type="submit">YES</Button>
           <Button href="/buddy-profile" className="E-7-btn1" type="submit">NO</Button> 
             
            </div>
            <div className="E-7-box2"><img src={s} alt=""/></div>
          </div>
        </div></>
    );
};

export default BChange;