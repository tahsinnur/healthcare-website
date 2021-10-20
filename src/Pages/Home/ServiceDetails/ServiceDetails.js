import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const {serviceId} = useParams();

    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState({});

    useEffect( () => {
        fetch("/services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    useEffect(()=>{
        const matchedService = services.find( service => service._id === serviceId);
        setSingleService(matchedService);
    }, [serviceId, services])

    return (
        <div className="service-details container mt-4 mb-5">
            <h2 style={{color:"#00887a"}} className="mt-5 mb-5 text-center">Service Details</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col d-flex">
                    <img className="img-fluid" src={singleService?.img} alt="" />
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <h3 className="py-3">{singleService?.name}</h3>
                    <p>{singleService?.description}</p>
                    <h4>Cost: ${singleService?.price}</h4>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;