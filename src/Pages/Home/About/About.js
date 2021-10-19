import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const About = () => {
    return (
        <div id="about" className="container mb-5">
            <h2 style={{ color: "#00887a" }} className="pt-5 pb-4 text-center">About Us</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col d-flex">
                    <img className="img-fluid" src="https://uploads-ssl.webflow.com/600b3339cfb564d294dee950/600dfe1b6815a9a4e04535e1_healthcare-workers.jpg" alt="" />
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <p>Since three decades, Lifeline Healthcare has been providing quality healthcare for the people in their diverse medical needs. People trust us because of the strong relationships we’ve built with them over the years.

                        Our work has always been guided by the needs of patients and delivered by our perfectly combined revolutionary technology, best medical expertise.</p>
                    <div className="my-3">
                        <h5 className="pb-2">Experience Doctors</h5>
                        <ProgressBar variant="success" now={80} label="80%" />
                    </div>
                    <div className="my-3">
                        <h5 className="pb-2">Modern Equipment</h5>
                        <ProgressBar variant="success" now={78} label="78%" />
                    </div>
                    <div className="my-3">
                        <h5 className="pb-2">Friendly Staff</h5>
                        <ProgressBar variant="success" now={85} label="85%" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;