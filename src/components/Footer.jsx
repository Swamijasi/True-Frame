import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light pt-5 pb-3">
            <Container>
                <Row>
                    {/* Column 1: Company Description */}
                    <Col md={4} className="mb-4">
                        <h5 className="fw-bold mb-3">TrueFrame Solutions</h5>
                        <p>
                            TrueFrame Solutions is a leading manufacturer and dealer of premium uPVC & Aluminium profiles.
                            With German technology and advanced engineering, we deliver unmatched quality and durability.
                        </p>
                    </Col>

                    {/* Column 2: Navigation Links */}
                    <Col md={4} className="mb-4">
                        <h5 className="fw-bold mb-3">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="/technology">Technology</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </Col>

                    {/* Column 3: Contact Info */}
                    <Col md={4} className="mb-4">
                        <h5 className="fw-bold mb-3">Contact Info</h5>
                        <p><FaMapMarkerAlt className="me-2" /> Jaipur, Rajasthan, India</p>
                        <p><FaPhone className="me-2" /> +91 98765 43210</p>
                        <p><FaEnvelope className="me-2" /> support@trueframesolutions.com</p>

                        <div className="social-icons mt-3">
                            <a href="#" className="me-3"><FaFacebookF /></a>
                            <a href="#" className="me-3"><FaInstagram /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </Col>
                </Row>

                <hr className="border-light" />
                <p className="text-center mb-0">&copy; {new Date().getFullYear()} Trueframe Solutions. All rights reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;
