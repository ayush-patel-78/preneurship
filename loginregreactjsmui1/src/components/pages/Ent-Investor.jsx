import "./../css/Investor.css";
import {Link} from "react-router-dom";
import { useEntrepreneurPortfolioGetDataQuery,useEntrepreneurPortfolioPostDataMutation,useEntrepreneurPortfolioPutDataMutation } from "../../services/userAuthApi";
import c from "./../images/add profile.jpg"
import { useState } from "react";
import { ConstructionSharp } from "@mui/icons-material";
const  Investor= async () => {

    const access_token = localStorage.getItem("access_token")
    const {data,isSuccess} = useEntrepreneurPortfolioGetDataQuery(access_token);

    

    const [EntrepreneurPortfolioPostData,setEntrepreneurPortfolioPostData]= useEntrepreneurPortfolioPostDataMutation();
    const [EntrepreneurPortfolioPuttData,setEntrepreneurPortfolioPutData]= useEntrepreneurPortfolioPutDataMutation
    // const [EntreprenurInvestor,{isLoading}]= useUpdateEntrepreneurDataMutation();

    const [EntrepreneurPortfolioData,setEntrepreneurPortfolioData]= useState({
        profile:"",
        name_own:"",
        comp_email:"",
        comp_contact:"",
        companyname:"",
        desc:"",
        pitch:"",
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

    if(data[0]){
        
    }else{
        const emptyData ={

        }
        const res = await EntrepreneurPortfolioPostData(emptyData);
        console.log(res)
    }

    return (<>
        <div className="E-5-container1">
        <div className="E-5-navbar"></div>
        <div className="E-5-circle1"></div>
        <div className="E-5-circle2"></div>
        <div className="E-5-circle3"></div>
        <div className="E-5-sidebar"></div>
        <span><img src={c} alt=""/></span>
        <input type="file"/>
    </div>

    <div className="E-5-box2">
        <h3 for="">Add details</h3> <br/>
        <label >Owner Name</label> <br/>
        <input type="text" name="title" id=""/> <br/>
        <label >Company Email</label> <br/>
        <input type="text" name="" id=""/> <br/>
        <label >Company Contact No.</label> <br/>
        <input type="text" name="" id=""/> <br/>
        <label >Company Name</label> <br/>
        <input type="text" name="" id=""/> <br/>
        <label >Company Discription</label> <br/>
        <input type="text" name="" id=""/> <br/>
        <label >Company Pitch</label> <br/>
        <input type="text" name="" id=""/> <br/>
        
    <Link className="E-5-btn1" to="/enterpreneur/portfolio/overview" type="submit" >Next &#62;</Link> 

    </div></>
    );
};

export default Investor;