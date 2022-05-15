import "./../css/Welcome-Page.css";
// import com from "./../css/company-logo.jpg"
import { Button } from "react-bootstrap";
import { useState,useEffect } from "react";
const Welcome = () => {
  const [formData1, setFormData1] = useState({
    ownername: "",
    data: "",
    phone: "",
  });

  function handlechange(e) {
    setFormData1((prevdata)=>({...prevdata, [e.target.name]: e.target.value }));
  }

  useEffect(()=>{
    localStorage.setItem("form1",JSON.stringify(formData1))
  },[formData1])
  
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
          <input
            type="text"
            name="ownername"
            id="idea_icon"
            placeholder="Idea by"
            value={formData1.ownername}
            onChange={handlechange}
          />
          <br />
          <h5>Date of Birth</h5>
          <input
            type="date"
            name="date"
            dateformat= "dd/mm/yyyy"
            id="date"
            placeholder="Date of birth"
            value={formData1.date}
            onChange={handlechange}
          />
          <br />
          <input
            type="text"
            name="phone"
            id="phone_icon"
            placeholder="Phone no"
            value={formData1.phone}
            onChange={handlechange}
          />
          <br />
          <br />
          <h3>Are you looking for a...</h3>
          <Button className="E-1-btn1" type="submit" href="/buddy">
            Partner in business
          </Button>
          <Button className="E-1-btn1" type="submit" href="/investor">
            Investor
          </Button>
          {/* <select name="" id="">
          <option value=""> Select</option> */}
          {/* <option value="" href="/two">Partner in business</option>
          <option value="" href="/three">Investor</option> */}
          {/* </select>  */}
          {/* <Button className="E-1-btn1" type="submit" href="/two">Next &#62;</Button> */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
