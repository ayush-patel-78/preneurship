import "./../css/Buddy-Success.css";
import {Button} from "react-bootstrap";
import s from "./../css/success icon.png"
const  BSuccess= () => {
    return (<>
      <div className="E-4-container1">
    <div className="E-4-box1">
      <img src={s} alt=""/>
      <p>Success</p>
      <h3>WELCOME!</h3>
    </div>
    <Button className="E-4-btn1" href="./buddy-home" type="submit">Next &#62;</Button>

  </div></>
    );
};

export default BSuccess;