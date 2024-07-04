import React from "react";

function AddCustomerForm() {
  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Add a new Customer</h2>
        </div>

      <div className="row clearfix">
        <div className="form-column col-lg-7">
          <div className="inner-column">
            <div className="contact-form">

            <form>
              <div className="row clearfix">
                <div className="form-group col-md-12">
                  <input
                      type="email"
                      name="Customer_email"
                      placeholder="Customer email"
                      />
                </div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="Customer_first_name"
                     placeholder="Customer first name"
                      />
                  </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="Customer_last_name"
                        placeholder="Customer last name"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="Customer_phone"
                        placeholder="Customer phone (555-555-5555)"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span>Add Customer</span>
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

export default AddCustomerForm;
