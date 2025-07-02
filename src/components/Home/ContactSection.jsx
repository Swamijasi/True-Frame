import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ContactSection = () => {
    return (
        <section className="contact-section text-center py-5 position-relative bg-light">
            <div className="overlay"></div>

            <Container>
                <h2 className="fw-bold text-dark mb-5">
                    Contact Us For Premium uPVC Profiles
                </h2>

                <Row className="justify-content-center">
                    <Col md={6} className="mb-3 d-flex justify-content-center justify-content-md-end">
                        <Button
                            variant="primary"
                            size="lg"
                            className="px-4 py-2 skew-button"
                            href="#"
                        >
                            GET FREE QUOTE
                        </Button>
                    </Col>

                    <Col md={6} className="mb-3 d-flex justify-content-center justify-content-md-start">
                        <Button
                            variant="outline-primary"
                            size="lg"
                            className="px-4 py-2 skew-button"
                            href="#"
                        >
                            DOWNLOAD BROCHURE
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactSection;
