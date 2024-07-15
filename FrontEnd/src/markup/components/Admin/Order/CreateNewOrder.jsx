

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import customerService from "../../../../services/customer.service";
import vehicleService from '../../../../services/vehicle.service';
import serviceService from '../../../../services/service.service';
import { useAuth } from '../../../../Context/AuthContext';
// import CustomerInfo from "./CustomerInfo";
import "./CreateNewOrder.css";
 import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import "./CreateNewOrder.css";


function CreateNewOrder() {
 
  const { employee } = useAuth();
  const token = employee?.employee_token;
  console.log("token:" , token)

  // const { ID } = useParams();
  const ID = '1'

  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceDescription, setServiceDescription] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [customerInfo, setCustomerInfo] = useState({});
  const [vehicleInfo, setVehicleInfo] = useState(null);


  const getServiceList = async () => {
    try {
      const data = await serviceService.getServiceList();
      console.log(data.data.data)
      setServices(data.data.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    getServiceList();
  }, []);




  const fetchSingleCustomerData = async () => {
    if (!token) {
      console.error('Token is not available');
      return;
    }

    try {
      const data = await customerService.singleCustomer(ID, token);
      setCustomerInfo(data.customer);
    } catch (error) {
      console.error('Error ', error);
    }
  };

  useEffect(() => {
    fetchSingleCustomerData();
  }, [ID, token]);


  const fetchVehicleInfo = async () => {
    try {
      const response = await vehicleService.getVehicleInfo(ID);
      console.log(response.data.result)
      setVehicleInfo(response.data.result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchVehicleInfo();
  }, [ID]);



  const handleSelectionChange = (service) => {
    setSelectedServices((prevSelectedServices) => {
      if (prevSelectedServices.includes(service.service_id)) {
        return prevSelectedServices.filter((id) => id !== service.service_id);
      } else {
        return [...prevSelectedServices, service.service_id];
      }
    });
  };

  const handleServiceDescriptionChange = (event) => {
    setServiceDescription(event.target.value);
  };

  const handleServicePriceChange = (event) => {
    setServicePrice(event.target.value);
  };


  const handleSubmit = () => {
    if (!customerInfo) {
      console.error('Customer info not loaded');
      return;
    }

    const requestBody = {
      customer_id: customerInfo.customer_id, // Use the fetched customer ID
      service_ids: selectedServices,
      custom_service: {
        description: serviceDescription,
        price: servicePrice,
      },
      vehicle_info: vehicleInfo, // Include vehicle info if needed
    };



    fetch(`http://localhost:3000/api/order${customer_id}`, {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Order submitted:', data);
        alert("successfully submmiting the order")
      })
      .catch((error) => console.error('Error submitting order:', error));
  };


  const handleServiceSelection = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleEditCustomerClick = () => {
    // Replace with your actual path to the edit customer component
    const editCustomerPath = "/edit-customer"; // Example path
    window.location.href = editCustomerPath; // Redirect using window.location
  };

  const handleEditVehicleClick = () => {
    // Replace with your actual path to the edit vehicle component
    const editVehiclePath = "/edit-vehicle"; // Example path
    window.location.href = editVehiclePath; // Redirect using window.location
  };



  return (
    <div className="create-order-container">
      <h1>Create a new order</h1>
      {customerInfo ? (
      <div className="CustomerInfo">
        <div className="CustomerInfo_two" >
          <div>
          <h2> 
          {customerInfo.customer_first_name } <span>{customerInfo.customer_last_name}</span></h2>
          </div>
          <div>
          <CancelPresentationIcon className="icon" />
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
          <span className="value">{customerInfo.active_customer_status ? "Yes" : "No"}</span>
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
            <CancelPresentationIcon className="icon" />
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
                onChange={() => handleSelectionChange(service)}
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
            placeholder="service description"
            value={serviceDescription}
            style={{paddingLeft:'15px'}}
            onChange={handleServiceDescriptionChange}
          />
        </div>
        <div className="price">
          <input
            type="text"
            style={{padding:'10px 15px'}}
            placeholder="price"
            value={servicePrice}
            onChange={handleServicePriceChange}
          />
        </div>
        {/* </div> */}
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
