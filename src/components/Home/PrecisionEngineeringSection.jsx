import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PrecisionEngineeringSection = () => {
    return (
        <section className="precision-section bg-white">
            <Container fluid>
                <Row className="align-items-center">
                    {/* Left Column - Text */}
                    <Col md={6} className="px-5 mb-4 mb-md-0">
                        <h2 className="section-title fw-bold text-dark mb-4">PRECISION ENGINEERING</h2>
                        <p className="section-description text-muted fs-5">
                            Based on requirements, uPVC profiles are cut to the required dimensions on PLC controlled cutting machines. These profiles are taken to the drilling and copy routing machine, where necessary machining is done on the profile to fix the hardware and also provide water drainage slots. Galvanized Steel Reinforcements matching the profile sizes are inserted into the chambers of the profiles and fixed in place by screws.
                            <br /><br />
                            The entire manufacturing process is under the stage-wise control of the parameters set by the Quality Assurance Department. Kreative Windows maintains a large inventory of profiles to ensure quick and timely deliveries of windows and doors to large sized projects at a short notice.
                        </p>
                    </Col>

                    {/* Right Column - Image */}
                    <Col md={6} className="text-center">
                        <img
                            src="https://kreativewindows.com/wp-content/uploads/2019/10/okotech-upvc-profiles-07.jpg"
                            alt="uPVC Profiles"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PrecisionEngineeringSection;
