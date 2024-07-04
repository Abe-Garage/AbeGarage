import React, { useState } from "react";
import AdminMenu from "../../components/AdminMenu/AdminMenu";
import AddCustomerForm from "../../components/AddCustomerForm/AddCustomerForm";

function Customers() {
  const [customers, setCustomers] = useState([
    {
      email: "john.doe@example.com",
      first_name: "John",
      last_name: "Doe",
      phone: "555-555-5555",
      active: true,
    },
    {
      email: "jane.doe@example.com",
      first_name: "Jane",
      last_name: "Doe",
      phone: "555-555-5556",
      active: false,
    },
  ]);

  const handleAddCustomer = (customer) => {
    setCustomers([...customers, customer]);
  };

  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <section className="contact-section">
              <div className="auto-container">
                <div className="contact-title">
                  <h2>Customer List</h2>
                </div>
                <div className="row clearfix">
                  <div className="col-lg-12">
                    <div className="inner-column">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Active</th>
                          </tr>
                        </thead>
                        <tbody>
                          {customers.map((customer, index) => (
                            <tr key={index}>
                              <td>{customer.email}</td>
                              <td>{customer.first_name}</td>
                              <td>{customer.last_name}</td>
                              <td>{customer.phone}</td>
                              <td>{customer.active ? "Yes" : "No"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row clearfix">
                  <div className="col-lg-12">
                    <div className="inner-column">
                      <AddCustomerForm onAddCustomer={handleAddCustomer} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
