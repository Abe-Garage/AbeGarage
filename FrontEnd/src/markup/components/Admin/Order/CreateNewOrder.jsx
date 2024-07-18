import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import customerService from "../../../../services/customer.service";
import vehicleService from "../../../../services/vehicle.service";
import serviceService from "../../../../services/service.service";
import { useAuth } from "../../../../Context/AuthContext";
import "./CreateNewOrder.css";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import "./CreateNewOrder.css";
// import axios from "../../../../utils/axiosConfig";

const api_url = import.meta.env.VITE_API_URL;
function CreateNewOrder() {
  const { employee } = useAuth();
  const token = employee?.employee_token;
  const employee_id = employee?.employee_id;
  // console.log(employee_id)
  console.log("token:", token);

  // const { ID } = useParams();
  const ID = "1";

  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceDescription, setServiceDescription] = useState("");
  const [orderDescription, setOrderDescription] = useState("");
  const [orderTotalPrice, setOrderTotalPrice] = useState("");
  const [estimatedCompletionDate, setEstimatedCompletionDate] = useState("");
  const [customerInfo, setCustomerInfo] = useState({});
  const [vehicleInfo, setVehicleInfo] = useState(null);
  const navigate = useNavigate();

  const getServiceList = async () => {
    try {
      const data = await serviceService.getServiceList();
      console.log(data.data.data);
      setServices(data.data.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    getServiceList();
  }, []);

  const fetchSingleCustomerData = async () => {
    if (!token) {
      console.error("Token is not available");
      return;
    }

    try {
      const data = await customerService.singleCustomer(ID, token);
      setCustomerInfo(data.customer);
    } catch (error) {
      console.error("Error ", error);
    }
  };

  useEffect(() => {
    fetchSingleCustomerData();
  }, [ID, token]);

  const fetchVehicleInfo = async () => {
    try {
      const response = await vehicleService.getVehicleInfo(ID);
      console.log(response.data.result);
      setVehicleInfo(response.data.result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchVehicleInfo();
  }, [ID]);

  const handleServiceSelection = (service_id) => {
    setSelectedServices((prevServices) => {
      if (prevServices.includes(service_id)) {
        // If service is already selected, remove it
        return prevServices.filter((id) => id !== service_id);
      } else {
        // If service is not selected, add it
        return [...prevServices, service_id];
      }
    });
    console.log(service_id);
  };
  // console.log(service.service_id)

  const handleOrderTotalPriceChange = (e) => {
    setOrderTotalPrice(e.target.value);
  };

  const handleEstimatedCompletionDateChange = (event) => {
    setEstimatedCompletionDate(event.target.value);
  };

  const calculateOrderDescription = () => {
    return selectedServices
      .map((service) => service.service_description)
      .join(", ");
  };

  // Handle order description change
  const handleOrderDescriptionChange = (e) => {
    setOrderDescription(e.target.value);
  };

  useEffect(() => {
    setOrderDescription(calculateOrderDescription());
  }, [selectedServices]);

  const handleAdditionalRequest = (e) => {
    setServiceDescription(e.target.value);
  };

  const handleSubmit = async () => {
    if (!customerInfo) {
      console.error("Customer info not loaded");
      return;
    }
    const requestBody = {
      employee_id: employee.employee_id, //
      customer_id: customerInfo.customer_id,
      vehicle_id: vehicleInfo[0].vehicle_id,
      active_order: 2, // Always active order
      order_description: orderDescription,
      estimated_completion_date: estimatedCompletionDate,
      completion_date: null,
      order_completed: 0,
      order_status: 1,
      order_total_price: orderTotalPrice,
      additional_request: serviceDescription,
      order_services: selectedServices.map((serviceId) => ({
        service_id: serviceId,
        service_completed: false,
      })),
    };
    console.log(requestBody);

    try {
      const response = await fetch(`${api_url}/api/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Order submitted:", data);
      alert("Order successfully submitted");
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  const handleEditCustomerClick = () => {
    const editCustomerPath = `/admin/edit-customer/${ID}`;
    window.location.href = editCustomerPath;
  };

  const handleEditVehicleClick = () => {
    const editVehiclePath = "/edit-vehicle";
    window.location.href = editVehiclePath;
  };

  const handleRedirectVehicle = () => {
    navigate("/");
  };

  const handleRedirectCustomer = () => {
    navigate("/");
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
                className="icon"
              />
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

      {vehicleInfo ? (
        <div className="VehicleInfo">
          <h2>
            {vehicleInfo[0].vehicle_make}
            <CancelPresentationIcon
              onClick={handleRedirectVehicle}
              className="icon"
            />
          </h2>
          <p>
            <span className="label">Vehicle color:</span>{" "}
            <span className="value">{vehicleInfo[0].vehicle_color}</span>
          </p>
          <p>
            <span className="label">Vehicle tag:</span>{" "}
            <span className="value">{vehicleInfo[0].vehicle_tag}</span>
          </p>
          <p>
            <span className="label">Vehicle Year:</span>{" "}
            <span className="value">{vehicleInfo[0].vehicle_year}</span>
          </p>
          <p>
            <span className="label">Vehicle Mileage:</span>{" "}
            <span className="value">{vehicleInfo[0].vehicle_mileage}</span>
          </p>
          <p>
            <span className="label">Vehicle serial:</span>{" "}
            <span className="value">{vehicleInfo[0].vehicle_serial}</span>
          </p>
          <p>
            <span className="label">Edit Vehicle info:</span>{" "}
            <span className="value">
              <EditCalendarOutlinedIcon
                className="icon"
                onClick={handleEditVehicleClick}
              />
            </span>
          </p>
        </div>
      ) : (
        <p>Loading customer information...</p>
      )}

      <div className="services-list">
        <h2>Choose service</h2>
        {services.length > 0 ? (
          services.map((service) => (
            <div key={service.service_id} className="service-item">
              <div className="service-details">
                <h3>{service?.service_name}</h3>
                <p>{service?.service_description}</p>

                <input
                  type="checkbox"
                  checked={selectedServices.includes(service.service_id)}
                  onChange={() => handleServiceSelection(service.service_id)}
                />
              </div>
            </div>
          ))
        ) : (
          <p>No services available</p>
        )}
      </div>

      <div className="additional-requests">
        <h2>Additional requests</h2>

        <div className="serviceRequest">
          <input
            type="text"
            placeholder="Service Description"
            value={serviceDescription}
            style={{ paddingLeft: "15px" }}
            onChange={handleAdditionalRequest}
          />
        </div>
        <div className="price">
          <input
            type="text"
            style={{ padding: "10px 15px" }}
            placeholder="Price"
            value={orderTotalPrice}
            onChange={handleOrderTotalPriceChange}
          />
        </div>

        <div>
          <div className="price">
            <input
              type="text"
              style={{ padding: "10px 15px" }}
              placeholder="Order Description"
              value={orderDescription}
              onChange={handleOrderDescriptionChange}
            />
          </div>
        </div>
        <div>
          <label>
            Expected Completion Date:
            <input
              type="datetime-local"
              value={estimatedCompletionDate}
              onChange={handleEstimatedCompletionDateChange}
            />
          </label>
        </div>

        <div className="submit">
          <button className="submit-order" onClick={handleSubmit}>
            SUBMIT ORDER
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateNewOrder;
