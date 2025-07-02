import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGem, FaPuzzlePiece, FaFeatherAlt } from 'react-icons/fa';

const FeaturesSection = () => {
    return (
        <section className="features-section py-5 bg-light">
            <Container>
                <Row className="text-center">
                    <Col md={4}>
                        <div className="icon-box">
                            <FaGem className="icon" />
                            <h3>WORLD-CLASS QUALITY</h3>
                            <p>
                                Our precision-engineered uPVC profiles are manufactured with
                                state-of-the-art German extrusion equipment.
                            </p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="icon-box">
                            <FaPuzzlePiece className="icon" />
                            <h3>CUSTOMISED SOLUTIONS</h3>
                            <p>
                                We offer customised uPVC profile solutions engineered to your
                                exact requirements and budget.
                            </p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="icon-box">
                            <FaFeatherAlt className="icon" />
                            <h3>ENVIRONMENTALLY FRIENDLY</h3>
                            <p>
                                Our manufacturing practices and uPVC profiles are 100% lead-free,
                                completely recyclable and environmentally friendly.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FeaturesSection;
