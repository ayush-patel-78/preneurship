import "./../css/Welcome-Page.css";
// import com from "./../images/company-logo.jpg"
import {Link} from "react-router-dom";
import {useEntrepreneurWelcomeMutation,useUpdateEntrepreneurDataMutation,useEntpreneurDataQuery} from '../../services/userAuthApi'
import { useState } from "react";
import Axios from 'axios';
const  Welcome= () => {
  
  const [postEntrepreneur,{isLoading}]=useEntrepreneurWelcomeMutation()
  const [updateEntrepreneurData]=useUpdateEntrepreneurDataMutation()
  const access_token = localStorage.getItem("access_token")
  // const { entrepreneurGetQuery, isSuccess } =  useEntpreneurDataQuery(access_token);
  // console.log(entrepreneurGetQuery);
  const [entrepreneurData,setEntrepreneurData] = useState({
    
    title:"",
    date:"",
    number:"",
    profile:"",
    companyname:"",
    companydocs:"",
    desc:"",
    pitch:"",
    aadhar:"",
    Pancard:"",
    Voterid:"",
    selfie:""
  })
  const [demoState,setDemoState] = useState({
    title:"",
    date:"",
    number:""
  })
  const handleChange = (e)=>{
    setEntrepreneurData((prevData)=>({...prevData,[e.target.name]:e.target.value}))
    // console.log(entrepreneurData)
    setDemoState((prevData)=>({...prevData,[e.target.name]:e.target.value}))
  }
 

  const submit = async ()=>{
    localStorage.setItem("entrepreneur_data",JSON.stringify(entrepreneurData))
    const formData = JSON.parse(localStorage.getItem("entrepreneur_data"))
    const actualData ={
      title:formData.title,
      date:formData.date,
      number:formData.number
    }
    console.log(`actual data is : ${actualData}`)
    const res = await postEntrepreneur({actualData,access_token})
    console.log(`post request response is : ${res}`);
    const id = localStorage.getItem("id")
   
    const resUpdate = await updateEntrepreneurData({actualData,id,access_token})
    console.log(resUpdate)
    //   const url = "127.0.0.1:8000/api/verification/";
    //   Axios.post(url,demoState,access_token).then((res)=>{console.log(res)})
  }


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
        <input type="text" name="title"  onChange={handleChange} value={entrepreneurData.title} id="idea_icon" placeholder="Idea by" /> <br />
        <h5>Date of Birth</h5>
        <input type="date" name="date"  id="" onChange={handleChange} value={entrepreneurData.date} placeholder="Date of birth" /> <br />
        <input type="text" name="number"  id="phone_icon" onChange={handleChange} value={entrepreneurData.number} placeholder="Phone no" /> <br />
        <br />
       {/* <h3>Are you looking for a...</h3> */}
       {/* <Link className="E-1-btn1" type="submit" to="/buddy">Partner in business</Link> */}
       <Link className="E-1-btn1" type="submit" onClick={submit} to="/entrepreneur/partners">Next</Link>
        {/* <select name="" id="">
          <option value=""> Select</option> */}
         
          {/* <option value="" href="/two">Partner in business</option>
          <option value="" href="/three">Investor</option> */}
        {/* </select>  */}
        {/* <Link className="E-1-btn1" type="submit" href="/two">Next &#62;</Link> */}
      </div>
    </div>
  </div>

    
        );
    };
    
    export default Welcome;