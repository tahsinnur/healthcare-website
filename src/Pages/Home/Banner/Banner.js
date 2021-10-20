import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import B1 from '../../../images/Banner/Banner1.jpg'
import B2 from '../../../images/Banner/Banner2.jpg';
import B3 from '../../../images/Banner/Banner3.jpg';

import './Banner.css';

const Banner = () => {
    return (
        <Container fluid className="p-0">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        height="700px"
                        className="d-block w-100"
                        src={B1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-uppercase fw-bold" style={{ color:"#00887a"}}>Welcome to lifeline healthcare</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="700px"
                        className="d-block w-100"
                        src={B2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-uppercase fw-bold" style={{ color:"#00887a"}}>Complete health care for your family</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="700px"
                        className="d-block w-100"
                        src={B3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-uppercase fw-bold" style={{ color:"#00887a"}}>Our mission is to heal. Our passion is to care.</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;