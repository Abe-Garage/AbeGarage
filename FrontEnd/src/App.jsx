import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./markup/components/Header/Header";

// ` Import css from the template 
import "./assets/template/css/bootstrap.css";
import "./assets/template/css/style.css";
import "./assets/template/css/responsive.css";
import "./assets/template/css/color.css";


// ` import custom css
import "./assets/styles/custom.css"

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        
      </Routes>
    </Router>
  );

}

export default App;
