import "./../css/Final-Success.css";
import {Button} from "react-bootstrap";
import s from "./../css/success icon.png"
const  FSuccess= () => {
    return (<>
      <div className="E-F-container1">
    <div className="E-F-box1">
      <img src={s} alt=""/>
      <p>Success</p>
      <h3>WELCOME!</h3>
    </div>
    <Button className="E-F-btn1" href="/" type="submit">Next &#62;</Button>

  </div></>
    );
};

export default FSuccess;