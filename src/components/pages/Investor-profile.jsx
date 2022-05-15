import "./../css/Investor-profile.css";
import { Button } from "react-bootstrap";
import l from "./../css/product-images.jpg";
import { useState } from "react";

const showName = () => {
  const data = localStorage.getItem("form1");
  if (data) {
    return JSON.parse(localStorage.getItem("form1"));
  } else {
    return [];
  }
};



const showCompanyType= () => {
  const data = localStorage.getItem("form3");
  if (data) {
    return JSON.parse(localStorage.getItem("form3"));
  } else {
    return [];
  }
};


const IProfile = () => {
  const [shownamedata, setShowNamedata] = useState(showName());
  const [showtype, setShowType] = useState(showCompanyType());

  return (
    <>
      <div className="E-15-container1">
        <div className="E-15-navbar">
          <span>
            <h5>John dept{shownamedata.ownername}</h5>
            <p>Ozone pvt. ltd</p>
          </span>
        </div>
        <div className="E-15-circle1"></div>
        <div className="E-15-circle2"></div>

        <span>
          <img src="./logo512.png" alt="" />
        </span>
      </div>

      <div className="E-15-box2">
        <input type="text" name="" id="" placeholder="Owner name"value={shownamedata.ownername} /> <br />
        <input type="text" name="" id="" placeholder="Add Owner" /> <br />
        <input type="text" name="" id="" placeholder="Company type" value={showtype.company_type} /> <br />
        <input type="text" name="" id="" placeholder="Add Company Type" />{" "}
        <br />
        <input type="text" name="" id="" placeholder="Company description" />
        <br />
        <input type="text" name="" id="" placeholder="Buisness pitch" /> <br />
        <div className="E-15-product-section">
          <label for="">Images</label> <br />
          <span>
            <img src={l} alt="" />
          </span>
          <span>
            <img src={l} alt="" />
          </span>
          <span>
            <img src={l} alt="" />
          </span>
          + <br />
        </div>
        <Button href="./investor-home" className="E-15-btn1" type="submit">
          Update
        </Button>
        <Button href="./investor-home" className="E-15-btn2" type="submit">
          Back
        </Button>
        <Button
          href="./investor-account-type-change"
          className="E-15-btn3"
          type="submit"
        >
          Change Account Type
        </Button>
      </div>
    </>
  );
};

export default IProfile;
