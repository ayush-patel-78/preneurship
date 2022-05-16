import "./../css/Buddy-Home.css";
// import l from "./../images/product-images.jpg";
import h from "./../images/h.png";
import c from "./../images/c.png";
import s from "./../images/s.png";
import { useNavigate } from 'react-router-dom';
import { useEntrepreneurDataQuery } from "../../services/userAuthApi";

import axios from 'axios'
// import n from "./../images/n1.webp";
import {Link} from "react-router-dom"
import { useState } from "react";

const  BHome=  () => {  
  
  const access_token = localStorage.getItem("access_token");
  
    // axios({
    //   method: 'get',
    //   url: 'http://127.0.0.1:8000/api/verification/',
    //   headers:{
    //     'Authorization': `Token ${access_token}`
    //   }
    // })
    //   .then( (response) =>{
    //     console.log(response)
    //     setState({["owner"]:response.data[0].title})
    //     setState({["companyname"]:response.data[0].companyname})
    //     setState({["desc"]:response.data[0].desc})
    //     setState({["pitch"]:response.data[0].pitch})
    //   });

    const { data, isSuccess } =   useEntrepreneurDataQuery(access_token);
 

  console.log(data);
  // console.log(data.title)
  
  const [state,setState] = useState({
    // owner:data[0].title,
    // companyname:data[0].companyname,
    // desc:data[0].desc,
    // pitch:data[0].pitch

  })
 
    
  // setTimeout(getdata, 300);
  
  
  const navigate = useNavigate()
  
  

  const handleLogOut = ()=>{
    localStorage.removeItem("access_token")
    navigate('/login')
  }
  
 

//  Frontend developer entrepreneurData ke ander pura data aa gya hai display kaha karana hai kaise karana hai dekh lena 



    return (
    <>
       <div className="E-12-navbar2">
       <Link to="/entrepreneur/partners/home"><img src={h}className="E-12-s" alt="" /></Link> 
   <Link to="/entrepreneur/partners/profile"><img src={c} className="E-12-t" alt=""/></Link> 
    <Link to="/entrepreneur/partners/setting"> <img src={s} className="E-12-u" alt=""/></Link>
    </div>
    <div className="E-12-container1">
      <div className="E-12-navbar"> <span>
          {/* <h5>John dept</h5> */}
          <h5>{state.owner}</h5>
          {/* <p>Ozone pvt. ltd</p> */}
          <p>{state.companyname}</p>
          <Link to="/login" onClick={handleLogOut} className="E-12-notification ">Logout</Link> 
          {/* <Link to="./buddy-messages" className="E-12-notification "> <span>Inbox</span>
  <span className="E-12-badge">+</span>
</Link>  */}
        </span>
       </div>
      <div className="E-12-circle1"></div>
      <div className="E-12-circle2"></div>
      <span><img src="./logo512.png" alt=""/></span>
    </div>
    <div className="E-12-box2">
      <label type="text"> Your Product description is</label>
      {/* <input /> */}
      <div>{state.desc}</div> <br/>
      <label type="text">Your Pitch is</label>
      {/* <input /> */}
      <div>{state.pitch}</div> <br/>
      {/* <div className="E-12-product-section">
        <label for="">Images</label> <br/>
        <span><img src={l} alt=""/></span>
        <span><img src={l} alt=""/></span>
        <span><img src={l} alt=""/></span>+ <br/>
      </div> */}
      {/* <Link to="/buddy-profile" className="E-12-btn1"  type="submit">Update Profile</Link> */}
      <br/><br/>
      <Link to="/entrepreneur/portfolio" className="E-12-btn2"  type="submit">SetUp/Update Portfolio</Link>
      <br/><br/>
      <Link to="/entrepreneur/release" className="E-12-btn2"  type="submit">Next Step is Ready to Release Equity</Link>
    </div></>
    );
};

export default BHome;