import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Customers from '../../../pages/Admin/Customers/Customers'


function CreateOrder() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);



    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        // Mock search function, replace with actual search logic
        const mockResults = [
        { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phoneNumber: '123-456-7890' },
        { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phoneNumber: '098-765-4321' },
        { firstName: 'Jasmine', lastName: 'Albesir', email: 'jasmine@gmail.com', phoneNumber: '240835487' }
        ];
        setSearchResults(mockResults.filter(customer => 
        customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
        customer.phoneNumber.includes(searchTerm)
        ));
    };

    const handleAddCustomer = () => {
        // Add new customer logic here
        console.log('Add new customer clicked');
        window.location.replace('/admin/customers');
    };

    const handleButtonClick = (customer) => {
        // Handle button click logic here
        console.log('Button clicked for customer:', customer);
    };
    return (
    <div className="container mt-4 " style={{display:'block'}}>
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

        <button className="btn btn-danger mb-3" onClick={handleAddCustomer}>
        ADD NEW CUSTOMER
        </button>

        
        {searchResults.length > 0 && (
        <table className="table table-bordered table-hover">
            <thead className="thead-light">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {searchResults.map((customer, index) => (
                <Customers key={index} customer={customer} onButtonClick={handleButtonClick} />
            ))}
            </tbody>
        </table>
        )}
    </div>
)
}

export default CreateOrder