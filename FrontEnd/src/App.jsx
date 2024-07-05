import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Import Pages
import Header from "./markup/components/Header/Header";
import AllOrdersPage from "./markup/pages/Admin/Orders/AllOrdersPage";
import Home from './markup/pages/Home/Home';
import About from './markup/pages/Main/About/About'
import AdminDashBoard from "./markup/pages/Admin/AdminDashBoard/AdminDashBoard";

// ` Import css from the template 
import "./assets/template/css/bootstrap.css";
import "./assets/template/css/style.css";
import "./assets/template/css/responsive.css";
import "./assets/template/css/color.css";
import "./assets/template/css/flaticon.css"



// ` import custom css
import "./assets/styles/custom.css"
import Footer from "./markup/components/Footer/Footer";
import CreateOrderPage from "./markup/pages/Admin/Orders/CreateOrderPage";
import Login from "./markup/pages/Main/Login/Login";
import Contact from "./markup/pages/Admin/ContactUs/Contact";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/all-orders" element={<AllOrdersPage />} />
        <Route path="/aboutus" element={<About />} />

<Route path="/contactus" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashBoard />} />
        <Route path="/admin/all-orders" element={<AllOrdersPage />} />
      </Routes>
      <Footer />
    </>
  );

}

export default App;
