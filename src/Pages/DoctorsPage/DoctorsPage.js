import React, { useEffect, useState } from 'react';
import DoctorCard from '../Home/DoctorCard/DoctorCard';

const DoctorsPage = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch("/doctors.json")
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div className="container">
            <h2 style={{color:"#00887a"}} className="pt-5 pb-4 text-center">Our Expert Doctors</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4 pb-3">
                {
                    doctors.map(doctor => <DoctorCard
                        key={doctor._id}
                        doctor={doctor}
                    ></DoctorCard>)
                }
            </div>
        </div>
    );
};

export default DoctorsPage;