


// import React, { useState, useEffect } from 'react';
// import './ServiceList.css';
// import { MdDelete } from "react-icons/md";
// import { CiEdit } from "react-icons/ci";

// const ServiceList = () => {
//     const [newService, setNewService] = useState({ service_name: '', service_description: '' });
//     const [services, setServices] = useState([]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewService({ ...newService, [name]: value });
//     };

//     useEffect(() => {
//         fetch('http://localhost:3000/api/services')
//             .then(res => res.json())
//             .then(data => setServices(data.data.rows));
//     }, []);
//     console.log(services);

//     const handleDelete = (id) => {
//         fetch(`http://localhost:3000/api/deleteservice/${id}`, { method: 'DELETE' })
//             .then(() => setServices(services.filter(service => service.service_id !== id)));
//     };
//     // console.log(setServices(services.filter(service => service.id !== id)));
//     const [isEditing, setIsEditing] = useState(false);
// // const [services, setServices] = useState([]); // assuming services state is defined

// const handleEdit = (id) => {
//     // Handle the editing logic here
//     fetch(`http://localhost:3000/api/service/${id}`, { method: 'PUT' })
//         .then(response => response.json())
//         .then(data => {
//             // Update the services state as necessary
//             setServices(services.map(service => 
//                 service.service_id === id ? { ...service, ...data } : service
//             ));
//             setIsEditing(true);
//         })
//         .catch(error => console.error('Error updating service:', error));

//     console.log(`Edit service with id ${id}`);
// };


//     const handleAddService = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch("http://localhost:3000/api/service", {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(newService)
//             });

//             if (!response.ok) throw new Error('Network response was not ok');

//             const service = await response.json();
//             setServices([...services, service]);
//             setNewService({ service_name: '', service_description: '' });
//             alert("Service added successfully");
//         } catch (error) {
//             alert("Something went wrong");
//             console.error(error);
//         }
//     };

//     return (

//         <div className="service-management">

//             <div className='service-provide'>

//                 <h1>Services we provide</h1>

//             </div>
//             {isEditing && (
//                 <form onSubmit={handleAddService}>
//                 <input
//                     type="text"
//                     name="service_name"
//                     value={newService.service_name}
//                     onChange={handleInputChange}
//                     placeholder="Service Name"
//                     required
//                 />
//                 <textarea
//                     type="text"
//                     name="service_description"
//                     value={newService.service_description}
//                     onChange={handleInputChange}
//                     placeholder="Service Description"
//                     required
//                 />
//                 <button type="submit">Add Service</button>
//             </form>

//             )}



//             <p className="description">
//                 Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward,
//                 a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
//             </p>
//             <div className="services-list">
//                 {services.map((service) => (
//                     <div key={service.id} className="service-item">
//                         <div className="service-details">
//                             <h3>{service.service_name}</h3>
//                             <p>{service.service_description}</p>
//                         </div>
//                         <div className="service-actions">
//                             <button onClick={() => handleEdit(service.service_id)}> <CiEdit size={28}/></button>
//                             <button onClick={() => handleDelete(service.service_id)}><MdDelete size={28}/> </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <section className='add-new-service-container'>
//                 <div className='add-new-service'>
//                     <h2>Add a new service</h2>
//                 </div>
//                 <div className="add-service-form">
//                     <form onSubmit={handleAddService}>
//                         <input
//                             type="text"
//                             name="service_name"
//                             value={newService.service_name}
//                             onChange={handleInputChange}
//                             placeholder="Service Name"
//                             required
//                         />
//                         <textarea
//                             type="text"
//                             name="service_description"
//                             value={newService.service_description}
//                             onChange={handleInputChange}
//                             placeholder="Service Description"
//                             required
//                         />
//                         <button type="submit">Add Service</button>
//                     </form>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default ServiceList;



// =======================================================================


import React, { useState, useEffect } from 'react';
import './ServiceList.css';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import { Modal,Button } from "react-bootstrap";

const ServiceList = () => {
    const [newService, setNewService] = useState({ service_name: '', service_description: '' });
    const [services, setServices] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentServiceId, setCurrentServiceId] = useState(null);
    const navigate = useNavigate()
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [serviceToDelete, setServiceToDelete] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/services')
            .then(res => res.json())
            .then(data => setServices(data.data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewService({ ...newService, [name]: value });
    };

    const handleDelete = () => {
        fetch(`http://localhost:3000/api/deleteservice/${serviceToDelete.service_id}`, { method: 'DELETE' })
            .then(() => setServices(services.filter(service => service.service_id !== id)))
            .catch(error => console.error('Error deleting service:', error));
            // window.location.reload()
    };

    const handleEdit = (id) => {
        const serviceToEdit = services.find(service => service.service_id === id);
        setNewService({ 
            service_name: serviceToEdit.service_name, 
            service_description: serviceToEdit.service_description 
        });
        setCurrentServiceId(id);
        setIsEditing(true);
        navigate('/admin/services#update')

       
        // window.scrollTo({
        //      top: 0,
        //       behavior: 'smooth', // This makes the scroll smooth
        //     });
   
  
        
        // window.location.reload(); 

        // setTimeout(()=> { 
        //     window.location.reload();
        //  }, 3001)
        
    };
   
    const handleSaveEdit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/api/service-update/${currentServiceId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newService)
            });

            console.log("one")

            if (!response.ok) throw new Error('Network response was not ok');
            console.log("two")


            const updatedService = await response.json();
            console.log("three")

            setServices(services.map(service => 
                service.service_id === currentServiceId ? updatedService : service
            ));
            console.log("four")

            setNewService({ service_name: '', service_description: '' });
            setIsEditing(false);
            setCurrentServiceId(null);
            alert("Service updated successfully");
            window.location.reload()
        } catch (error) {
            alert("Something went wrong");
            console.error('Error updating service:', error);
        }
    };

    const handleAddService = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/service", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newService)
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const service = await response.json();
            setServices([...services, service]);
            setNewService({ service_name: '', service_description: '' });
            alert("Service added successfully");
            window.location.reload()
        } catch (error) {
            alert("Something went wrong");
            console.error('Error adding service:', error);
        }
    };


    const handleShowDeleteModal = (service) => {
        setServiceToDelete(service);
        setShowDeleteModal(true);
      };

    const handleCloseDeleteModal = () => {
        setServiceToDelete(null);
        setShowDeleteModal(false);
      };
// console.log(serviceToDelete)
   
    return (
        <>
            <div className="service-management">
                

                <div className="contact-section pad_1">
                    <div className="contact-title mb-1">
                        <h2 style={{color:'#08194A'}}>Services we provide</h2>
                    </div>
                </div>
                
                <p className="description">
                    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward,a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
                </p>

                {/* {isEditing && (
                    <section className='add-new-service-container' id='update'>
                    <div className='add-new-service'>
                        <h2 className='v_font'>Update service</h2>
                    </div>
                    <div className="add-service-form">
                    
                        <form onSubmit={handleSaveEdit}>
                            <input
                                type="text"
                                name="service_name"
                                value={newService.service_name}
                                onChange={handleInputChange}
                                placeholder="Service Name"
                                required
                            />
                            <textarea
                                type="text"
                                name="service_description"
                                value={newService.service_description}
                                onChange={handleInputChange}
                                placeholder="Service Description"
                                required
                            />
                            <div className='d-flex gap-5 mt-3'>
                            <button type="submit">Updated Service</button>
                            <button style={{background:'#08194A'}} onClick={()=>setIsEditing(false)}>Cancel</button>
                            </div>
                        </form>
                        </div>
                    </section>
                )} */}

                <div className="services-list">
                    {services?.map((service) => (
                        <div key={service.service_id} className="service-item py-4">
                            <div className="service-details">
                                <h3 className='v_font' style={{color:'#08194A'}}>{service.service_name}</h3>
                                <p>{service.service_description}</p>
                            </div>
                            <div className="service-actions">
                                <button onClick={() => handleEdit(service.service_id)}><a href='#update' style={{color:'#ff6666'}}><FaEdit size={20} /></a></button>
                                <button onClick={() => handleShowDeleteModal(service)}><MdDelete size={20} /></button>
                            </div>
                        </div>
                    ))}
                </div>
                
                    {/* {!isEditing &&
                    <section className='add-new-service-container'>
                        <div className='add-new-service'>
                        <h2>Add a new service</h2>
                        </div>
                        <div className="add-service-form">
                            <form onSubmit={handleAddService}>
                                <input
                                    type="text"
                                    name="service_name"
                                    value={newService.service_name}
                                    onChange={handleInputChange}
                                    placeholder="Service Name"
                                    required
                                />
                                <textarea
                                type="text"
                                    name="service_description"
                                    value={newService.service_description}
                                    onChange={handleInputChange}
                                    placeholder="Service Description"
                                    required
                                    />
                                <button type="submit">Add Service</button>
                            </form>
                        </div>
                    </section>
                    } */}

        <div className="additional-requests" style={{paddingBottom:'40px',marginTop:'20px'}} id='update'>

            <div className="contact-section pad_1" style={{background:'#fff'}}>
                <div className="contact-title mb-1">
                    <h2 style={{fontSize:'32px'}}>{!isEditing ? 'Add a new Service':'Update a Service'}</h2>
                </div>
            </div>


            <form onSubmit={!isEditing? handleAddService :handleSaveEdit} >

                <div className="price">
                    <input
                        type="text"
                        style={{ padding: "10px 15px" }}
                        placeholder="Service name"
                        className='w-100'
                        name="service_name"
                        value={newService.service_name}
                        onChange={handleInputChange}
                        />
                </div>

                <div className="serviceRequest">
                    <input
                        type="text"
                        style={{ paddingLeft: "15px" }}
                        className='w-100'
                        name="service_description"
                        value={newService.service_description}
                        onChange={handleInputChange}
                        placeholder="Service Description"
                        />
                </div>

                {isEditing ?   (<div className=' form-group col-md-12 d-flex gap-5 mt-3' >
                                <button type="submit" className="theme-btn btn-style-one">Updated Service</button>
                                <button style={{background:'#08194A'}} className="theme-btn btn-style-one" onClick={()=>{setIsEditing(false) ;setNewService({ service_name: '', service_description: '' })}}>Cancel</button>
                                </div>): 
                                ( <div className="form-group col-md-12">
                                    <button className="theme-btn btn-style-one" type="submit" >
                                            ADD SERVICE 
                                    </button>
                                </div>)
                }
            </form>

            
        </div>
            
            </div>

            <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Are you sure you want to delete{" "}
                    <strong>
                        {serviceToDelete
                        ? `${serviceToDelete.service_name} `
                        : ""}
                    </strong>
                ?
                </Modal.Body>
                        
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeleteModal}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
           </Modal>


        </>
    );
};

export default ServiceList;
