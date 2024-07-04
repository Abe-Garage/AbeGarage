import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Import Pages
import Header from "./markup/components/Header/Header";
import AllOrdersPage from "./markup/pages/Admin/Orders/AllOrdersPage";
import Home from './markup/pages/Home/Home';
import About from './markup/pages/Main/About/About';
import AdminDashBoard from "./markup/pages/Admin/AdminDashBoard/AdminDashBoard";
import AddEmployee from "./markup/pages/Admin/Employee/AddEmployee";


// ` Import css from the template 
import "./assets/template/css/bootstrap.css";
import "./assets/template/css/style.css";
import "./assets/template/css/responsive.css";
import "./assets/template/css/color.css";



// ` import custom css
import "./assets/styles/custom.css"
import Footer from "./markup/components/Footer/Footer";
import CreateOrderPage from "./markup/pages/Admin/Orders/CreateOrderPage";


function App() {
  return (
    <>
      <Header />
      <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/admin/all-orders" element={<AllOrdersPage />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/admin" element={<AdminDashBoard />} />
            <Route path="/admin/all-orders" element={<AllOrdersPage />} />
            <Route path="/admin/add-employee" element={<AddEmployee />} />
              
      </Routes>
      <Footer/>
    </>
  );

}

export default App;
