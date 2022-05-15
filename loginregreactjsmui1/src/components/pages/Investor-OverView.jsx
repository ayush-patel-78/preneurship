import "./../css/Investor-OverView.css";
// import h from "./../css/h.png";
// import c from "./../css/c.png";
// import s from "./../css/s.png";
// import p from "./../css/p.png";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { usePostdataMutation } from "../../services/service";

const getLocalItem = () => {
  const data = localStorage.getItem("base64");
  if (data) {
    return JSON.parse(localStorage.getItem("base64"));
  } else {
    return [];
  }
};
// for from1 data
const from1allData = () => {
  const from1data = localStorage.getItem("form1");
  if (from1data) {
    return JSON.parse(localStorage.getItem("form1"));
  } else {
    return [];
  }
};
// for form2 data
const from2allData = () => {
  const from2data = localStorage.getItem("form2");
  if (from2data) {
    return JSON.parse(localStorage.getItem("form2"));
  } else {
    return [];
  }
};

// for form3 data
const from3allData = () => {
  const from3data = localStorage.getItem("form3");
  if (from3data) {
    return JSON.parse(localStorage.getItem("form3"));
  } else {
    return [];
  }
};

// for form4 data
const from4allData = () => {
  const from4data = localStorage.getItem("form4");
  if (from4data) {
    return JSON.parse(localStorage.getItem("form4"));
  } else {
    return [];
  }
};
const IOverView = () => {
  const [showimage, setShowImage] = useState(getLocalItem());

  const [formData4, setFormData4] = useState({
    company_valuation: "",
    groos_margin: "",
    profit_in_month: "",
    profit_in_year: "",
    company_sales: "",
  });
  const [allform1Data, SetAllForm1Data] = useState(from1allData());
  const [allform2Data, SetAllForm2Data] = useState(from2allData());
  const [allform3Data, SetAllForm3Data] = useState(from3allData());
  const [allform4Data, SetAllForm4Data] = useState(from4allData());

  const [finalformData, setFinalFormData] = useState({
    owner: allform1Data.ownername,
    companyname: allform2Data.company_name,
    margin: allform4Data.groos_margin,
    ownership: "",
    owner: allform3Data.company_owner,
    pitch: "",
    profile: "",
    profit_month: allform4Data.profit_in_month,
    profit_year: allform4Data.profit_in_year,
    sales: allform4Data.company_sales,
    valuation: allform4Data.company_valuation,
    dil_equity: "",
    ls_equity_members: "",
  });
  function handlechange(e) {
    setFormData4((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value,
    }));
  }

  useEffect(() => {
    localStorage.setItem("form4", JSON.stringify(formData4));
  }, [formData4]);

  const [alldata,{isLoading}] = usePostdataMutation()

const postdata=()=>{
  const res= alldata(finalformData)
  console.log(res)
}

  return (
    <>
      <div className="E-11-container1">
        <div className="E-11-navbar"></div>
        <div className="E-11-circle1"></div>
        <div className="E-11-circle2"></div>
        <div className="E-11-circle3"></div>

        <span>
          <img src={showimage ? showimage : "./logo512.png"} alt="" />
        </span>
      </div>

      <div className="E-11-box2">
        <input
          type="text"
          name="company_valuation"
          placeholder="Company Valuation"
          id=""
          value={formData4.company_valuation}
          onChange={handlechange}
        />
        <br />
        <input
          type="text"
          name="groos_margin"
          placeholder="Gross Margin"
          id=""
          value={formData4.groos_margin}
          onChange={handlechange}
        />
        <br />
        <input
          type="text"
          name="profit_in_month"
          placeholder="Profit In A Month"
          id=""
          value={formData4.profit_in_month}
          onChange={handlechange}
        />
        <br />
        <input
          type="text"
          name="profit_in_year"
          placeholder="Profit In A Year"
          id=""
          value={formData4.profit_in_year}
          onChange={handlechange}
        />
        <br />
        <input
          type="text"
          name="company_sales"
          placeholder="Company Sales"
          id=""
          value={formData4.company_sales}
          onChange={handlechange}
        />
        <br />
        <Button className="E-11-btn1" type="submit"onClick={postdata} href="./investor-success">
          Next &#62;
        </Button>
      </div>
    </>
  );
};

export default IOverView;
