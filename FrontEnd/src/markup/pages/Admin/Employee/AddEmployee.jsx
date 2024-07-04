import React from 'react';
// Import the AddEmployeeForm component 
import AddEmployeeForm from '../../../components/Admin/AddEmployeeForm/AddEmployeeForm';
// Import the AdminMenu component 
import AdminMenu from '../../../components/Admin/AdminMenu/AdminMenu';


function AddEmployee(props) {
  return (
    <>
    {/* <Header/> */}
  
      <div className="container_fluid_admin_pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <AddEmployeeForm />
          </div>
        </div>
      </div>
    
    {/* <Footer /> */}
    </>
  );
}

export default AddEmployee;