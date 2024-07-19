import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Import Pages
import Header from "./markup/components/Header/Header";
import AllOrdersPage from "./markup/pages/Admin/Orders/AllOrdersPage";
import Home from "./markup/pages/Home/Home";
import About from "./markup/pages/Main/About/About";
import AdminDashBoard from "./markup/pages/Admin/AdminDashBoard/AdminDashBoard";


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
import EmployeeProfile from "./markup/pages/Admin/Employee/EmployeeProfile";

import CustomerForm from "./markup/pages/Admin/Customers/CustomerForm";
import EditCustomer from "./markup/pages/Admin/Customers/EditCustomer";


// Import the PrivateAuthRoute component 
import PrivateAuthRoute from './markup/components/Auth/PrivateAuthRoute';
import Unauthorized from "./markup/pages/Main/Unauthorized/Unauthorized";
// import Customers from "./markup/pages/Admin/Customers/Customers";

import ErrorComponent from "./markup/pages/Main/404/404";

import Customers from "./markup/pages/Admin/Customers/Customers";
import EditVehicle from "./markup/pages/Admin/Vehicle/EditVehicle";
import SingleOrderPage from "./markup/pages/Admin/Orders/SingleOrderPage";
import ServicePage from "./markup/pages/Admin/Service/ServicePage";
import OrderStatus from "./markup/pages/Main/OrderStatus/OrderStatus";


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
                   <Customers />
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
        {/* //page for employee profile  */}
        <Route path="/admin/employee-profile/:id" element={<EmployeeProfile />} />


        <Route path="/services" element={<Services />} />
        {/* <Route path="order/{orderHash}" element={OrdersDetail} /> */}
       
   
        //* routes related to orders
       
        <Route path="/admin/order/:ID/:vID" element={<NewOrder />} />
        <Route path="/admin/order-single/:customer_id" element={<SingleOrderPage />} />
        <Route path="/admin/create-order" element={<CreateOrderPage />} />


        {/* <Route path="admin/order/{orderHash}/edit" element={EditOrder} /> */}
        <Route path="/order-status/:order_hash" element={<OrderStatus />} />
        //* ALALEKEM(MALEK YALEBET) //? MALEK YALEBET
        <Route path="/admin/services" element={<ServicePage />} />
        {/* <Route path="/admin/add-service" element={AddServices} />  */}
        {/* //* routes related to customers */}
        <Route path="/admin/customers/:id" element={<Vehicle />} />
        <Route path="/admin/edit-vehicle/:id" element={<EditVehicle />} />
        {/* <Route path="/admin/add-customer" element={<CustomerForm />} /> */}
        <Route
          path="/admin/edit-customer/:customerId"
          element={<EditCustomer />}
        />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
