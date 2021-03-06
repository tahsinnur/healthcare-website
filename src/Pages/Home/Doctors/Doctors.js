import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import DoctorCard from '../DoctorCard/DoctorCard';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch("/doctors.json")
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])

    const history = useHistory();
    const handleSeeMoreBtn = () =>{
        history.push("/doctors");
    }
    return (
        <div id="doctors" className="container">
            <h2 style={{color:"#00887a"}} className="pt-5 pb-4 text-center">Our Expert Doctors</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4 pb-3">
                {
                    doctors.slice(0,4).map(doctor => <DoctorCard
                        key={doctor._id}
                        doctor={doctor}
                    ></DoctorCard>)
                }
            </div>
            <div className="text-center pb-3">
                <button onClick={handleSeeMoreBtn} style={{backgroundColor:"#00887a"}} className="border-0 px-3 py-2 rounded text-white mt-4">See More</button>
            </div>
        </div>
    );
};

export default Doctors;