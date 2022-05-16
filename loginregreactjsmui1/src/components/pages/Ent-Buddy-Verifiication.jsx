import "./../css/Buddy-Verification.css";
import {Link} from "react-router-dom";
import s from "./../images/success icon.png"
// import i from "./../css/id card.png"
import i from "./../images/id card.png"
import p from "./../images/icons8-camera-24.png"
import l from "./../images/img3.jpg"
import { useState } from "react";
import Axios from 'axios'
import { useEntrepreneurWelcomeMutation } from "../../services/userAuthApi";
const  BVerify= () => {

  
  const data = JSON.parse(localStorage.getItem("entrepreneur_data"));
  const [postEntrepreneurData,{isLoading}]=useEntrepreneurWelcomeMutation();
  const [entrepreneurData,setEntrepreneurData] = useState({
    
    title:data.title,
    date:data.date,
    number:data.number,
    
    companyname:data.companyname,
    companydocs:data.companydocs,
    desc:data.desc,
    pitch:data.pitch,
    aadhar:"",
    Pancard:"",
    Voterid:"",
    selfie:""
  })

  // const handleChange = (e)=>{
  //   setEntrepreneurData((prevData)=>({...prevData,[e.target.name]:e.target.value}))
  //   // console.log(entrepreneurData)
  // }

  // const filedatachange = (e)=>{
  //   const reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   console.log(reader.result)
  //   setEntrepreneurData((prevData)=>({...prevData,[e.target.name]:reader.result}));
    
  // }
  const handleFilesubmit=(e)=> {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      // localStorage["fileBaesd64"] = base64;
      // console.debug("file stored", base64);
      // setImage(base64);
      console.log(base64)
      setEntrepreneurData((prevData)=>({...prevData,[e.target.name]:base64}));
      console.log(entrepreneurData.aadhar)

      
    });
  }
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };




  const submit = async ()=>{
    localStorage.setItem("entrepreneur_data",JSON.stringify(entrepreneurData));
    const access_token=localStorage.getItem("access_token")
    const formdata = JSON.parse(localStorage.getItem("entrepreneur_data"))
    console.log(access_token)
    const res = await postEntrepreneurData({formdata,access_token})
    console.log(res)
    
    
    // const url = "http://127.0.0.1:8000/api/verification/";
    // Axios.post(url,entrepreneurData,access_token).then((res)=>{console.log(res)})
  
  }



    return (<>
  <div className="container1">
  <div className="circle1"></div>
  <div className="circle2"></div>
  <div className="main-box">
    <div className="box1">
      <h2>Its time to verify! <img src={s} alt="" /> </h2>
      <label for=""> <img src={i} alt="" />  Aadhar card <span>*</span></label> <br />
      <input type="file" name="aadhar" onChange={handleFilesubmit} />
      <label for=""> <img src={i} alt="" /> Pan card</label> <br />
      <input type="file" name="Pancard" onChange={handleFilesubmit}   />
      <label for=""> <img src={i} alt="" /> Voter ID card</label> <br />
      <input type="file" name="Voterid" onChange={handleFilesubmit}   />
      <label for=""> <img src={p} alt="" /> Instant picture <span>*</span></label> <br />
      <input type="file" name="selfie"   onChange={handleFilesubmit}  />
      <Link  to="/entrepreneur/partners/success" className="btn1" type="submit" onClick={submit}>Next &#62;</Link>
    </div>
    <div className="box2"><img src={l} alt="" /></div>
  </div>
</div>
</>
        );
    };
    
    export default BVerify;