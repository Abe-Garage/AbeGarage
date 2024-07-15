import React, { useRef, useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import customerService from "../../../../services/customer.service";
import { useAuth } from "../../../../Context/AuthContext";
import classes from "./edit.module.css";

const EditCustomer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { customerId } = useParams();
  const [customer_first_name, setFirstName] = useState("");
  const [customer_last_name, setLastName] = useState("");
  const [customer_phone, setPhoneNumber] = useState("");
  const [customer_email, setEmail] = useState("");
  const [active_customer_status, setActiveCustomerStatus] = useState(false);
  const [customer1, setCustomer1] = useState({});
  const [serverMsg, setServerMsg] = useState("");
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState("");

  // Spinner handler state
  const [spin, setSpinner] = useState(false);

  // Refs
  const firstNameDom = useRef();
  const lastNameDom = useRef();
  const phoneNumberDom = useRef();
  const emailDom = useRef();
  const checkboxDOM = useRef();

  // Create a variable to hold the user's token
  let loggedInEmployeeToken = "";
  const { employee } = useAuth();
  if (employee && employee.employee_token) {
    loggedInEmployeeToken = employee.employee_token;
  }

  // Value trackers
  const firstNameTracker = () => setFirstName(firstNameDom.current.value);
  const lastNameTracker = () => setLastName(lastNameDom.current.value);
  const phoneNumberTracker = () => setPhoneNumber(phoneNumberDom.current.value);
  const emailTracker = () => setEmail(emailDom.current.value);
  const activeCustomerStatusTracker = () =>
    setActiveCustomerStatus(checkboxDOM.current.checked);

  // Fetch customer data using useEffect
  useEffect(() => {
    const customerData = location.state?.customer;
    if (customerData) {
      setFirstName(customerData.customer_first_name);
      setLastName(customerData.customer_last_name);
      setPhoneNumber(customerData.customer_phone);
      setEmail(customerData.customer_email);
      setCustomer1(customerData);
      checkboxDOM.current.checked = customerData.active_customer_status;
      setActiveCustomerStatus(customerData.active_customer_status);
    } else {
      const fetchData = async () => {
        try {
          const data = await customerService.singleCustomer(
            customerId,
            loggedInEmployeeToken
          );
          if (data.status !== 200) {
            setApiError(true);
            if (data.status === 403) {
              setApiErrorMessage("Please login again");
            } else if (data.status === 401) {
              setApiErrorMessage("You are not authorized to view this page");
            } else {
              setApiErrorMessage("Please try again later");
            }
          } else {
            const customerData = data.data.singleCustomer[0];
            setFirstName(customerData.customer_first_name);
            setLastName(customerData.customer_last_name);
            setPhoneNumber(customerData.customer_phone);
            setEmail(customerData.customer_email);
            setCustomer1(customerData);
            checkboxDOM.current.checked = customerData.active_customer_status;
            setActiveCustomerStatus(customerData.active_customer_status);
          }
        } catch (error) {
          setApiError(true);
          setApiErrorMessage("An error occurred while fetching data.");
        }
      };
      fetchData();
    }
  }, [customerId, location.state, loggedInEmployeeToken]);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      customer_id: customerId,
      customer_first_name,
      customer_last_name,
      customer_phone,
      customer_email,
      active_customer_status: active_customer_status ? 1 : 0, // 1 for true, 0 for false
    };

    try {
      setSpinner(true);
      const data = await customerService.updateCustomer(
        customerId,
        formData,
        loggedInEmployeeToken
      );

      if (data.status === 200) {
        setServerMsg("Redirecting To Customers page...");
        setTimeout(() => {
          setSpinner(false);
          setServerMsg("");
          navigate("/admin/customers");
        }, 500);
      }
    } catch (error) {
      setServerMsg("Failed to update customer. Please try again.");
      setSpinner(false);
    }
  }

  return (
    <>
      <section className={classes.contactSection}>
        <div className="auto-container">
          <div className={classes.contactTitle}>
            <h2>Edit: {customer1.customer_email || ""}</h2>
          </div>
          <div className="row clearfix">
            <div className="form-column col-lg-7">
              <div className="inner-column">
                <div className={classes.contactForm}>
                  <form onSubmit={handleSubmit}>
                    <div className="row clearfix">
                      <div className={`${classes.formGroup} col-md-12`}>
                        <input
                          type="text"
                          name="customer_first_name"
                          placeholder="Customer first name"
                          ref={firstNameDom}
                          value={customer_first_name}
                          onChange={firstNameTracker}
                          className={classes.formInput}
                          required
                        />
                      </div>
                      <div className={`${classes.formGroup} col-md-12`}>
                        <input
                          type="text"
                          name="customer_last_name"
                          placeholder="Customer last name"
                          required
                          ref={lastNameDom}
                          value={customer_last_name}
                          onChange={lastNameTracker}
                          className={classes.formInput}
                        />
                      </div>
                      <div className={`${classes.formGroup} col-md-12`}>
                        <input
                          type="text"
                          name="customer_phone"
                          placeholder="Customer phone (555-555-5555)"
                          ref={phoneNumberDom}
                          required
                          value={customer_phone}
                          onChange={phoneNumberTracker}
                          className={classes.formInput}
                        />
                      </div>
                      <div className={`${classes.formGroup} col-md-12`}>
                        <input
                          type="email"
                          name="customer_email"
                          placeholder="Customer email"
                          ref={emailDom}
                          required
                          value={customer_email}
                          onChange={emailTracker}
                          className={classes.formInput}
                        />
                      </div>
                      <div
                        className={`${classes.formGroup} col-md-12 form-contro`}
                      >
                        <label
                          className={classes.formCheckboxLabel}
                          htmlFor="completed"
                        >
                          Active Customer
                        </label>
                        <input
                          value={active_customer_status}
                          onChange={activeCustomerStatusTracker}
                          ref={checkboxDOM}
                          type="checkbox"
                          name="completed"
                          className={classes.formCheckbox}
                        />
                      </div>
                      <div className={`${classes.formGroup} col-md-12`}>
                        <button
                          className={classes.themeBtn}
                          type="submit"
                          data-loading-text="Please wait..."
                        >
                          <span>
                            {spin ? (
                              <BeatLoader color="white" size={8} />
                            ) : (
                              "Update Customer"
                            )}
                          </span>
                        </button>
                        {serverMsg && (
                          <div
                            className="validation-error"
                            style={{
                              color: "green",
                              fontSize: "100%",
                              fontWeight: "600",
                              padding: "25px",
                            }}
                            role="alert"
                          >
                            {serverMsg}
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                  {apiError && (
                    <div className="validation-error" role="alert">
                      {apiErrorMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditCustomer;
