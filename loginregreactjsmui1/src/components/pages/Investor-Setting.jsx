import "./../css/Investor-Setting.css";
import { Button } from "react-bootstrap";


const ISetting = () => {
  return (
    <>
      <div className="E-I-container">
        <div className="E-I-circle1"></div>
        <div className="E-I-circle2"></div>
        <div className="E-I-box1">
          <img src="" alt="" />
          <h3>Preneurship</h3>

          <div className="E-I-box2">
            <h3>Settings</h3>
            <input type="text" name="" id="" placeholder="Contact us" /> <br />
            <input
              type="text"
              name=""
              id=""
              placeholder="Change language"
            />{" "}
            <br />
            <input type="text" name="" id="" placeholder="Payments" /> <br />
            <Button href="./investor-home" className="E-I-btn" type="submit">
              Update &#62;
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ISetting;
