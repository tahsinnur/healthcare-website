import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Appointment = () => {
    const { serviceId } = useParams();

    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState({});

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        const matchedService = services.find(service => service._id === serviceId);
        setSingleService(matchedService);
    }, [serviceId, services])

    return (
        <div className="container">
            <h2 style={{color:"#00887a"}} className="mt-5 mb-4 text-center">Make An Appointment</h2>
            <form className="row g-3">
                <div className="col-12">
                    <label htmlFor="serviceName" className="form-label me-2">Service Name: </label>
                    <input className="form-control" type="text" defaultValue={singleService?.name} />
                </div>
                <div className="col-12">
                    <label htmlFor="price" className="form-label me-2">Cost: </label>
                    <input className="form-control" type="text" defaultValue={singleService?.price} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputFirstName" className="form-label">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputLastName" className="form-label">Phone Number</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputZip" className="form-label">Zip Code</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <label htmlFor="date" className="form-label">Choose a Date</label>
                    <input className="form-control" type="date" name="" id="" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button style={{backgroundColor:"#00887a"}} type="submit" className="btn text-white">Book A Seat</button>
                </div>
            </form>
        </div>
    );
};

export default Appointment;