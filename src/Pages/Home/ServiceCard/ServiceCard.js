import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
    const { _id, img, name, description } = service;
    return (
        <div className="col">
            <div className="card h-100 service-card border-0">
                <img style={{ height: "300px" }} src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{description.slice(0, 100)}</p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Link to={`/servicedetails/${_id}`}><button style={{ backgroundColor: "#00887a" }} className="border-0 px-3 py-2 rounded text-white mt-4">See Details</button></Link>
                        </div>
                        <div>
                            <Link to={`/appointment/${_id}`}><button style={{ backgroundColor: "#00887a" }} className="border-0 rounded text-white px-3 py-2 mt-4">Take Appointment</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;