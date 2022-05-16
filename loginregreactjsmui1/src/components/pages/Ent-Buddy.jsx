import "./../css/Buddy.css";
import {Link} from "react-router-dom";
import { useState } from "react";

const  Buddy= () => {

  const data = JSON.parse(localStorage.getItem("entrepreneur_data"));
  // console.log(data);
  // console.log(data.owner);
  // console.log(data.date);
  // console.log(data.number);

  // const [image, setImage] = useState("");

  const [entrepreneurData,setEntrepreneurData] = useState({
    
    title:data.title,
    date:data.date,
    number:data.number,
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

  const handleChange = (e)=>{
    setEntrepreneurData((prevData)=>({...prevData,[e.target.name]:e.target.value}))
    // console.log(entrepreneurData)
  }

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
      // console.log(entrepreneurData.companydocs)
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




  const submit = ()=>{
    localStorage.setItem("entrepreneur_data",JSON.stringify(entrepreneurData))
  }


   



    return (<>
        <div className="E-2-container1">
    <h3>Just a few more steps!</h3>
    <div className="E-2-navbar"></div>
    <div className="E-2-circle1"></div>
    <div className="E-2-circle2"></div>
    <div className="E-2-circle3"></div>
    <div className="E-2-sidebar"></div>
    <span><img src="./logo512.png" alt="" /></span>
  </div>

  <div className="E-2-box2">
    <input type="text"  name="companyname"  onChange={handleChange} placeholder="Company name" /> <br />
   {/* <input type="text" name="" id="" placeholder="Upload"> <br>  */}
    {/* <input type="file" name="upload" accept="application/pdf"  placeholder="Company name"/> */}
    <input type="file" accept="image/*"  name="companydocs" onChange={handleFilesubmit} placeholder="Company name"/>
    <input type="text"  name="desc"  onChange={handleChange} placeholder="Description"/> <br/>
    <input type="text" name="pitch"  onChange={handleChange} placeholder="Add pitch"/> <br/>
    <Link className="E-2-btn1" type="submit" onClick={submit} to="/entrepreneur/partners/verification">Next &#62;</Link> 
    <br/>
  </div>
  </>
        );
    };
    
    export default Buddy;
