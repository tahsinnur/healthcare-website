import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch("/services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className="container">
            <h2 style={{color:"#00887a"}} className="pt-5 pb-4 text-center">Our Services</h2>
            <div className="row row-cols-1 row-cols-md-3 g-5 pb-3">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;