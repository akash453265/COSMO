import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Card,  Container, Row, Col, Image } from "react-bootstrap";
import "./CouresDetailsPages.css"

const PrashnaKundaliCourse = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col md={5}>
                    <Image src="https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040-9-768x768.jpg" fluid />
                </Col>
                <Col md={7}>
                    <Card className="no-hover">
                        <Card.Body>
                            <Card.Title className="text-danger">Shradha Sharma</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">₹10,000</Card.Subtitle>
                            <Card.Text>
                                <strong>First Class:</strong> 9th March 2025 <br />
                                <strong>Regular Classes:</strong> Saturday <br />
                                <strong>Time:</strong> 10:00 AM to 12:00 Noon IST <br />
                                <strong>Medium of Instruction:</strong> ZOOM <br />
                                <strong>Language:</strong> English <br />
                                <strong>Duration:</strong> 2 Months (8 Lectures, 2 Hours Each) <br />
                                <strong>Fee:</strong> ₹10,000 / $150 (including 18% GST)
                            </Card.Text>
                            <hr />
                            <h5>Course Content:</h5>
                            <ul>
                                <li>What is Prashna</li>
                                <li>Prashna and Yogas</li>
                                <li>Prashna and Houses</li>
                                <li>Limitations of Prashna</li>
                                <li>Different methods of Prashna – Hora, Omen, Time Triangle</li>
                                <li>Timing through the Prashna</li>
                                <li>Prashna and Special Queries</li>
                                <li>Practical examples</li>
                            </ul>

                        </Card.Body>
                        <div className='coursebtn'>
                        <a href="/sing-up" >
                            <button className=" course-button  py-2  c-button c-button2 c-button--gooey">
                                Add to Card
                                <div className="c-button__blobs">
                                    <div />
                                    <div />
                                    <div />
                                </div>
                            </button>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
                                <defs>
                                    <filter id="goo">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                                        <feBlend in="SourceGraphic" in2="goo" />
                                    </filter>
                                </defs>
                            </svg>
                        </a>
                    </div>
                    </Card>
                  

                </Col>
            </Row>
        </Container>
    );
};

export default PrashnaKundaliCourse;
