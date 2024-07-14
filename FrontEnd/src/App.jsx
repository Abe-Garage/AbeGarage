import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Import Pages
import Header from "./markup/components/Header/Header";
import AllOrdersPage from "./markup/pages/Admin/Orders/AllOrdersPage";
import Home from "./markup/pages/Home/Home";
import About from "./markup/pages/Main/About/About";
import AdminDashBoard from "./markup/pages/Admin/AdminDashBoard/AdminDashBoard";
import CreateOrder from "./markup/components/Admin/Order/CreateOrder";


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

import Contact from "./markup/pages/Admin/ContactUs/Contact";

import Services from "./markup/pages/Main/Services/Services";
import NewOrder from "./markup/pages/Admin/Orders/NewOrder";
import Vehicle from "./markup/pages/Admin/Vehicle/Vehicle";
import EditEmployee from "./markup/pages/Admin/Employee/EditEmployee";
import Employees from "./markup/pages/Admin/Employee/Employees";
import AddEmployee from "./markup/pages/Admin/Employee/AddEmployee";
import CustomerForm from "./markup/pages/Admin/Customers/CustomerForm";
import EditCustomer from "./markup/components/Admin/CustomerForm/EditCustomer";
import ServiceList from "./markup/pages/Main/Services/ServiceList";

// Import the PrivateAuthRoute component 
import PrivateAuthRoute from './markup/components/Auth/PrivateAuthRoute';
import Unauthorized from "./markup/pages/Main/Unauthorized/Unauthorized";
// import Customers from "./markup/pages/Admin/Customers/Customers";
import CustomerList from "./markup/components/Admin/CustomerList/CustomerList";


import ErrorComponent from "./markup/pages/Main/404/404";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorComponent />} />
        {/* // Add the Orders Route  */}
        <Route
          path="/admin"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <AdminDashBoard />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AllOrdersPage />
            </PrivateAuthRoute>
          }
        />
        {/* // Add the Customers Route  */}
        <Route
          path="/admin/add-customer"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <CustomerForm />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/customers"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              {/* <Customers /> */}
              <CustomerList />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/add-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddEmployee />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="admin/employees"
          element={
            <PrivateAuthRoute roles={[3]}>
              <Employees />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="admin/employee/edit/:id"
          element={
            <PrivateAuthRoute roles={[3]}>
              <EditEmployee />
            </PrivateAuthRoute>
          }
        />
        <Route path="/services" element={<Services />} />
        {/* <Route path="order/{orderHash}" element={OrdersDetail} /> */}
        //TODO:-ALALEKEM(MALEK YALEBET) //* routes related to employee
        {/* <Route path="admin/employees" element={<Employees />} /> */}
        {/* <Route path="admin/add-employee" element={<AddEmployee />} /> */}
        {/* <Route path="admin/employee/edit/:id" element={<EditEmployee />} /> */}
        //* routes related to orders
        {/* <Route path="/admin" element={<AdminDashBoard />} /> */}
        {/* <Route path="/admin/orders" element={<AllOrdersPage />} /> */}
        <Route path="/admin/order" element={<NewOrder />} />
        <Route path="/admin/create-order" element={<CreateOrder />} />
        {/* <Route path="admin/order/{orderHash}/edit" element={EditOrder} /> */}
        //* ALALEKEM(MALEK YALEBET) //? MALEK YALEBET
        <Route path="/admin/services" element={<ServiceList />} />
        {/* <Route path="/admin/add-service" element={AddServices} />  */}
        {/* //* routes related to customers */}
        <Route path="/admin/customers/:id" element={<Vehicle />} />
        {/* <Route path="/admin/add-customer" element={<CustomerForm />} /> */}
        <Route
          path="/admin/edit-customer/:customerId"
          element={<EditCustomer />}
        />
        {/* <Route path="admin/customers" element={Customers} /> */}//TODO
        {/* <Route path="admin/add-customer" element={Addvehicle} /> //* conditionally render */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
