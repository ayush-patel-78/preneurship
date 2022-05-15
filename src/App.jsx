import React from "react";
import Welcome from "./components/pages/Welcome-Page";
import Buddy from "./components/pages/Buddy";
import BVerify from "./components/pages/Buddy-Verifiication";
import BSuccess from "./components/pages/Buddy-Success";
import Investor from "./components/pages/Investor";
import IVerify from "./components/pages/Investor-verification";
import ISuccess from "./components/pages/Investor-Success";
import IOverView from "./components/pages/Investor-OverView";
import BChange from "./components/pages/Buddy-Acc-Change";
import BSetting from "./components/pages/Buddy-Setting";
import ISetting from "./components/pages/Investor-Setting";
import IChange from "./components/pages/Investor-Acc-Change";
import Release from "./components/pages/Release";
import IPortfolio from "./components/pages/Investor-Portfolio";
import BHome from "./components/pages/Buddy-Home";
import BProfile from "./components/pages/Buddy-Profile";
import IHome from "./components/pages/Investor-Home";
import IProfile from "./components/pages/Investor-profile";
import IMessages from "./components/pages/Investor-Messages";
import IConnections from "./components/pages/Investor-Connections";
import BMessages from "./components/pages/Buddy-Messages";
import BConnections from "./components/pages/Buddy-Connections";
import FSuccess from "./components/pages/Final-Success.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGetDataByIdQuery } from "./services/service"



function App() {
// console.time("SLOW_TIME")
  const data =useGetDataByIdQuery()
  
  // console.timeEnd("SLOW_TIME")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>} exact />
        <Route path="/buddy" element={<Buddy/>} exact />
        <Route path="/buddy-verification"  element={<BVerify/>} exact />
        <Route path="/buddy-success"  element={<BSuccess/>} exact />
        <Route path="/investor"  element={<Investor/>} exact />
        <Route path="/investor-verification"  element={<IVerify/>} exact />
        <Route path="/investor-success"  element={<ISuccess/>} exact />
        <Route path="/investor-overview"  element={<IOverView/>} exact />
        <Route path="/buddy-setting"  element={<BSetting/>} exact />
        <Route path="/buddy-account-type-change"element={<BChange/>} exact />
        <Route path="/investor-account-type-change" element={<IChange/>} exact />
        <Route path="/investor-portfolio" element={<IPortfolio/>} exact />
        <Route path="/release" element={<Release/>} exact />
        <Route path="/buddy-home" element={<BHome/>} exact />
        <Route path="/buddy-profile"element={<BProfile/>} exact />
        <Route path="/investor-home" element={<IHome/>} exact />
        <Route path="/investor-setting" element={<ISetting/>} exact />
        <Route path="/investor-profile" element={<IProfile/>} exact />
        <Route path="/investor-messages" element={<IMessages/>} exact />
        <Route path="/investor-connections" element={<IConnections/>} exact />
        <Route path="/buddy-messages" element={<BMessages/>} exact />
        <Route path="/buddy-connections" element={<BConnections/>} exact />
        <Route path="/final-success" element={<FSuccess/>} exact />
        {/* <Route path="/eighteen" component={Eighteen} exact /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
