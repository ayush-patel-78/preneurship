import "./../css/Messages.css";
import {Button} from "react-bootstrap";
import l from "./../css/company-logo.jpg"
import lp from "./../css/company-logo.jpg";
import p from "./../css/search-icon.png"
const  BMessages= () => {
    return (<>  
    <div className="E-16-container">
      <div className="E-16-box1">
        <img src={l} alt=""/>
        <h2>Preneurship</h2>
        <input type="text"/>
        <img src={p} alt="" />
      </div>

      <div className="E-16-box2">
        <div className="E-16-row">
            <div className="E-16-col-6">
                <Button href="./buddy-messages"className="E-16-btn2"  type="submit">Messages</Button>
                <Button href="./buddy-connections"className="E-16-btn3"  type="submit">Connections <span>+</span></Button>
                <div className="E-16-name-section">
                    <span> <img src={lp} alt=""/> Name  </span>
                    <span> <img src={lp} alt=""/> Name  </span>
                    <span> <img src={lp} alt=""/> Name  </span>
                    <span> <img src={lp} alt=""/> Name  </span>
                    <span> <img src={lp} alt=""/> Name  </span>
                    <span> <img src={lp} alt=""/> Name  </span>
                   
                </div>
            </div>
            <Button href="./buddy-home"className="E-16-btn1"  type="submit"> &#60; Back </Button>
        </div>
    </div>

    </div></>
    );
};

export default BMessages;