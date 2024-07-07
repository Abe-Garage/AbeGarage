
import React, { useState, useEffect } from 'react';
import './ServiceList.css';

const ServiceList = () => {
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState({ name: '', description: '' });

    useEffect(() => {
        fetch('/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleDelete = (id) => {
        fetch(`/services/${id}`, { method: 'DELETE' })
            .then(() => setServices(services.filter(service => service.id !== id)));
    };

    const handleEdit = (id) => {
        // Handle the editing logic here
        // This is a placeholder for where you'd include the edit functionality
        console.log(`Edit service with id ${id}`);
    };

    const handleAddService = () => {
        fetch('/services', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newService),
        })
            .then(res => res.json())
            .then(service => {
                setServices([...services, service]);
                setNewService({ name: '', description: '' });
            });
    };

    return (
        <div className="service-management">
            <div className='service-provide'>
                <h1>Services we provide</h1>
            </div>
        
            <p className="description">
                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward,
                a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
            </p>
            <div className="services-list">
                {services.map((service) => (
                <div key={service.id} className="service-item">
                    <div className="service-details">
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    </div>
                    <div className="service-actions">
                    <button onClick={() => handleEdit(service.id)}> <input type="checkbox" /></button>
                    <button onClick={() => handleDelete(service.id)}>🗑️</button>
                    </div>
                </div>
                ))}
            </div>
            <section className='add-new-service-container'>
                <div className='add-new-service'>
                    <h2>Add a new service</h2>
                </div>
                <div className="add-service-form">
                    <input
                        className='service-name'
                        type="text"
                        placeholder="Service name"
                        value={newService.name}
                        onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                    />
                    <textarea
                        className='service-description'
                        placeholder="Service description"
                        value={newService.description}
                        onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                    />
                    <button onClick={handleAddService}>ADD SERVICE</button>
                </div>
            </section>
        </div>
    );
};

export default ServiceList;