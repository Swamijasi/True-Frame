import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';

const counters = [
    { value: 100, suffix: '%', title: 'Lead-Free' },
    { value: 100, suffix: '%', title: 'Leak-Proof' },
    { value: 100, suffix: '%', title: 'Termite-Proof' },
    { value: 40, suffix: 'db', title: 'Reduction in Noise' },
];

const CounterSection = () => {
    return (
        <section className="counter-section py-5 text-center bg-white">
            <Container>
                <Row>
                    {counters.map((item, index) => (
                        <Col md={3} sm={6} xs={12} key={index} className="mb-4">
                            <div className="counter-box p-3 border rounded shadow-sm">
                                <h2 className="counter-value display-5 fw-bold text-primary">
                                    <CountUp end={item.value} duration={3} />
                                    {item.suffix}
                                </h2>
                                <p className="counter-title mt-2 fs-5">{item.title}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default CounterSection;
