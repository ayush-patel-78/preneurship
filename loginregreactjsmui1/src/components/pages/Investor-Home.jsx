import "./../css/Investor-Home.css";
import { Button } from "react-bootstrap";
import h from "./../css/h.png";
import c from "./../css/c.png";
import s from "./../css/s.png";
import l from "./../css/product-images.jpg";
import { useState } from "react";
// import { useGetDataByIdQuery } from "../../services/service";

// const getLocalItem = () => {
//   const data = localStorage.getItem("form4");
//   if (data) {
//     return JSON.parse(localStorage.getItem("form4"));
//   } else {
//     return [];
//   }
// };

const IHome = () => {
  // const profile_detailes = useGetDataByIdQuery();

  // const [showData, setShowData] = useState(getLocalItem());

  return (
    <>
      <div className="E-14-navbar2">
        <Button href="/investor-home">
          <img src={h} className="E-14-s" alt="" />
        </Button>
        <Button href="/investor-profile">
          <img src={c} className="E-11-t" alt="" />
        </Button>
        <Button href="/investor-portfolio">
          <img src={s} className="E-11-u" alt="" />
        </Button>
      </div>
      <div className="E-14-container1">
        <div className="E-14-navbar">
          <span>
            {/* ownerName */}
            <h5>
              {/* {profile_detailes.data[1].owner
                ? profile_detailes.data[1].owner
                : "Owner-Name"} */}
            </h5>
            {/* company name */}
            <p>
              {/* {profile_detailes.data[1].companyname
                ? profile_detailes.data[1].companyname
                : "Ozone pvt. ltd"} */}
            </p>
            <Button href="./investor-messages" className="E-14-notification ">
              <span>Inbox</span>
              <span className="E-14-badge">+</span>
            </Button>
          </span>
        </div>
        <div className="E-14-circle1"></div>
        <div className="E-14-circle2"></div>

        <span>
          <img src="./logo512.png" alt="" />
        </span>
      </div>

      <div className="E-14-box2">
        <input type="text" placeholder="Product description" name="" id="" />
        <br />
        <input
          type="text"
          placeholder="Company Valuation"
          // value={showData.company_valuation}
          name=""
          id=""
        />
        <br />
        <input
          type="text"
          placeholder="Business Pitch"
          name="pitch"
          // value={profile_detailes.data[1].pitch}
          id=""
        />
        <br />
        <div className="E-14-product-section">
          <label htmlFor="">Images</label> <br />
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
      </div>
    </>
  );
};

export default IHome;
