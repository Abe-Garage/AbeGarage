import React, { useEffect, useState } from "react";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import { useAuth } from "../../../../Context/AuthContext";
import { useParams, Link, useNavigate } from "react-router-dom";
import customerService from "../../../../services/customer.service"; // Import customerService
import vehicleService from "../../../../services/vehicle.service"; // Import vehicleService
import { BsHandIndexThumbFill } from "react-icons/bs";

const SingleOrder = () => {
  const { employee } = useAuth();
  const token = employee?.employee_token;
//   console.log("Employee:", employee);
//   console.log("Token:", token);
  const { customer_id } = useParams();
 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [customerInfo, setCustomerInfo] = useState({});
  const [vehiclePerCustomer, setVehiclePerCustomer] = useState([]);
  const navigate = useNavigate();

  const fetchSingleCustomerData = async () => {
    if (!token) {
      console.error("Token is not available");
      setError("Token is not available");
      setLoading(false);
      return;
    }
    try {
      const data = await customerService.singleCustomer(customer_id, token);
      setCustomerInfo(data.customer);
      // console.log(data)
      setLoading(false);
    } catch (error) {
      console.error("Error fetching customer data: ", error);
      setError("Error fetching customer information");
      setLoading(false);
    }
  };

  const fetchVehiclePerCustomer = async () => {
    if (!token) {
      console.error("Token is not available");
      return;
    }
    try {
      const { data } = await vehicleService.getVehicleInfoPerCustomer(
        customer_id,
        token
      );
    //   console.log(data);
      setVehiclePerCustomer(data.result);
      // Ensure this matches your data structure
    } catch (error) {
      console.error("Error fetching vehicles: ", error);
    }
  };

  useEffect(() => {
    if (token && customer_id) {
      fetchSingleCustomerData();
    } else {
      console.error("Token or customer_id is not available in useEffect");
    }
  }, [customer_id, token]);

  useEffect(() => {
    if (token && customer_id) {
      fetchVehiclePerCustomer();
    } else {
      console.error("Token or customer_id is not available in useEffect");
    }
  }, [customer_id, token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleEditCustomerClick = () => {
    const editCustomerPath = `/admin/edit-customer/${customer_id}`;
    window.location.href = editCustomerPath; // Redirect using window.location
  };
  const handleRedirectCustomer = () => {
    navigate("/admin/create-order");
  };

  return (
    <div className="create-order-container">
      <h1>Create a new order</h1>
      {customerInfo ? (
        <div className="CustomerInfo">
          <div className="CustomerInfo_two">
            <div>
              <h2>
                {customerInfo.customer_first_name}{" "}
                <span>{customerInfo.customer_last_name}</span>
              </h2>
            </div>
            <div>
              <CancelPresentationIcon 
              onClick={handleRedirectCustomer}
              className="icon" />
            </div>
          </div>

          <p>
            <span className="label">Email:</span>{" "}
            <span className="value">{customerInfo.customer_email}</span>
          </p>
          <p>
            <span className="label">Phone Number:</span>{" "}
            <span className="value">{customerInfo.customer_phone_number}</span>
          </p>
          <p>
            <span className="label">Active Customer:</span>{" "}
            <span className="value">
              {customerInfo.active_customer_status ? "Yes" : "No"}
            </span>
          </p>
          <p>
            <span className="label">Edit customer info:</span>{" "}
            <EditCalendarOutlinedIcon
              className="icon"
              onClick={handleEditCustomerClick}
            />
          </p>
        </div>
      ) : (
        <p>Loading customer information...</p>
      )}

      <div className="auto-container customer_list">
        <h2>Choose a vehicle</h2>
        <div className="table-responsive rounded-3 ">
          <table className="table table-striped table-bordered table-hover border ">
            <thead className="table-dark text-white">
              <tr>
                <th>Year</th>
                <th>Make</th>
                <th>Model</th>
                <th>Tag</th>
                <th>Serial</th>
                <th>Color</th>
                <th>Mileage</th>
                <th>Choose</th>
              </tr>
            </thead>
            <tbody>
              {vehiclePerCustomer.map((vehicle) => (
                <tr key={vehicle.customer_id}>
                  <td>{vehicle.vehicle_year}</td>
                  <td>{vehicle.vehicle_make}</td>
                  <td>{vehicle.vehicle_model}</td>
                  <td>{vehicle.vehicle_tag}</td>
                  <td>{vehicle.vehicle_serial}</td>
                  <td>{vehicle.vehicle_color}</td>
                  <td>{vehicle.vehicle_mileage}</td>
                  <td>
                    <Link
                      to={`/admin/order/${vehicle.customer_id}`}
                      className="chooseButton"
                    >
                      <BsHandIndexThumbFill />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
