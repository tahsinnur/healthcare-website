import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <Container fluid style={{backgroundColor:"#00887a"}} className="text-white text-center footer py-5 mt-4">
            <h1 className="fw-bold">LIFELINE HEALTHCARE</h1>
            <div className="social-icon">
                <ul>
                    <li><Link style={{color:"white"}} to="/"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link style={{color:"white"}} to="/"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link style={{color:"white"}} to="/"><i className="fab fa-google-plus-g"></i></Link></li>
                    <li><Link style={{color:"white"}} to="/"><i className="fab fa-instagram"></i></Link></li>
                </ul>
            </div>
            <div>
                <p className="text-center"><small><i className="far fa-copyright"></i> 2021 LIFELINE HEALTHCARE BD, Inc. All Rights reserved</small></p>
            </div>
        </Container>
    );
};

export default Footer;