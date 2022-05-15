import "./../css/Investor-verification.css";
import { Button } from "react-bootstrap";
import s from "./../css/success icon.png";
import i from "./../css/img3.jpg";
import { useState, useEffect } from "react";
const IVerify = () => {
  const [formData3, setFormData3] = useState({
    company_owner: "",
    company_type: "",
    company_verification: "",
    owner_pancard: "",
  });

  function handlechange(e) {
    setFormData3((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value,
    }));
  }

  useEffect(() => {
    localStorage.setItem("form3", JSON.stringify(formData3));
  }, [formData3]);
  return (
    <>
      <div className="E-6-container1">
        <div className="E-6-cirle1"></div>
        <div className="E-6-cirle2"></div>
        <div className="E-6-main-box">
          <div className="E-6-box1">
            <h2>
              Its time to verify! <img src={s} alt="" />
            </h2>
            <input
              type="text"
              placeholder="Company owner"
              name="company_owner"
              value={formData3.company_owner}
              onChange={handlechange}
            />
            <br />
            <input
              type="text"
              name="company_type"
              placeholder="Company type"
              value={formData3.company_type}
              onChange={handlechange}
            />
            <br />
            <input
              type="text"
              name="company_verification"
              placeholder="Company verification"
              value={formData3.company_verification}
              onChange={handlechange}
            />
            <br />
            <input
              type="text"
              name="owner_pancard"
              placeholder="Owner's PAN card"
              value={formData3.owner_pancard}
              onChange={handlechange}
            />
            <br />
            <Button className="E-6-btn2" href="">
              Need help for verification!
            </Button>
            <br />
            <Button
              className="E-6-btn1"
              href="./investor-overview"
              type="submit"
            >
              Next &#62;
            </Button>
          </div>
          <div className="E-6-box2">
            <img src={i} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default IVerify;
