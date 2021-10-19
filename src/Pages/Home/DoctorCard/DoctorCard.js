import React from 'react';

const DoctorCard = ({doctor}) => {
    const {img, name, specialty, age} = doctor;
    return (
        <div className="col">
                <div className="card h-100 service-card border-0">
                    <img style={{height:"300px"}} src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{specialty}</p>
                        <p className="card-text">Age: {age}</p>
                    </div>
                </div>
            </div>
    );
};

export default DoctorCard;