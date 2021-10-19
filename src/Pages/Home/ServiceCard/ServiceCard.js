import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({service}) => {
    const {img, name, description} = service;
    return (
        <div className="col">
                <div className="card h-100 service-card border-0">
                    <img style={{height:"300px"}} src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{description.slice(0,100)}</p>
                        <Link style={{textDecoration:"none", color:"#00887a"}}>learn more</Link>
                    </div>
                </div>
            </div>
    );
};

export default ServiceCard;