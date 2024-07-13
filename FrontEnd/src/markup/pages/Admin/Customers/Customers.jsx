// import React, { useState } from "react";
// import AdminMenu from "../../../components/Admin/AdminMenu/AdminMenu";
// import AddCustomerForm from "../../../components/Admin/CustomerForm/CustomerForm";
// import classes from "./customers.module.css";
// import { Link } from "react-router-dom"; 
// import CustomerList from "../../../components/Admin/CustomerList/CustomerList";

// function Customers() {
//   const [customers, setCustomers] = useState([
//     {
//       id: 1,
//       email: "john.doe@example.com",
//       first_name: "John",
//       last_name: "Doe",
//       phone: "555-555-5555",
//       active: true,
//       added_date: "2024-07-04",
//     },
//     {
//       id: 2,
//       email: "jane.doe@example.com",
//       first_name: "Jane",
//       last_name: "Doe",
//       phone: "555-555-5556",
//       active: false,
//       added_date: "2024-07-04",
//     },
//   ]);
//   const [search, setSearch] = useState("");

//   const handleAddCustomer = (customer) => {
//     setCustomers([...customers, customer]);
//   };

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const filteredCustomers = customers.filter(
//     (customer) =>
//       customer.first_name.toLowerCase().includes(search.toLowerCase()) ||
//       customer.last_name.toLowerCase().includes(search.toLowerCase()) ||
//       customer.email.toLowerCase().includes(search.toLowerCase())
//   );

//   // return (
//   //   <div className={classes.adminPages}>
//   //     <div className="container-fluid">
//   //       <div className="row">
//   //         <div className={`col-md-3 ${classes.adminLeftSide}`}>
//   //           <AdminMenu />
//   //         </div>
//   //         <div className={`col-md-9 ${classes.adminRightSide}`}>
//   //           <section className={classes.contactSection}>
//   //             <div className="auto-container">
//   //               <div className={classes.contactTitle}>
//   //                 <h2>Customer List</h2>
//   //               </div>
//   //               <div className={classes.searchBar}>
//   //                 <input
//   //                   type="text"
//   //                   className={classes.searchInput}
//   //                   placeholder="Search customers..."
//   //                   value={search}
//   //                   onChange={handleSearchChange}
//   //                 />
//   //               </div>
//   //               <div className="row clearfix">
//   //                 <div className="col-lg-12">
//   //                   <div className="inner-column">
//   //                     <table className={classes.table}>
//   //                       <thead>
//   //                         <tr>
//   //                           <th>ID</th>
//   //                           <th>First Name</th>
//   //                           <th>Last Name</th>
//   //                           <th>Email</th>
//   //                           <th>Phone</th>
//   //                           <th>Added Date</th>
//   //                           <th>Active</th>
//   //                           <th>Edit</th>
//   //                         </tr>
//   //                       </thead>
//   //                       <tbody>
//   //                         {filteredCustomers.map((customer) => (
//   //                           <tr key={customer.id}>
//   //                             <td>{customer.id}</td>
//   //                             <td>{customer.first_name}</td>
//   //                             <td>{customer.last_name}</td>
//   //                             <td>{customer.email}</td>
//   //                             <td>{customer.phone}</td>
//   //                             <td>{customer.added_date}</td>
//   //                             <td>{customer.active ? "Yes" : "No"}</td>
//   //                             <td>
//   //                               <Link
//   //                                 to={`/edit-customer/${customer.id}`}
//   //                                 className={classes.editButton}
//   //                               >
//   //                                 Edit
//   //                               </Link>
//   //                             </td>
//   //                           </tr>
//   //                         ))}
//   //                       </tbody>
//   //                     </table>
//   //                   </div>
//   //                 </div>
//   //               </div>
//   //               <div className="row clearfix">
//   //                 <div className="col-lg-12">
//   //                   <div className="inner-column">
//   //                     <AddCustomerForm onAddCustomer={handleAddCustomer} />
//   //                   </div>
//   //                 </div>
//   //               </div>
//   //             </div>
//   //           </section>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>
//   // );
  

//   return(
//     <div>
//     <div className="container-fluid admin-pages">
//       <div className="row">
//         <div className="col-md-3 admin-left-side">
//           <AdminMenu />
//         </div>
//         <div className="col-md-9 admin-right-side px-5">
//           <CustomerList />
//         </div>
//       </div>
//     </div>
//     </div>
//   );

// }
// export default Customers;
