import React from 'react';
import Carousal1 from "../../assets/win1.jpg";
import Carousal2 from "../../assets/win2.jpg";
import Carousal3 from "../../assets/win3.jpg";
import Carousel from 'react-bootstrap/Carousel';

function Hero() {
    return (
        <div>
            <Carousel className='h-'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 zoom-img"
                        src={Carousal1}
                        alt="First slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Lead Free uPVC Profiles</h3>
                        <p>Our uPVC profile are 100% lead free</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 zoom-img"
                        src={Carousal2}
                        alt="Second slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Customized uPVC Profiles</h3>
                        <p>We customize uPVC profiles to your exact requirements</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 zoom-img"
                        src={Carousal3}
                        alt="Third slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>World class uPVC Profiles</h3>
                        <p>Our uPVC profiles are made with superior materials</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='text-center py-4 bg-primary'>
                <h2 className="fw-bold fs-4 text-white">
                    Sole Authorised dealer of Okotech, Aparna Profiles, Rajasthan
                </h2>
            </div>
        </div>
    );
}

export default Hero;
