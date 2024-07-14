import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import customerService from "../../../../services/customer.service";
import classes from "./edit.module.css";
import { LiaEdit } from "react-icons/lia";
import { FiExternalLink } from "react-icons/fi";
import { useAuth } from "../../../../Context/AuthContext";

const EditCustomer = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    active: false,
  });
  const naviagte = useNavigate();
  const {employee} = useAuth()
  const token = employee?.employee_token;
  

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const data = await customerService.getCustomerById(customerId);
        // const data = await customerService.singleCustomer(customerId,token);
        setCustomer(data);
        setFormData({
          email: data.customer_email || "",
          first_name: data.customer_first_name || "",
          last_name: data.customer_last_name || "",
          phone: data.customer_phone_number || "",
          active: data.active_customer_status || false,
        });
      } catch (error) {
        console.error("Error fetching customer:", error);
      }
    };

    fetchCustomer();
  }, [,customerId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await customerService.updateCustomer(customerId, formData);
      naviagte("/admin/customers");
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  return (
    <div>
      {customer ? (
        <section className={classes.contactSection}>
          <div className="auto-container">
            <div className={classes.contactTitle}>
              <h2>
                Edit: {customer.customer_first_name}{" "}
                {customer.customer_last_name}
              </h2>
            </div>
            <div className={classes.contactDetails}>
              <div className={classes.contactName}>
                {formData.first_name} {formData.last_name}
              </div>
              <div className={classes.contactEmail}>{formData.email}</div>
            </div>
            <div className="row clearfix">
              <div className="form-column col-lg-7">
                <div className="inner-column">
                  <div className={classes.contactForm}>
                    <form onSubmit={handleSubmit}>
                      <div className="row clearfix">
                        <div className={classes.formGroup}>
                          <input
                            type="email"
                            name="email"
                            className={classes.formInput}
                            placeholder="Customer email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className={classes.formGroup}>
                          <input
                            type="text"
                            name="first_name"
                            className={classes.formInput}
                            placeholder="Customer first name"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className={classes.formGroup}>
                          <input
                            type="text"
                            name="last_name"
                            className={classes.formInput}
                            placeholder="Customer last name"
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className={classes.formGroup}>
                          <input
                            type="text"
                            name="phone"
                            className={classes.formInput}
                            placeholder="Customer phone (555-555-5555)"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className={classes.formGroup}>
                          <label className={classes.formCheckboxLabel}>
                            <input
                              type="checkbox"
                              name="active"
                              className={classes.formCheckbox}
                              checked={formData.active}
                              onChange={handleChange}
                            />
                            Active
                          </label>
                        </div>
                        <div className={classes.formGroup}>
                          <button
                            className={classes.themeBtn}
                            type="submit"
                            data-loading-text="Please wait..."
                          >
                            <span>Update Customer</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading customer details...</p>
      )}
    </div>
  );
};

export default EditCustomer;
