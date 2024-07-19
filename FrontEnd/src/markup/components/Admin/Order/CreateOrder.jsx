
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../../../../axios/axiosConfig";
import { FaHandPointer } from "react-icons/fa";
import { Link } from "react-router-dom"; 

function CreateOrder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchAttempted, setSearchAttempted] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const token = localStorage.getItem("employeeToken"); 
      const response = await axios.get(
        `/search-customers?query=${searchTerm}`,
        {
          headers: { "x-access-token": token },
        }
      );
      console.log("API Response:", response.data); 

      if (Array.isArray(response.data)) {
        setSearchResults(response.data);
      } else if (response.data && typeof response.data === "object") {
        setSearchResults([response.data]);
      } else {
        console.error("Unexpected response format:", response.data);
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    } finally {
      setSearchAttempted(true);
    }
  };

  const handleAddCustomer = () => {
    console.log("Add new customer clicked");
    window.location.replace("/admin/create-order");
  };

  const handleButtonClick = (customer) => {
    console.log("Button clicked for customer:", customer);
  };

  return (
    <div className="container mt-4" style={{ display: "block" }}>
      <h1 className="mb-4">Create a new order</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a customer using first name, last name, email address or phone number"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {searchResults.length > 0 ? (
        <table className="table table-bordered table-hover">
          <tbody>
            {searchResults.map((customer, index) => (
              <tr key={ index}>
                
                <td className="customer_name">
                  {customer.customer_first_name}
                </td>
                <td className="customer_name">{customer.customer_last_name}</td>
                <td>{customer.customer_email}</td>
                <td>{customer.customer_phone_number}</td>
                <td>
                  <Link
                    to={`/admin/edit-customer/${customer.customer_id}`}
                    className="editButton"
                  >
                    <FaHandPointer />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        searchAttempted && <p>No results found</p>
      )}

      {searchResults.length === 0 && (
        <button className="btn btn-danger mb-3" onClick={handleAddCustomer}>
          ADD NEW CUSTOMER
        </button>
      )}
    </div>
  );
}

export default CreateOrder;


