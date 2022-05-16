import "./../css/Investor.css";
import {Link} from "react-router-dom";
import { useUpdateEntrepreneurDataMutation } from "../../services/userAuthApi";
import c from "./../images/add profile.jpg"
const  Investor= () => {
    return (<>
        <div className="E-5-container1">
        <div className="E-5-navbar"></div>
        <div className="E-5-circle1"></div>
        <div className="E-5-circle2"></div>
        <div className="E-5-circle3"></div>
        <div className="E-5-sidebar"></div>
        <span><img src={c} alt=""/></span>
        <input type="file"/>
    </div>

    <div className="E-5-box2">
        <h3 for="">Add details</h3> <br/>
        <label >Owner Name</label> <br/>
        <input type="text" name="" id=""/> <br/>
        <label >Company Email</label> <br/>
        <input type="text" name="" id=""/> <br/>
        <label >Company Contact No.</label> <br/>
        <input type="text" name="" id=""/> <br/>
        <label >Company Name</label> <br/>
        <input type="text" name="" id=""/> <br/>
        <label >Company Discription</label> <br/>
        <input type="text" name="" id=""/> <br/>
        <label >Company Pitch</label> <br/>
        <input type="text" name="" id=""/> <br/>
        
    <Link className="E-5-btn1" to="/enterpreneur/portfolio/overview" type="submit" >Next &#62;</Link> 

    </div></>
    );
};

export default Investor;