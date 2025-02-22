import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { IoIosStar } from "react-icons/io";
// import img1 from '../../assets/images/products/img1.jpg'
import './products.css'
import book1 from "../../assets/images/products/book1.jpg"
import book2 from "../../assets/images/products/book2.jpg"
import book3 from "../../assets/images/products/book3.jpg"
import Card from 'react-bootstrap/Card';
import 'aos/dist/aos.css';

function Products() {
    return (
        <Container>
            <Row className=' py-5' data-aos="fade-up"
                data-aos-duration="3000">
                <Col xs={12} md={4}>
                    <img src='https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040.jpg' className='img1' />
                </Col>

                <Col xs={12} md={8}>

                    <ul className='product-list  text-white '>
                        <li className=' products-text col-md-12'>
                            <h1>Best Books Form Our Authors</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur Ui adipiscing elit, sed do eiusmod tempor.</p>
                        </li>
                        {/* <li className='products-text col-md-6'><p>Lorem ipsum dolor sit amet, consectetur Ui adipiscing elit, sed do eiusmod tempor.</p>
                                 <Button className='Button'><IoIosStar /> Read more</Button> 
                                 <div className='mt-4'>
                                    <button className="c-button c-button--gooey"> <IoIosStar />Read more
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
                                </div> 
                            </li> */}
                    </ul>

                    <Row className='g-4 mt-4 justify-content-center'>
                        <Col xs={12} sm={6} md={4} className='d-flex justify-content-center'>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={book1} />
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text className='text-white'>
                                        stories from the stars
                                        jason herring
                                    </Card.Text>
                                    <span className='price'>$65</span>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} sm={6} md={4} className='d-flex justify-content-center'>
                            <Card style={{ width: '20rem' }} className='card'>
                                <Card.Img variant="top" src={book2} />
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text className='text-white'>
                                        stories from the stars
                                        jason herring
                                    </Card.Text>
                                    <span className='price'>$65</span>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4} className='d-flex justify-content-center'>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={book3} />
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text className='text-white'>
                                        stories from the stars
                                        jason herring
                                    </Card.Text>
                                    <span className='price'>$65</span>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}

export default Products

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import { IoIosStar } from "react-icons/io";
// import './products.css';
// import book1 from "../../assets/images/products/book1.jpg";
// import book2 from "../../assets/images/products/book2.jpg";
// import book3 from "../../assets/images/products/book3.jpg";
// import Card from 'react-bootstrap/Card';
// import 'aos/dist/aos.css';

// function Products() {
//     return (
//         <Container className="py-5">
//             <Row className="align-items-center" data-aos="fade-up" data-aos-duration="3000">
//                 <Col xs={12} md={4} className="text-center">
//                     <img
//                         src='https://cosmicenergiies.com/wp-content/uploads/2022/02/astro-vastu-consultant-jaipur-rajasthan-gurugram-gurgaon-shradha-sharma-8058000040.jpg'
//                         className='img-fluid img1'
//                         alt="Astro Vastu Consultant"
//                     />
//                 </Col>
//                 <Col xs={12} md={8}>
//                     <div className="text-white text-center text-md-start">
//                         <h1>Best Books From Our Authors</h1>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
//                     </div>
//                     <Row className="g-4 mt-4 justify-content-center">
//                         {[book1, book2, book3].map((book, index) => (
//                             <Col key={index} xs={12} sm={6} md={4} className="d-flex justify-content-center">
//                                 <Card style={{ width: '18rem' }} className="text-center">
//                                     <Card.Img variant="top" src={book} />
//                                     <Card.Body>
//                                         <Card.Text className='text-dark fw-bold'>
//                                             Stories from the Stars <br /> Jason Herring
//                                         </Card.Text>
//                                         <span className='price fw-bold'>$65</span>
//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                         ))}
//                     </Row>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Products;
