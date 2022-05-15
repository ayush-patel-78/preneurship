import "./../css/Investor-Portfolio.css";
import { Link } from "react-router-dom";
// import h from "./../images/h.png";
// import c from "./../images/c.png";
// import s from "./../images/s.png";
// import p from "./../images/p.png";

const IPortfolio = () => {
  return (
    <>
      {/* <div className="E-E12-navbar2"> */}
      {/* <Link to="/investor-home"><img src={h}className="E-E12-s" href="" alt="" /></Link> 
   <Link to="/investor-profile"><img src={c} className="E-E12-t" alt=""/></Link> 
   <Link to="/release"><img src={p} className="E-E12-v"  alt=""/></Link> 
    <Link to="/investor-setting"><img src={s} className="E-E12-u" alt=""/></Link> */}

      {/* </div> */}
      <div className="E-E12-container1">
        <div className="E-E12-navbar"></div>
        <div className="E-E12-circle1"></div>
        <div className="E-E12-circle2"></div>
        <div className="E-E12-circle3"></div>

        <span>
          <img src="./logo512.png" alt="" />
        </span>
      </div>

      <div className="E-E12-box2">
        <input type="text" name="" placeholder="Ownership" id="" /> <br />
        <input type="text" name="" placeholder="Dilution equity" id="" /> <br />
        <input type="text" name="" placeholder="Equity owners" id="" /> <br />
        {/* <Link className="E-E12-btn1"  type="submit" href="./release">Next &#62;</Link> */}
      </div>
      {/* add two toggles 
  1 option --->open to investors 
   2 option --->open to partners */}
      <input
        type="checkbox"
        id="investors"
        name="investors"
        className="E-E12-btn2"
        value="True"
      ></input>
      <label>Open to Investors</label>
      <br />
      <br />
      <input
        type="checkbox"
        id="partners"
        name="partners"
        className="E-E12-btn2"
        value="True"
      ></input>
      <label>Open to Partners</label>
      <br />
      <br />
      <Link className="E-E12-btn2" type="submit" to="/enterpreneur/portfolio/success">
        {" "}
        Save
      </Link>
    </>
  );
};
export default IPortfolio;
