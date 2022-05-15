import "./../css/Connections.css";
import {Button} from "react-bootstrap";
import l from "./../css/company-logo.jpg";
import lp from "./../css/company-logo.jpg";
import p from "./../css/search-icon.png"
const  IConnections= () => {
    return (<>
    <div className="E-17-container">
      <div className="E-17-box1">
      <img src={l} alt=""/>
        <h2>Preneurship</h2>
        <input type="text" />
        <img src={p} alt="" />
      </div>

      <div className="E-17-box2">
        <div className="E-17-row">
            <div className="E-17-col-6">
            <Button href="./investor-messages"className="E-17-btn3"  type="submit">Messages <span>+</span></Button>
                <Button href="./investor-connections"className="E-17-btn2"  type="submit">Connections</Button>
                <div className="E-17-name-section">
                <span> <img src={lp} alt=""/> Name  </span>
                    <span> <img src={lp} alt=""/> Name  </span>
                    <span> <img src={lp} alt=""/> Name  </span>
                    <span> <img src={lp} alt=""/> Name  </span>
                    <span> <img src={lp} alt=""/> Name  </span>
                    <span> <img src={lp} alt=""/> Name  </span>
                   
                </div>
            </div>
            <a ><Button className="E-17-btn1" href="./investor-home" type="submit">Next &#62;</Button> </a>
        </div>
    </div>

    </div></>
    );
};

export default IConnections;