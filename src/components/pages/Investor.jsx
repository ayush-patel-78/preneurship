import "./../css/Investor.css";
import { Button } from "react-bootstrap";
import c from "./../css/add profile.jpg";
import { useState, useEffect } from "react";
const Investor = () => {
  const [formData2, setFormData2] = useState({
    company_name: "",
  });
  const [image, setImage] = useState("");


  
  function handlechange(e) {
    setFormData2((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value,
    }));
  }
  function handleFilesubmit(e) {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      localStorage["fileBaesd64"] = base64;
      console.debug("file stored", base64);
      setImage(base64);
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

  useEffect(() => {
    localStorage.setItem("form2", JSON.stringify(formData2));
  }, [formData2]);

  return (
    <>
      <div className="E-5-container1">
        <div className="E-5-navbar"></div>
        <div className="E-5-circle1"></div>
        <div className="E-5-circle2"></div>
        <div className="E-5-circle3"></div>
        <div className="E-5-sidebar"></div>
        <span>
          <img src={image ? image : c} alt="" />
        </span>
        <input type="file" onChange={handleFilesubmit} />
      </div>

      <div className="E-5-box2">
        <label for="">Add details</label> <br />
        <input
          type="text"
          name="company_name"
          value={formData2.company_name}
          onChange={handlechange}
          placeholder="Company name"
        />
        <br />
        <Button
          className="E-5-btn1"
          href="./investor-verification"
          type="submit"
        >
          Next &#62;
        </Button>
      </div>
    </>
  );
};

export default Investor;
