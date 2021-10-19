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
                    <Link to={`/servicedetails/${_id}`} style={{ textDecoration: "none", color: "#00887a" }}>learn more</Link>
                    <div>
                        <Link to={`/appointment/${_id}`}><button style={{ backgroundColor: "#00887a" }} className="border-0 px-3 py-2 rounded text-white mt-4">Make An Appointment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;