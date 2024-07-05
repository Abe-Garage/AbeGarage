import React, { useState, useEffect } from "react";
import classes from "./edit.module.css";

function EditCustomer({ customer, onSave }) {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    active: false,
  });

  useEffect(() => {
    setFormData({
      email: customer.email || "",
      first_name: customer.first_name || "",
      last_name: customer.last_name || "",
      phone: customer.phone || "",
      active: customer.active || false,
    });
  }, [customer]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <section className={classes.contactSection}>
      <div className="auto-container">
        <div className={classes.contactTitle}>
          <h2>Edit Customer Details</h2>
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
  );
}

export default EditCustomer;
