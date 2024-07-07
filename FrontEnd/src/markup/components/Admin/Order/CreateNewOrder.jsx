// import React, { useState, useEffect } from "react";
// import "./CreateNewOrder.css";
// import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
// import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
// function CreateNewOrder() {
//   const [customerInfo, setCustomerInfo] = useState({
//     CustomerName: "Jasmine Albeshir",
//     email: "jasmine@gmail.com",
//     phone: "123456789",
//     ActiveCustomer: "yes",
//   });
//   const [vehicleInfo, setVehicleInfo] = useState({
//     vehicleName: "BMW X7",
//     vehicleColor: "Gold",
//     vehicleTag: "0101AD",
//     vehicleYear: "2020",
//     vehicleModel: "BMW X7",
//     vehicleMileage: "12000",
//     vehicleSerial: "44844d4844ffg",
//   });

//   const [selectedServices, setSelectedServices] = useState([]);
//   const [serviceDescription, setServiceDescription] = useState("");
//   const [servicePrice, setServicePrice] = useState("");

//   useEffect(() => {
//     const fetchCustomerInfo = async () => {
//       try {
//         const response = await fetch("https://your-api-endpoint/customer-info"); // Replace with your API endpoint
//         const data = await response.json();
//         setCustomerInfo(data); // Update state with real data
//       } catch (error) {
//         console.error("Error fetching customer info:", error);
//         // Handle errors appropriately (e.g., display error message to user)
//       }
//     };

//     fetchCustomerInfo(); // Call the fetch function on component mount
//   }, []);
//   useEffect(() => {
//     const fetchVehicleInfo = async () => {
//       try {
//         const response = await fetch("https://your-api-endpoint/vehicle-info"); // Replace with your API endpoint
//         const data = await response.json();
//         setVehicleInfo(data); // Update state with real data
//       } catch (error) {
//         console.error("Error fetching vehicle info:", error);
//         // Handle errors appropriately (e.g., display error message to user)
//       }
//     };

//     fetchVehicleInfo(); // Call the fetch function on component mount
//   }, []);

//   const handleServiceSelection = (service) => {
//     if (selectedServices.includes(service)) {
//       setSelectedServices(selectedServices.filter((s) => s !== service));
//     } else {
//       setSelectedServices([...selectedServices, service]);
//     }
//   };
//   const handleServiceDescriptionChange = (event) => {
//     setServiceDescription(event.target.value);
//   };

//   const handleServicePriceChange = (event) => {
//     setServicePrice(event.target.value);
//   };
//   const handleEditCustomerClick = () => {
//     // Replace with your actual path to the edit customer component
//     const editCustomerPath = "/edit-customer"; // Example path
//     window.location.href = editCustomerPath; // Redirect using window.location
//   };

//   const handleEditVehicleClick = () => {
//     // Replace with your actual path to the edit vehicle component
//     const editVehiclePath = "/edit-vehicle"; // Example path
//     window.location.href = editVehiclePath; // Redirect using window.location
//   };

//   const handleSubmit = () => {
//     // Handle form submission logic here
//     console.log("Customer Info:", customerInfo);
//     console.log("Vehicle Info:", vehicleInfo);
//     console.log("Selected Services:", selectedServices);
//     console.log("Service description:", serviceDescription);
//     console.log("Service price:", servicePrice);

//     // Here's an example of how to clear the form after submit (optional)
//     setSelectedServices([]);
//     setServiceDescription("");
//     setServicePrice("");
//   };

//   return (
//     <div className="create-order-container">
//       <h1>Create a new order</h1>

//       <div className="CustomerInfo">
//         <h2>
//           {customerInfo.CustomerName}
//           <CancelPresentationIcon className="icon" />
//         </h2>

//         <p>
//           <span className="label">Email:</span>{" "}
//           <span className="value">{customerInfo.email}</span>
//         </p>
//         <p>
//           <span className="label">Phone Number:</span>{" "}
//           <span className="value">{customerInfo.phone}</span>
//         </p>
//         <p>
//           <span className="label">Active Customer:</span>{" "}
//           <span className="value">{customerInfo.ActiveCustomer}</span>
//         </p>
//         <p>
//           <span className="label">Edit customer info:</span>{" "}
//           <EditCalendarOutlinedIcon
//             className="icon"
//             onClick={handleEditCustomerClick}
//           />
//         </p>
//       </div>

//       <div className="VehicleInfo">
//         <h2>
//           {vehicleInfo.vehicleName} {/* <span className="cancelicon"> */}
//           {/* <CancelPresentationIcon className="icon" /> */}
//           {/* </span> */}
//         </h2>

//         <p>
//           <span className="label">Vehicle color:</span>{" "}
//           <span className="value">{vehicleInfo.vehicleModel}</span>
//         </p>
//         <p>
//           <span className="label">Vehicle tag:</span>{" "}
//           <span className="value">{vehicleInfo.vehicleColor}</span>
//         </p>
//         <p>
//           <span className="label">Vehicle Year:</span>{" "}
//           <span className="value">{vehicleInfo.vehicleYear}</span>
//         </p>
//         <p>
//           <span className="label">Vehicle Mileage:</span>{" "}
//           <span className="value">{vehicleInfo.vehicleMileage}</span>
//         </p>
//         <p>
//           <span className="label">Vehicle serial:</span>{" "}
//           <span className="value">{vehicleInfo.vehicleSerial}</span>
//         </p>
//         <p>
//           <span className="label">Edit Vehicle info:</span>{" "}
//           {/* <Link to={editVehiclePath}> */}
//           <span className="value">
//             {/* <EditCalendarOutlinedIcon
//               className="icon"
//               onClick={handleEditVehicleClick}
//             /> */}
//           </span>
//           {/* </Link> */}
//         </p>
//       </div>

//       <div className="servicesSection">
//         <h2>Choose service</h2>
//         <div className="service-item">
//           <div className="col-10">
//             <label>Oil change</label>
//             <p>
//               Every 5,000 kilometres or so, you need to change the oil in your
//               car to keep your engine in the best possible shape.
//             </p>
//           </div>
//           <div className="col-2">
//             <input
//               type="checkbox"
//               checked={selectedServices.includes("Oil change")}
//               onChange={() => handleServiceSelection("Oil change")}
//             />
//           </div>
//         </div>
//         <div className="service-item">
//           <div className="col-10">
//             <label>Spark Plug replacement</label>
//             <p>
//               Spark plugs are a small part that can cause huge problems. Their
//               job is to ignite the fuel in your engine, helping it start.
//             </p>
//           </div>
//           <div className="col-2">
//             <input
//               type="checkbox"
//               checked={selectedServices.includes("Spark Plug replacement")}
//               onChange={() => handleServiceSelection("Spark Plug replacement")}
//             />
//           </div>
//         </div>
//         <div className="service-item">
//           <div className="col-10">
//             <label>Fuel Cap tightening</label>
//             <p>
//               Loose fuel caps are actually a main reason why the "check engine"
//               light in a car comes on.
//             </p>
//           </div>
//           <div className="col-2">
//             <input
//               type="checkbox"
//               checked={selectedServices.includes("fuel-cap-tightening")}
//               onChange={() => handleServiceSelection("fuel-cap-tightening")}
//             />
//           </div>
//         </div>
//         <div className="service-item">
//           <div className="col-10">
//             <label>Oxygen Sensor replacement</label>
//             <p>
//               Oxygen sensors measure the concentration of oxygen in the exhaust
//               gases in order to optimize engine performance and emissions.
//             </p>
//           </div>
//           <div className="col-2">
//             <input
//               type="checkbox"
//               checked={selectedServices.includes("oxygen-sensor-replacement")}
//               onChange={() =>
//                 handleServiceSelection("oxygen-sensor-replacement")
//               }
//             />
//           </div>
//         </div>
//         <div className="service-item">
//           <div className="col-10">
//             <label>Brake work</label>
//             <p>
//               We all know why brake work is important, especially because one
//               quarter of all Canadian car accidents are caused by a failure to
//               stop.
//             </p>
//           </div>
//           <div className="col-2">
//             <input
//               type="checkbox"
//               checked={selectedServices.includes("brake-work")}
//               onChange={() => handleServiceSelection("brake-work")}
//             />
//           </div>
//         </div>
//         <div className="service-item">
//           <div className="col-10">
//             <label>Tire repairs and changes</label>
//             <p>
//               Without good, inflated tires, you loose speed, control, and fuel
//               efficiency, hence the need to get them patched if there's a leak
//               (for example, if you run over a nail), or replaced if they're too
//               worn.
//             </p>
//           </div>
//           <div className="col-2">
//             <input
//               type="checkbox"
//               checked={selectedServices.includes("tire-repairs-and-changes")}
//               onChange={() =>
//                 handleServiceSelection("tire-repairs-and-changes")
//               }
//             />
//           </div>
//         </div>
//         <div className="service-item">
//           <div className="col-10">
//             <label>The Ignition System</label>
//             <p>
//               A car's ignition system includes its battery, starter, and the
//               ignition itself.
//             </p>
//           </div>
//           <div className="col-2">
//             <input
//               type="checkbox"
//               checked={selectedServices.includes("the-ignition-system")}
//               onChange={() => handleServiceSelection("the-ignition-system")}
//             />
//           </div>
//         </div>
//         <div className="service-item">
//           <div className="col-10">
//             <label>Programing the camera software</label>
//             <p>
//               Without good, inflated tires, you loose speed, control, and fuel
//               efficiency, hence the need to get them patched if there's a leak
//               (for example, if you run over a nail), or replaced if they're too
//               worn.
//             </p>
//           </div>
//           <div className="col-2">
//             <input
//               type="checkbox"
//               checked={selectedServices.includes(
//                 "programing-the-camera-software"
//               )}
//               onChange={() =>
//                 handleServiceSelection("programing-the-camera-software")
//               }
//             />
//           </div>
//         </div>
//       </div>
//       <div className="additional-requests">
//         <h2>Additional requests</h2>

//         <div className="serviceRequest">
//           <input
//             type="text"
//             placeholder="service description"
//             value={serviceDescription}
//             onChange={handleServiceDescriptionChange}
//           />
//         </div>
//         <div className="price">
//           <input
//             type="text"
//             placeholder="price"
//             value={servicePrice}
//             onChange={handleServicePriceChange}
//           />
//         </div>
//         {/* </div> */}
//         <div className="submit">
//           <button className="submit-order" onClick={handleSubmit}>
//             SUBMIT ORDER
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreateNewOrder;

import React, { useState, useEffect } from "react";
// import CustomerInfo from "./CustomerInfo";
import "./CreateNewOrder.css";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
function CreateNewOrder() {
  const [customerInfo, setCustomerInfo] = useState({
    CustomerName: "Jasmine Albeshir",
    email: "jasmine@gmail.com",
    phone: "123456789",
    ActiveCustomer: "yes",
  });
  const [vehicleInfo, setVehicleInfo] = useState({
    vehicleName: "BMW X7",
    vehicleColor: "Gold",
    vehicleTag: "0101AD",
    vehicleYear: "2020",
    vehicleModel: "BMW X7",
    vehicleMileage: "12000",
    vehicleSerial: "44844d4844ffg",
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceDescription, setServiceDescription] = useState("");
  const [servicePrice, setServicePrice] = useState("");

  useEffect(() => {
    const fetchCustomerInfo = async () => {
      try {
        const response = await fetch("https://your-api-endpoint/customer-info"); // Replace with your API endpoint
        const data = await response.json();
        setCustomerInfo(data); // Update state with real data
      } catch (error) {
        console.error("Error fetching customer info:", error);
        // Handle errors appropriately (e.g., display error message to user)
      }
    };

    fetchCustomerInfo(); // Call the fetch function on component mount
  }, []);
  useEffect(() => {
    const fetchVehicleInfo = async () => {
      try {
        const response = await fetch("https://your-api-endpoint/vehicle-info"); // Replace with your API endpoint
        const data = await response.json();
        setVehicleInfo(data); // Update state with real data
      } catch (error) {
        console.error("Error fetching vehicle info:", error);
        // Handle errors appropriately (e.g., display error message to user)
      }
    };

    fetchVehicleInfo(); // Call the fetch function on component mount
  }, []);

  const handleServiceSelection = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };
  const handleServiceDescriptionChange = (event) => {
    setServiceDescription(event.target.value);
  };

  const handleServicePriceChange = (event) => {
    setServicePrice(event.target.value);
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

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Customer Info:", customerInfo);
    console.log("Vehicle Info:", vehicleInfo);
    console.log("Selected Services:", selectedServices);
    console.log("Service description:", serviceDescription);
    console.log("Service price:", servicePrice);

    // Here's an example of how to clear the form after submit (optional)
    setSelectedServices([]);
    setServiceDescription("");
    setServicePrice("");
  };

  return (
    <div className="create-order-container">
      <h1>Create a new order</h1>

      <div className="CustomerInfo">
        <h2>
          {customerInfo.CustomerName}
          <CancelPresentationIcon className="icon" />
        </h2>

        <p>
          <span className="label">Email:</span>{" "}
          <span className="value">{customerInfo.email}</span>
        </p>
        <p>
          <span className="label">Phone Number:</span>{" "}
          <span className="value">{customerInfo.phone}</span>
        </p>
        <p>
          <span className="label">Active Customer:</span>{" "}
          <span className="value">{customerInfo.ActiveCustomer}</span>
        </p>
        <p>
          <span className="label">Edit customer info:</span>{" "}
          <EditCalendarOutlinedIcon
            className="icon"
            onClick={handleEditCustomerClick}
          />
        </p>
      </div>

      <div className="VehicleInfo">
        <h2>
          {vehicleInfo.vehicleName}
          <CancelPresentationIcon className="icon" />
        </h2>

        <p>
          <span className="label">Vehicle color:</span>{" "}
          <span className="value">{vehicleInfo.vehicleModel}</span>
        </p>
        <p>
          <span className="label">Vehicle tag:</span>{" "}
          <span className="value">{vehicleInfo.vehicleColor}</span>
        </p>
        <p>
          <span className="label">Vehicle Year:</span>{" "}
          <span className="value">{vehicleInfo.vehicleYear}</span>
        </p>
        <p>
          <span className="label">Vehicle Mileage:</span>{" "}
          <span className="value">{vehicleInfo.vehicleMileage}</span>
        </p>
        <p>
          <span className="label">Vehicle serial:</span>{" "}
          <span className="value">{vehicleInfo.vehicleSerial}</span>
        </p>
        <p>
          <span className="label">Edit Vehicle info:</span>{" "}
          {/* <Link to={editVehiclePath}> */}
          <span className="value">
            <EditCalendarOutlinedIcon
              className="icon"
              onClick={handleEditVehicleClick}
            />
          </span>
          {/* </Link> */}
        </p>
      </div>

      <div className="servicesSection">
        <h2>Choose service</h2>
        <div className="service-item">
          <div className="col-10">
            <label>Oil change</label>
            <p>
              Every 5,000 kilometres or so, you need to change the oil in your
              car to keep your engine in the best possible shape.
            </p>
          </div>
          <div className="col-2">
            <input
              type="checkbox"
              checked={selectedServices.includes("Oil change")}
              onChange={() => handleServiceSelection("Oil change")}
            />
          </div>
        </div>
        <div className="service-item">
          <div className="col-10">
            <label>Spark Plug replacement</label>
            <p>
              Spark plugs are a small part that can cause huge problems. Their
              job is to ignite the fuel in your engine, helping it start.
            </p>
          </div>
          <div className="col-2">
            <input
              type="checkbox"
              checked={selectedServices.includes("Spark Plug replacement")}
              onChange={() => handleServiceSelection("Spark Plug replacement")}
            />
          </div>
        </div>
        <div className="service-item">
          <div className="col-10">
            <label>Fuel Cap tightening</label>
            <p>
              Loose fuel caps are actually a main reason why the "check engine"
              light in a car comes on.
            </p>
          </div>
          <div className="col-2">
            <input
              type="checkbox"
              checked={selectedServices.includes("fuel-cap-tightening")}
              onChange={() => handleServiceSelection("fuel-cap-tightening")}
            />
          </div>
        </div>
        <div className="service-item">
          <div className="col-10">
            <label>Oxygen Sensor replacement</label>
            <p>
              Oxygen sensors measure the concentration of oxygen in the exhaust
              gases in order to optimize engine performance and emissions.
            </p>
          </div>
          <div className="col-2">
            <input
              type="checkbox"
              checked={selectedServices.includes("oxygen-sensor-replacement")}
              onChange={() =>
                handleServiceSelection("oxygen-sensor-replacement")
              }
            />
          </div>
        </div>
        <div className="service-item">
          <div className="col-10">
            <label>Brake work</label>
            <p>
              We all know why brake work is important, especially because one
              quarter of all Canadian car accidents are caused by a failure to
              stop.
            </p>
          </div>
          <div className="col-2">
            <input
              type="checkbox"
              checked={selectedServices.includes("brake-work")}
              onChange={() => handleServiceSelection("brake-work")}
            />
          </div>
        </div>
        <div className="service-item">
          <div className="col-10">
            <label>Tire repairs and changes</label>
            <p>
              Without good, inflated tires, you loose speed, control, and fuel
              efficiency, hence the need to get them patched if there's a leak
              (for example, if you run over a nail), or replaced if they're too
              worn.
            </p>
          </div>
          <div className="col-2">
            <input
              type="checkbox"
              checked={selectedServices.includes("tire-repairs-and-changes")}
              onChange={() =>
                handleServiceSelection("tire-repairs-and-changes")
              }
            />
          </div>
        </div>
        <div className="service-item">
          <div className="col-10">
            <label>The Ignition System</label>
            <p>
              A car's ignition system includes its battery, starter, and the
              ignition itself.
            </p>
          </div>
          <div className="col-2">
            <input
              type="checkbox"
              checked={selectedServices.includes("the-ignition-system")}
              onChange={() => handleServiceSelection("the-ignition-system")}
            />
          </div>
        </div>
        <div className="service-item">
          <div className="col-10">
            <label>Programing the camera software</label>
            <p>
              Without good, inflated tires, you loose speed, control, and fuel
              efficiency, hence the need to get them patched if there's a leak
              (for example, if you run over a nail), or replaced if they're too
              worn.
            </p>
          </div>
          <div className="col-2">
            <input
              type="checkbox"
              checked={selectedServices.includes(
                "programing-the-camera-software"
              )}
              onChange={() =>
                handleServiceSelection("programing-the-camera-software")
              }
            />
          </div>
        </div>
      </div>
      <div className="additional-requests">
        <h2>Additional requests</h2>

        <div className="serviceRequest">
          <input
            type="text"
            placeholder="service description"
            value={serviceDescription}
            onChange={handleServiceDescriptionChange}
          />
        </div>
        <div className="price">
          <input
            type="text"
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
