import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./markup/components/Header/Header";
import AllOrdersPage from "./markup/pages/Admin/Orders/AllOrdersPage";
import Home from './markup/pages/Home/Home';
import About from './markup/pages/Main/About/About'

// ` Import css from the template 
import "./assets/template/css/bootstrap.css";
import "./assets/template/css/style.css";
import "./assets/template/css/responsive.css";
import "./assets/template/css/color.css";



// ` import custom css
import "./assets/styles/custom.css"
import Footer from "./markup/components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/admin/all-orders" element={<AllOrdersPage />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );

}

export default App;
