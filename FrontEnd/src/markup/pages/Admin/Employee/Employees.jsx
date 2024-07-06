import React from "react";

// import the auth hook context
import { useAuth } from "../../../../Context/AuthContext";

// import the login component
import LoginForm from "../../../components/LoginForm/LoginForm";

// import the admin menu component
import AdminMenu from "../../../components/Admin/AdminMenu/AdminMenu";

// import EmployeesList from "../../components/Admin/EmployeesList/EmployeesList";
import { Link } from "react-router-dom";

function Employees() {
  const { isLogged, isAdmin_manager, isAdmin } = useAuth();

  // Check if user is logged in
  // if (isLogged) {
  //   // Check if user is an admin or admin manager
  //   if (isAdmin_manager || isAdmin) {
      return (
        <div>
          <div className="container-fluid admin-pages">
            <div className="row">
              <div className="col-md-3 admin-left-side">
                <AdminMenu />
              </div>
              <div className="col-md-9 admin-right-side">
                {/* <EmployeesList /> */}
              </div>
            </div>
          </div>
        </div>
      );
    // } else {
    //   // User is logged in but does not have admin permissions
    //   return (
    //     <div className="not-found-container">
    //       <div className="not-found-content">
    //         <h2>
    //           You don't have the Permission to access the page you request!
    //         </h2>
    //         <Link className="back-home-link" to="/">
    //           <span>Back to Home</span>
    //         </Link>
    //       </div>
    //     </div>
    //   );
    // }
  // } else {
  //   // User is not logged in
  //   return (
  //     <div>
  //       <LoginForm />
  //     </div>
  //   );
  // }
}

export default Employees;
