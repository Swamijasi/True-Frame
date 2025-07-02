import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const VideoInfoSection = () => {
    return (
        <section className="video-info-section py-5 bg-light">
            <Container>
                <Row className="align-items-center">
                    {/* Video */}
                    <Col md={6} className="mb-4 mb-md-0">
                        <div className="video-wrapper ratio ratio-16x9">
                            <iframe
                                src="https://www.youtube-nocookie.com/embed/XAKULN3VQGA?autoplay=1&mute=1&controls=0&rel=0&loop=1&modestbranding=1&playlist=XAKULN3VQGA"
                                title="Okotech uPVC Profiles"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>

                    {/* Text */}
                    <Col md={6}>
                        <h2 className="fw-bold text-primary mb-3">HIGH RELIABILITY & ACCURACY</h2>
                        <p className="text-muted fs-10">
                            The entire equipment for manufacturing of Kreative Windows uPVC profiles has been imported from WEGOMA, Germany to ensure high reliability and accuracy in the manufacturing process. The uPVC profiles are reinforced with galvanized steel sections for additional strength to withstand high wind loads. Kreative Windows has the largest profile bending machine in India that can produce arches with max of 3m radius.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default VideoInfoSection;
