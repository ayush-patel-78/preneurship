import "./../css/Welcome-Page.css";
// import com from "./../images/company-logo.jpg"
import {Link} from "react-router-dom";
import { useState } from "react";
const  Welcome= () => {
  
  

  const [entrepreneurData,setEntrepreneurData] = useState({
    owner:"",
    title:"",
    date:"",
    number:"",
    profile:"",
    companyname:"",
    companydocs:"",
    desc:"",
    pitch:"",
    aadhar:"",
    Pancard:"",
    Voterid:"",
    selfie:""
  })

  const handleChange = (e)=>{
    setEntrepreneurData((prevData)=>({...prevData,[e.target.name]:e.target.value}))
    // console.log(entrepreneurData)
  }
  

  const submit = ()=>{
    localStorage.setItem("entrepreneur_data",JSON.stringify(entrepreneurData))
  }


    return (
  
  <div className="E-1-container">
    <h1>May Your dreams come true</h1>
    <div className="E-1-circle1"></div>
    <div className="E-1-circle2"></div>
    <div className="E-1-box1">
      <img src="./company-logo.jpg" alt="" />
      <h3> Preneurship</h3>
      <div className="E-1-box2">
        <h3>Get Started</h3>
        <input type="text" name="owner"  onChange={handleChange} value={entrepreneurData.owner} id="idea_icon" placeholder="Idea by" /> <br />
        <h5>Date of Birth</h5>
        <input type="date" name="date"  id="" onChange={handleChange} value={entrepreneurData.date} placeholder="Date of birth" /> <br />
        <input type="text" name="number"  id="phone_icon" onChange={handleChange} value={entrepreneurData.number} placeholder="Phone no" /> <br />
        <br />
       {/* <h3>Are you looking for a...</h3> */}
       {/* <Link className="E-1-btn1" type="submit" to="/buddy">Partner in business</Link> */}
       <Link className="E-1-btn1" type="submit" onClick={submit} to="/entrepreneur/partners">Next</Link>
        {/* <select name="" id="">
          <option value=""> Select</option> */}
         
          {/* <option value="" href="/two">Partner in business</option>
          <option value="" href="/three">Investor</option> */}
        {/* </select>  */}
        {/* <Link className="E-1-btn1" type="submit" href="/two">Next &#62;</Link> */}
      </div>
    </div>
  </div>

    
        );
    };
    
    export default Welcome;