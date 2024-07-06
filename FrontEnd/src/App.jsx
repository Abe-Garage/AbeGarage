import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Import Pages
import Header from "./markup/components/Header/Header";
import AllOrdersPage from "./markup/pages/Admin/Orders/AllOrdersPage";
import Home from "./markup/pages/Home/Home";
import About from "./markup/pages/Main/About/About";
import AdminDashBoard from "./markup/pages/Admin/AdminDashBoard/AdminDashBoard";
import AddEmployeeForm from "./markup/components/Admin/AddEmployeeForm/AddEmployeeForm";

// ` Import css from the template
import "./assets/template/css/bootstrap.css";
import "./assets/template/css/style.css";
import "./assets/template/css/responsive.css";
import "./assets/template/css/color.css";
import "./assets/template/css/flaticon.css";

// ` import custom css
import "./assets/styles/custom.css";
import Footer from "./markup/components/Footer/Footer";
import CreateOrderPage from "./markup/pages/Admin/Orders/CreateOrderPage";
import Login from "./markup/pages/Main/Login/Login";
import Services from "./markup/pages/Main/Services/Services";
import NewOrder from "./markup/pages/Admin/Orders/NewOrder";
import Vehicle from "./markup/pages/Admin/Vehicle/Vehicle";
import CtaSec from "./markup/components/CtaSec/CtaSec";
import EditEmployee from "./markup/pages/Admin/Employee/EditEmployee";
import Employees from "./markup/pages/Admin/Employee/Employees";
import AddEmployee from "./markup/pages/Admin/Employee/AddEmployee";


function App() {
  return (
    <>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<CtaSec />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="order/{orderHash}" element={OrdersDetail} /> */}//TODO:-ALALEKEM(MALEK YALEBET)


       //* routes related to employee
        <Route path="admin/employees" element={<Employees/>} />
        <Route path="admin/add-employee" element={<AddEmployee />} />
        <Route path="admin/employee/edit/:id" element={<EditEmployee />} />

        //* routes related to orders
        <Route path="/admin" element={<AdminDashBoard />} />
        <Route path="/admin/orders" element={<AllOrdersPage />} />
        <Route path="/admin/order" element={<NewOrder />} />
        {/* <Route path="admin/order/{orderHash}/edit" element={EditOrder} /> */}//* ALALEKEM(MALEK YALEBET)




        //? MALEK YALEBET
        {/* <Route path="/admin/services" element={Services} />
        <Route path="/admin/add-service" element={AddServices} /> */}



        //TODO:- routes related to customers
        <Route path="/admin/customers/:id" element={<Vehicle />} />
        {/* <Route path="admin/customers" element={Customers} />
        <Route path="admin/add-customer" element={AddCustomer} />
        <Route path="admin/customer/edit/:id" element={EditCustomer} /> */}
        {/* <Route path="admin/add-customer" element={Addvehicle} /> //* conditionally render */}



      </Routes>
      <Footer />


    </>
  );
}

export default App;
