import "./../css/Investor.css";
import {Link} from "react-router-dom";
import { useEntrepreneurPortfolioGetDataQuery,useEntrepreneurPortfolioPostDataMutation,useEntrepreneurPortfolioPutDataMutation } from "../../services/userAuthApi";
import c from "./../images/add profile.jpg"
import { useState,useEffect } from "react";
import { ConstructionSharp } from "@mui/icons-material";
import axios from 'axios';
const  Investor= async () => {

    const [EntrepreneurPortfolioPostData,{ isLoading }]= useEntrepreneurPortfolioPostDataMutation();
    const [EntrepreneurPortfolioPutData,{ isSuccess }]= useEntrepreneurPortfolioPutDataMutation();


    const access_token = localStorage.getItem("access_token")
    const entrepreneurPortfolio_id = localStorage.getItem("entrepreneurPortfolio_id");
    // const {data,isSuccess} = useEntrepreneurPortfolioGetDataQuery(access_token);

    
    async function getdata(){

        const emptyData ={

        }
        const res = await EntrepreneurPortfolioPostData(emptyData);
        console.log("response of post request is ",res)
        localStorage.setItem("entrepreneurPortfolio_id",res.data.id);
        axios({
          method: 'get',
          url: `http://127.0.0.1:8000/api/portfolio/${entrepreneurPortfolio_id}/`,
          headers:{
            'Authorization': `Token ${access_token}`
          }
        })
          .then( async (response) =>{
            console.log("response of get request of portfolio is ",response)
            if(response.data[0]){
                
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["profile"]:response.data[0].profile}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["companyname"]:response.data[0].companyname}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["pitch"]:response.data[0].pitch}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["desc"]:response.data[0].desc}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["name_own"]:response.data[0].name_own}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["comp_email"]:response.data[0].comp_email}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["comp_contact"]:response.data[0].comp_contact}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["valuation"]:response.data[0].valuation}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["sales"]:response.data[0].sales}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["margin"]:response.data[0].margin}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["profit_month"]:response.data[0].profit_month}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["profit_year"]:response.data[0].profit_year}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["owership"]:response.data[0].owership}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["dil_equity"]:response.data[0].dil_equity}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["ls_equity"]:response.data[0].ls_equity}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["open_to_investors"]:response.data[0].open_to_investors}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["open_to_partners"]:response.data[0].open_to_partners}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["price_release"]:response.data[0].price_release}));
            setEntrepreneurPortfolioData((prevState)=>({...prevState,["ready"]:response.data[0].ready}));

            }
            else{
                // const emptyData ={

                // }
                // const res = await EntrepreneurPortfolioPostData(emptyData);
                // console.log("response of post request is ",res)
                // localStorage.setItem("entrepreneurPortfolio_id",res.data.id);

            }
            
          });
    
      }

      useEffect(()=>{
        getdata();
      
      },[])

    // const [EntrepreneurPortfolioPostData,setEntrepreneurPortfolioPostData]= useEntrepreneurPortfolioPostDataMutation();
    // const [EntrepreneurPortfolioPuttData,setEntrepreneurPortfolioPutData]= useEntrepreneurPortfolioPutDataMutation();
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

    const handleChange = (e)=>{
        setEntrepreneurPortfolioData((prevData)=>({...prevData,[e.target.name]:e.target.value}))
        // console.log(entrepreneurData)
        // setDemoState((prevData)=>({...prevData,[e.target.name]:e.target.value}))
        localStorage.setItem("EntrepreneurPortfolioData",EntrepreneurPortfolioData)
      }
      

    const submit = ()=>{
        const actualData = {
            name_own:EntrepreneurPortfolioData.name_own,
            comp_email:EntrepreneurPortfolioData.comp_email,
            comp_contact:EntrepreneurPortfolioData.comp_contact,
            companyname:EntrepreneurPortfolioData.companyname,
            desc:EntrepreneurPortfolioData.desc,
            pitch:EntrepreneurPortfolioData.pitch
        }
        const EntrepreneurPortfolioData_id = localStorage.getItem("entrepreneurPortfolio_id");
        const responseOfPortfolioPUT = EntrepreneurPortfolioPutData(actualData);
        console.log("Response of portfolio PUT request:",responseOfPortfolioPUT);


    }
    // if(data[0]){
        
    // }else{
    //     const emptyData ={

    //     }
    //     const res = await EntrepreneurPortfolioPostData(emptyData);
    //     console.log(res)
    // }

    return (<>
        <div className="E-5-container1">
        <div className="E-5-navbar"></div>
        <div className="E-5-circle1"></div>
        <div className="E-5-circle2"></div>
        <div className="E-5-circle3"></div>
        <div className="E-5-sidebar"></div>
        {/* <span><img src={c} alt=""/></span> */}
        <span><img src={EntrepreneurPortfolioData.profile} alt=""/></span>
        <input type="file"/>
    </div>

    <div className="E-5-box2">
        <h3 for="">Add details</h3> <br/>
        <label >Owner Name</label> <br/>
        <input type="text" name="name_own" onChange={handleChange} value={EntrepreneurPortfolioData.name_own} id=""/> <br/>
        <label >Company Email</label> <br/>
        <input type="text" name="comp_email" onChange={handleChange} value={EntrepreneurPortfolioData.comp_email} id=""/> <br/>
        <label >Company Contact No.</label> <br/>
        <input type="text" name="comp_contact"  onChange={handleChange} value={EntrepreneurPortfolioData.comp_contact} id=""/> <br/>
        <label >Company Name</label> <br/>
        <input type="text" name="comapanyname" onChange={handleChange} value={EntrepreneurPortfolioData.companyname} id=""/> <br/>
        <label >Company Description</label> <br/>
        <input type="text" name="desc" onChange={handleChange} value={EntrepreneurPortfolioData.desc} id=""/> <br/>
        <label >Company Pitch</label> <br/>
        <input type="text" name="pitch" onChange={handleChange} value={EntrepreneurPortfolioData.pitch} id=""/> <br/>
        
    <Link className="E-5-btn1" to="/enterpreneur/portfolio/overview" onClick={submit} type="submit" >Next &#62;</Link> 

    </div></>
    );
};

export default Investor;