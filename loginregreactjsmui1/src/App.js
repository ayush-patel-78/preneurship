// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import LoginReg from "./pages/auth/LoginReg";
// import ResetPassword from "./pages/auth/ResetPassword";
// import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
// import Contact from "./pages/Contact";
// import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";
// import Layout from "./pages/Layout";
// import { useSelector } from "react-redux";
// function App() {
//   const { access_token } = useSelector(state => state.auth)
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />} />
//             <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
//             <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
//           </Route>
//           <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />
//           <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;




import React from "react";
import Welcome from "./components/pages/Ent-Welcome-Page";
import Buddy from "./components/pages/Ent-Buddy";
import BVerify from "./components/pages/Ent-Buddy-Verifiication";
import BSuccess from "./components/pages/Ent-Buddy-Success";
import Investor from "./components/pages/Ent-Investor";
import ISuccess from "./components/pages/Ent-Investor-Success";
import IOverView from "./components/pages/Ent-Investor-OverView";
import BChange from "./components/pages/Ent-Buddy-Acc-Change";
import BSetting from "./components/pages/Ent-Buddy-Setting";
import Release from "./components/pages/Ent-Release";
import IPortfolio from "./components/pages/Ent-Investor-Portfolio";
import BHome from "./components/pages/Ent-Buddy-Home";
import BProfile from "./components/pages/Ent-Buddy-Profile";
import FSuccess from "./components/pages/Ent-Final-Success.jsx";

import { BrowserRouter, Route,Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
     <Routes>

     
      <Route path="/" element={<Welcome/>} exact />
      <Route path="/entrepreneur/partners" element={<Buddy/>} exact />
      <Route path="/entrepreneur/partners/verification" element={<BVerify/>} exact />
      <Route path="/entrepreneur/partners/success" element={<BSuccess/>} exact />
      <Route path="/entrepreneur/portfolio" element={<Investor/>} exact />
 
      <Route path="/enterpreneur/portfolio/success" element={<ISuccess/>} exact />
      <Route path="/enterpreneur/portfolio/overview" element={<IOverView/>} exact />
      <Route path="/entrepreneur/partners/setting" element={<BSetting/>} exact />
      <Route path="/buddy-account-type-change" element={<BChange/>} exact />
     
      <Route path="/enterpreneur/portfolio/details" element={<IPortfolio/>} exact />
      <Route path="/entrepreneur/release" element={<Release/>} exact />
      <Route path="/entrepreneur/partners/home" element={<BHome/>} exact />
      <Route path="/entrepreneur/partners/profile" element={<BProfile/>} exact />
     
      <Route path="/enterpreneur/final-success" element={<FSuccess/>} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;