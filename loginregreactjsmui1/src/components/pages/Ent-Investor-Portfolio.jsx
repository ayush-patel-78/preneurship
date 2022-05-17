import "./../css/Investor-Portfolio.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEntrepreneurPortfolioPutDataMutation } from "../../services/userAuthApi";
// import h from "./../images/h.png";
// import c from "./../images/c.png";
// import s from "./../images/s.png";
// import p from "./../images/p.png";

const IPortfolio = () => {

  const entData = JSON.parse(localStorage.getItem("EntrepreneurPortfolioData"))
  const [EntrepreneurPortfolioPutData,{isLoading}]= useEntrepreneurPortfolioPutDataMutation();

  const [EntrepreneurPortfolioData,setEntrepreneurPortfolioData]= useState({
    profile:"",
    name_own:entData.name_own,
    comp_email:entData.comp_email,
    comp_contact:entData.comp_contact,
    companyname:entData.companyname,
    desc:entData.desc,
    pitch:entData.pitch,
    valuation:entData.valuation,
    sales:entData.sales,
    margin:entData.margin,
    profit_month:entData.profit_month,
    profit_year:entData.profit_year,
    owership:"",
    dil_equity:"",
    ls_equity:"",
    open_to_investors:false,
    open_to_partners:false,
    price_release:"",
    ready:false

})

const handleChange = (e)=>{
  setEntrepreneurPortfolioData((prevData)=>({...prevData,[e.target.name]:e.target.value}));
  console.log(EntrepreneurPortfolioData)
  // setDemoState((prevData)=>({...prevData,[e.target.name]:e.target.value}))
  
}

const submit = ()=>{
  localStorage.setItem("EntrepreneurPortfolioData",JSON.stringify(EntrepreneurPortfolioData))
  const actualData = {
    owership:EntrepreneurPortfolioData.owership,
    dil_equity:EntrepreneurPortfolioData.dil_equity,
    ls_equity:EntrepreneurPortfolioData.ls_equity,
    open_to_investors:EntrepreneurPortfolioData.open_to_investors,
    open_to_partners:EntrepreneurPortfolioData.open_to_partners

  }
  const EntrepreneurPortfolioData_id = localStorage.getItem("entrepreneurPortfolio_id");
  console.log("Data passed to the put:",actualData)
  const responseOfPortfolioPUT = EntrepreneurPortfolioPutData(actualData);
  console.log("Response of portfolio PUT request:",responseOfPortfolioPUT);


}

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
        <input type="text" name="owership" onChange={handleChange} placeholder="Ownership" id="" /> <br />
        <input type="text" name="dil_equity" onChange={handleChange} placeholder="Dilution equity" id="" /> <br />
        <input type="text" name="ls_equity" onChange={handleChange} placeholder="Equity owners" id="" /> <br />
        {/* <Link className="E-E12-btn1"  type="submit" href="./release">Next &#62;</Link> */}
      </div>
      {/* add two toggles 
  1 option --->open to investors 
   2 option --->open to partners */}
      <input
        type="checkbox"
        id="investors"
        name="open_to_investors"
        onChange={handleChange}
        className="E-E12-btn2"
        value="True"
      ></input>
      <label>Open to Investors</label>
      <br />
      <br />
      <input
        type="checkbox"
        id="partners"
        name="open_to_partners"
        onChange={handleChange}
        className="E-E12-btn2"
        value="True"
      ></input>
      <label>Open to Partners</label>
      <br />
      <br />
      <Link className="E-E12-btn2" onClick={submit} type="submit" to="/enterpreneur/portfolio/success">
        {" "}
        Save
      </Link>
    </>
  );
};
export default IPortfolio;
