import "./../css/Investor-OverView.css";
import {Link}  from "react-router-dom";
import {useState} from "react";
import { useEntrepreneurPortfolioPutDataMutation } from "../../services/userAuthApi";
// import h from "./../images/h.png";
// import c from "./../images/c.png";
// import s from "./../images/s.png";
// import p from "./../images/p.png";

const IOverView= () => {

  const entData = JSON.parse(localStorage.getItem("EntrepreneurPortfolioData"))
  const [EntrepreneurPortfolioPutData,{isLoading}]=useEntrepreneurPortfolioPutDataMutation();
  const [EntrepreneurPortfolioData,setEntrepreneurPortfolioData]= useState({
    profile:"",
    name_own:entData.name_own,
    comp_email:entData.comp_email,
    comp_contact:entData.comp_contact,
    companyname:entData.companyname,
    desc:entData.desc,
    pitch:entData.pitch,
    valuation:"",
    sales:"",
    margin:"",
    profit_month:"",
    profit_year:"",
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
    valuation:EntrepreneurPortfolioData.valuation,
    sales:EntrepreneurPortfolioData.sales,
    margin:EntrepreneurPortfolioData.margin,
    profit_month:EntrepreneurPortfolioData.profit_month,
    profit_year:EntrepreneurPortfolioData.profit_year

  }
  const EntrepreneurPortfolioData_id = localStorage.getItem("entrepreneurPortfolio_id");
  console.log("Data passed to the put:",actualData)
  const responseOfPortfolioPUT = EntrepreneurPortfolioPutData(actualData);
  console.log("Response of portfolio PUT request:",responseOfPortfolioPUT);


}

    return (<> 
     <div className="E-11-container1">
    <div className="E-11-navbar">
    <span><img src="./logo512.png" alt=""/></span>

    </div>
    <div className="E-11-circle1"></div>
    <div className="E-11-circle2"></div>
    <div className="E-11-circle3"></div>

  </div>

  <div className="E-11-box2">
    <input type="text" name="valuation" onChange={handleChange} placeholder="Company Valuation" id=""/> <br/>
    <input type="text" name="margin"  onChange={handleChange} placeholder="Gross Margin" id=""/> <br/>
    <input type="text" name="profit_month" onChange={handleChange} placeholder="Profit In A Month" id=""/> <br/>
    <input type="text" name="profit_year" onChange={handleChange} placeholder="Profit In A Year" id=""/> <br/>
    <input type="text" name="sales"  onChange={handleChange} placeholder="Company Sales" id=""/> <br/>
    <Link className="E-11-btn1"  onClick={submit} type="submit"  to= '/enterpreneur/portfolio/details'> Next &#62;</Link>
  </div></>
    );
};

export default IOverView;