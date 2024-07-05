import React from 'react'
import LoginForm from "../../../components/LoginForm/LoginForm"
import AdminMenu from '../../../components/Admin/AdminMenu/AdminMenu';


function Login() {
  return (
    <div className="row">
      <div className="col-md-3 admin-left-side">
        <AdminMenu />
      </div>
      <div className="col-md-9">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login