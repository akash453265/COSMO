

// import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import "./footer2.css"
// import {
//     faFacebook,
//     faTwitter,
//     faInstagram,
//     faLinkedin,
//     faPinterest
// } from '@fortawesome/free-brands-svg-icons';
// import {
//     faHeadphones,
//     faMessage,
//     faComment
// } from '@fortawesome/free-solid-svg-icons';

// export default function Footer() {
//     return (
//         <footer className="footer-three">
//             <div className="footer-top">
//                 <Container>
//                     <Row>
//                         <Col xl={5}>
//                             <div className="footer-widget">
//                                 <div className="footer-about">
//                                     <div className="mb-4">
//                                         <Link to="/" className="d-inline-block mb-1">
//                                             <img src="/assets/img/logo.svg" alt="logo" />
//                                         </Link>
//                                         <p>Our mission is to offer you a seamless and enjoyable car rental experience. Whether you’re planning a road trip</p>
//                                     </div>
//                                     <h5 className="mb-1">Subscribe to Our Newsletter</h5>
//                                     <p className="mb-3">Just sign up and we'll send you a notification by email.</p>
//                                     <div className="footer-input">
//                                         <InputGroup className="align-items-center">
//                                             <InputGroup.Text className="px-1">
//                                                 <FontAwesomeIcon icon={faMessage} />
//                                             </InputGroup.Text>
//                                             <Form.Control
//                                                 type="email"
//                                                 placeholder="Enter Email Address"
//                                             />
//                                             <Button variant="primary" size="md">
//                                                 Subscribe
//                                             </Button>
//                                         </InputGroup>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Col>

//                         <Col xl={7}>
//                             <Row className="row-cols-md-3 row-cols-sm-2 row-cols-1">
//                                 <Col>
//                                     <div className="footer-widget">
//                                         <h5>Pages</h5>
//                                         <ul className="footer-menu list-unstyled">
//                                             <li><Link to="/team">Our Team</Link></li>
//                                             <li><Link to="/pricing-plan">Pricing Plans</Link></li>
//                                             <li><Link to="/gallery">Gallery</Link></li>
//                                             <li><Link to="/profile-settings">Settings</Link></li>
//                                             <li><Link to="/my-profile">Profile</Link></li>
//                                             <li><Link to="/agent-listings">Listings</Link></li>
//                                         </ul>
//                                     </div>
//                                 </Col>

//                                 <Col>
//                                     <div className="footer-widget">
//                                         <h5>Company</h5>
//                                         <ul className="footer-menu list-unstyled">
//                                             <li><Link to="/about-us">About Us</Link></li>
//                                             <li><Link to="#">Careers</Link></li>
//                                             <li><Link to="/blog-grid">Blog</Link></li>
//                                             <li><Link to="#">Affiliate Program</Link></li>
//                                             <li><Link to="/add-flight">Add Your Listing</Link></li>
//                                             <li><Link to="#">Our Partners</Link></li>
//                                         </ul>
//                                     </div>
//                                 </Col>

//                                 <Col>
//                                     <div className="footer-widget">
//                                         <h5>Destinations</h5>
//                                         <ul className="footer-menu list-unstyled">
//                                             <li><Link to="#">Hawaii</Link></li>
//                                             <li><Link to="#">Istanbul</Link></li>
//                                             <li><Link to="#">San Diego</Link></li>
//                                             <li><Link to="#">Belgium</Link></li>
//                                             <li><Link to="#">New York</Link></li>
//                                             <li><Link to="#">Los Angeles</Link></li>
//                                         </ul>
//                                     </div>
//                                 </Col>
//                             </Row>
//                         </Col>
//                     </Row>

//                     <div className="footer-contact mt-5">
//                         <Row className="align-items-center">
//                             <Col xl={5}>
//                                 <ul className="social-icon list-inline">
//                                     <li className="list-inline-item">
//                                         <Link to="#"><FontAwesomeIcon icon={faFacebook} /></Link>
//                                     </li>
//                                     <li className="list-inline-item">
//                                         <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
//                                     </li>
//                                     <li className="list-inline-item">
//                                         <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
//                                     </li>
//                                     <li className="list-inline-item">
//                                         <Link to="#"><FontAwesomeIcon icon={faLinkedin} /></Link>
//                                     </li>
//                                     <li className="list-inline-item">
//                                         <Link to="#"><FontAwesomeIcon icon={faPinterest} /></Link>
//                                     </li>
//                                 </ul>
//                             </Col>

//                             <Col xl={7}>
//                                 <Row className="row-cols-md-3 row-cols-sm-2 row-cols-1 g-4">
//                                     <Col>
//                                         <div className="d-flex align-items-center">
//                                             <span className="avatar avatar-lg bg-primary rounded-circle flex-shrink-0">
//                                                 <FontAwesomeIcon icon={faHeadphones} />
//                                             </span>
//                                             <div className="ms-2">
//                                                 <p className="fs-14 mb-1">Customer Support</p>
//                                                 <h6 className="fw-medium text-light">+1 56589 54598</h6>
//                                             </div>
//                                         </div>
//                                     </Col>

//                                     <Col>
//                                         <div className="d-flex align-items-center">
//                                             <span className="avatar avatar-lg bg-secondary rounded-circle flex-shrink-0">
//                                                 <FontAwesomeIcon icon={faMessage} />
//                                             </span>
//                                             <div className="ms-2">
//                                                 <p className="fs-14 mb-1">Drop Us an Email</p>
//                                                 <h6 className="fw-medium text-light">[email&#160;protected]</h6>
//                                             </div>
//                                         </div>
//                                     </Col>

//                                     <Col>
//                                         <div className="d-flex align-items-center">
//                                             <span className="avatar avatar-lg bg-teal rounded-circle flex-shrink-0">
//                                                 <FontAwesomeIcon icon={faComment} />
//                                             </span>
//                                             <div className="ms-2">
//                                                 <p className="fs-14 mb-1">Toll Free</p>
//                                                 <h6 className="fw-medium text-light">+1 56569 54698</h6>
//                                             </div>
//                                         </div>
//                                     </Col>
//                                 </Row>
//                             </Col>
//                         </Row>
//                     </div>
//                 </Container>
//             </div>

//             {/* Footer Bottom */}
//             <div className="footer-bottom">
//                 <Container>
//                     <Row className="align-items-center">
//                         <Col lg={5}>
//                             <p className="mb-0">
//                                 Copyright &copy; 2025. All Rights Reserved, {' '}
//                                 <Link to="#" className="text-primary fw-medium">DreamsTour</Link>
//                             </p>
//                         </Col>

//                         <Col lg={7}>
//                             <ul className="policy-links list-inline d-flex justify-content-lg-end mb-0">
//                                 <li className="list-inline-item me-4"><Link to="#">Legal Notice</Link></li>
//                                 <li className="list-inline-item me-4"><Link to="/privacy-policy">Privacy Policy</Link></li>
//                                 <li className="list-inline-item me-4"><Link to="/terms-conditions">Terms and Conditions</Link></li>
//                                 <li className="list-inline-item me-4"><Link to="#">Refund Policy</Link></li>
//                                 <li className="list-inline-item"><Link to="/chat">Chat Support</Link></li>
//                             </ul>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         </footer>
//     );
// }

// CustomNavbar.jsx
// import React from 'react'
// import { Navbar, Nav, Container } from 'react-bootstrap'
// import { NavLink } from 'react-router-dom'
// import Logo from './Logo'
// import Hamburger from './Hamburger'

// const CustomNavbar = () => {
//     return (
//         <Navbar bg="light" expand="lg" className="mb-3">
//             <Container>
//                 <Navbar.Brand as={NavLink} to="/">
//                     <Logo />
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="navbar-nav">
//                     <Hamburger />
//                 </Navbar.Toggle>
//                 <Navbar.Collapse id="navbar-nav">
//                     <Nav className="ms-auto">
//                         <Nav.Link as={NavLink} to="/" end>
//                             Home
//                         </Nav.Link>
//                         <Nav.Link as={NavLink} to="/">
//                             Blogs
//                         </Nav.Link>
//                         <Nav.Link as={NavLink} to="/">
//                             Projects
//                         </Nav.Link>
//                         <Nav.Link as={NavLink} to="/">
//                             About
//                         </Nav.Link>
//                         <Nav.Link as={NavLink} to="/">
//                             Contact
//                         </Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     )
// }

// export default CustomNavbar


// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import Logo from './Logo';
// import Hamburger from './Hamburger';
// import './Navbar.css';

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false);

//   const toggleNavbar = () => setShowNavbar(!showNavbar);

//   // Optionally, hide the mobile menu when a link is clicked
//   const closeNavbar = () => setShowNavbar(false);

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <div className="nav-logo">
//           <Logo />
//         </div>
//         <div className="nav-menu-icon" onClick={toggleNavbar}>
//           <Hamburger />
//         </div>
//         <div className={`nav-menu ${showNavbar ? "active" : ""}`}>
//           <ul>
//             <li>
//               <NavLink to="/" onClick={closeNavbar}>
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/blogs" onClick={closeNavbar}>
//                 Blogs
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/projects" onClick={closeNavbar}>
//                 Projects
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" onClick={closeNavbar}>
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" onClick={closeNavbar}>
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// // import Logo from "./Logo";
// import logo from "../../assets/images/navbar/logo2.png"; 
// import Hamburger from "./Hamburger";
// import "./footer2.css";

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleNavbar = () => setShowNavbar(!showNavbar);
//   const closeNavbar = () => setShowNavbar(false);
//   const toggleDropdown = () => setShowDropdown(!showDropdown);

//   const Logo = () => (
//     <img src={logo} alt="Logo" className="nav-logo-img" />
//   );

//   return (
//     <nav className=" navbar">
//       <div className="nav-container">
//         <div className="nav-logo">
//           <Logo />
//         </div>
//         <div className="nav-menu-icon" onClick={toggleNavbar}>
//           <Hamburger />
//         </div>
//         <div className={`nav-menu ${showNavbar ? "active" : ""}`}>
//           <ul>
//             <li>
//               <NavLink to="/" onClick={closeNavbar}>
//                 Home
//               </NavLink>
//             </li>

//             <li
//               className="dropdown"
//               onMouseEnter={() => window.innerWidth > 600 && setShowDropdown(true)}
//               onMouseLeave={() => window.innerWidth > 600 && setShowDropdown(false)}
//             >
//               <div className="dropdown-header" onClick={toggleDropdown}>
//                 <NavLink to="/blogs">Services</NavLink>
//                 <span className="dropdown-arrow">{showDropdown ? "▲" : "▼"}</span>
//               </div>
//               <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
//                 <li>
//                   <NavLink to="/astrology-consultation" onClick={closeNavbar}>
//                   Astrology Consultation
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/vastu-consultation" onClick={closeNavbar}>
//                   Vastu Consultation    
//                   </NavLink>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <NavLink to="/appointment" onClick={closeNavbar}>
//               Appointment
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/aboutus" onClick={closeNavbar}>
//                 About Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/blog" onClick={closeNavbar}>
//                 Blog
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/help" onClick={closeNavbar}>
//                 Help
//               </NavLink>
//             </li>
//             <li
//               className="dropdown"
//               onMouseEnter={() => window.innerWidth > 600 && setShowDropdown(true)}
//               onMouseLeave={() => window.innerWidth > 600 && setShowDropdown(false)}
//             >
//               <div className="dropdown-header" onClick={toggleDropdown}>
//                 <NavLink to="/blogs">Gallery</NavLink>
//                 <span className="dropdown-arrow">{showDropdown ? "▲" : "▼"}</span>
//               </div>
//               <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
//                 <li>
//                   <NavLink to="/imagegallery" onClick={closeNavbar}>
//                   Image Gallery
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/videogallery" onClick={closeNavbar}>
//                   Video Gallery   
//                   </NavLink>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../assets/images/navbar/logo2.png";
// import Hamburger from "./Hamburger";
// import "./footer2.css";

// const Navbar = () => {
//     const [showNavbar, setShowNavbar] = useState(false);
//     const [showServicesDropdown, setShowServicesDropdown] = useState(false);
//     const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);

//     const toggleNavbar = () => setShowNavbar(!showNavbar);
//     const closeNavbar = () => setShowNavbar(false);

//     return (
//         <nav className="navbar">
//             <div className="nav-container">
//                 <div className="nav-logo">
//                     <img src={logo} alt="Logo" className="nav-logo-img" />
//                 </div>
//                 <div className="nav-menu-icon" onClick={toggleNavbar}>
//                     <Hamburger />
//                 </div>
//                 <div className={`nav-menu ${showNavbar ? "active" : ""}`}>
//                     <ul>
//                         <li>
//                             <NavLink to="/" onClick={closeNavbar}>
//                                 Home
//                             </NavLink>
//                         </li>

//                         {/* Services Dropdown */}
//                         <li
//                             className="dropdown"
//                             onMouseEnter={() => setShowServicesDropdown(true)}
//                             onMouseLeave={() => setShowServicesDropdown(false)}
//                         >
//                             <div className="dropdown-header">
//                                 <NavLink to="/blogs">Services</NavLink>
//                                 <span className="dropdown-arrow">{showServicesDropdown ? "▲" : "▼"}</span>
//                             </div>
//                             <ul className={`dropdown-menu ${showServicesDropdown ? "show" : ""}`}>
//                                 <li>
//                                     <NavLink to="/astrology-consultation" onClick={closeNavbar}>
//                                         Astrology Consultation
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/vastu-consultation" onClick={closeNavbar}>
//                                         Vastu Consultation
//                                     </NavLink>
//                                 </li>
//                             </ul>
//                         </li>

//                         <li>
//                             <NavLink to="/appointment" onClick={closeNavbar}>
//                                 Appointment
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/aboutus" onClick={closeNavbar}>
//                                 About Us
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/blog" onClick={closeNavbar}>
//                                 Blog
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/help" onClick={closeNavbar}>
//                                 Help
//                             </NavLink>
//                         </li>

//                         {/* Gallery Dropdown */}
//                         <li
//                             className="dropdown"
//                             onMouseEnter={() => setShowGalleryDropdown(true)}
//                             onMouseLeave={() => setShowGalleryDropdown(false)}
//                         >
//                             <div className="dropdown-header">
//                                 <NavLink to="/blogs">Gallery</NavLink>
//                                 <span className="dropdown-arrow">{showGalleryDropdown ? "▲" : "▼"}</span>
//                             </div>
//                             <ul className={`dropdown-menu ${showGalleryDropdown ? "show" : ""}`}>
//                                 <li>
//                                     <NavLink to="/imagegallery" onClick={closeNavbar}>
//                                         Image Gallery
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/videogallery" onClick={closeNavbar}>
//                                         Video Gallery
//                                     </NavLink>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li className="hoverrbtn">
//                             <a href="/sing-up">
//                                 <button className="c-button c-button2 c-button--gooey">
//                                     Sign/Login
//                                     <div className="c-button__blobs">
//                                         <div />
//                                         <div />
//                                         <div />
//                                     </div>
//                                 </button>
//                             </a>
//                         </li>

//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../assets/images/navbar/logo2.png";
// import Hamburger from "./Hamburger";
// import "./footer2.css";

// const Navbar = () => {
//     const [showNavbar, setShowNavbar] = useState(false);

//     const toggleNavbar = () => setShowNavbar(!showNavbar);

//     // Optionally, hide the mobile menu when a link is clicked
//     const closeNavbar = () => setShowNavbar(false);
//     return (
//         <nav className="navbar">
//             <div className="nav-container">
//                 <div className="nav-logo">
//                     <img src={logo} alt="Logo" className="nav-logo-img" />
//                 </div>
//                 <div className="nav-menu-icon" onClick={toggleNavbar}>
//                     <Hamburger />
//                 </div>
//                 <div className={`nav-menu ${showNavbar ? "active" : ""}`}>
//                     <ul>
//                         <li>
//                             <NavLink to="/" onClick={closeNavbar}>Home</NavLink>
//                         </li>






//                         <li><NavLink to="/appointment" onClick={closeNavbar}>Appointment</NavLink></li>
//                         <li><NavLink to="/aboutus" onClick={closeNavbar}>About Us</NavLink></li>
//                         <li><NavLink to="/blog" onClick={closeNavbar}>Blog</NavLink></li>
//                         <li><NavLink to="/help" onClick={closeNavbar}>Help</NavLink></li>



//                         <li className="hoverrbtn">
//                             <a href="/sign-up">
//                                 <button className="c-button c-button2 c-button--gooey">
//                                     Sign/Login
//                                     <div className="c-button__blobs">
//                                         <div />
//                                         <div />
//                                         <div />
//                                     </div>
//                                 </button>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import Logo from './Logo';
// import Hamburger from './Hamburger';
// import './footer2.css';

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false);

//   const toggleNavbar = () => setShowNavbar(!showNavbar);

//   // Optionally, hide the mobile menu when a link is clicked
//   const closeNavbar = () => setShowNavbar(false);

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <div className="nav-logo">
//           <Logo />
//         </div>
//         <div className="nav-menu-icon" onClick={toggleNavbar}>
//           <Hamburger />
//         </div>
//         <div className={`nav-menu ${showNavbar ? "active" : ""}`}>
//           <ul>
//             <li>
//               <NavLink to="/" onClick={closeNavbar}>
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/blogs" onClick={closeNavbar}>
//                 Blogs
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/projects" onClick={closeNavbar}>
//                 Projects
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" onClick={closeNavbar}>
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" onClick={closeNavbar}>
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Dropdown } from "react-bootstrap"; // Import Bootstrap Dropdown
// import logo from "../../assets/images/navbar/logo2.png";
// import Hamburger from "./Hamburger";
// import "./footer2.css";

// const Navbar = () => {
//     const [showNavbar, setShowNavbar] = useState(false);
//     const [showServices, setShowServices] = useState(false);
//     const [showGallery, setShowGallery] = useState(false);// Track hover state for Services dropdown

//     const toggleNavbar = () => setShowNavbar(!showNavbar);
//     const closeNavbar = () => setShowNavbar(false);


//     return (
//         <nav className="navbar">
//             <div className="nav-container">
//                 <div className="nav-logo">
//                     <img src={logo} alt="Logo" className="nav-logo-img" />
//                 </div>
//                 <div className="nav-menu-icon" onClick={toggleNavbar}>
//                     <Hamburger />
//                 </div>
//                 <div className={`nav-menu ${showNavbar ? "active" : ""}`}>
//                     <ul>
//                         <li>
//                             <NavLink to="/" onClick={closeNavbar}>Home</NavLink>
//                         </li>

//                         <li>
//                             <NavLink to="/appointment" onClick={closeNavbar}>Appointment</NavLink>
//                         </li>


//                         <li
//                             className=""
//                             onMouseEnter={() => setShowServices(true)}
//                             onMouseLeave={() => setShowServices(false)}>
//                             <Dropdown className="dropdown" show={showServices}>
//                                 <Dropdown.Toggle variant="link" id="dropdown-aboutus" className="nav-link">
//                                     Services
//                                 </Dropdown.Toggle>

//                                 <Dropdown.Menu>
//                                     <Dropdown.Item as="div">
//                                         <NavLink to="/aboutus" onClick={closeNavbar}>Astrology Consultation</NavLink>
//                                     </Dropdown.Item>
//                                     <Dropdown.Item as="div">
//                                         <NavLink to="/team" onClick={closeNavbar}>Vastu Consultation</NavLink>
//                                     </Dropdown.Item>

//                                 </Dropdown.Menu>
//                             </Dropdown>
//                         </li>

//                         <li>
//                             <NavLink to="/blog" onClick={closeNavbar}>Blog</NavLink>
//                         </li>

//                         <li>
//                             <NavLink to="/blog" onClick={closeNavbar}>About Us</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/help" onClick={closeNavbar}>Help</NavLink>
//                         </li>

//                         <li className="dropdown"
//                             onMouseEnter={() => setShowGallery(true)}
//                             onMouseLeave={() => setShowGallery(false)}>
//                             <Dropdown className="" show={showGallery}>
//                                 <Dropdown.Toggle variant="link" id="dropdown-aboutus" className="nav-link">
//                                     Gallery
//                                 </Dropdown.Toggle>

//                                 <Dropdown.Menu>
//                                     <Dropdown.Item as="div">
//                                         <NavLink to="/aboutus" onClick={closeNavbar}>Image Gallery</NavLink>
//                                     </Dropdown.Item>
//                                     <Dropdown.Item as="div">
//                                         <NavLink to="/team" onClick={closeNavbar}>Video Gallery</NavLink>
//                                     </Dropdown.Item>

//                                 </Dropdown.Menu>
//                             </Dropdown>
//                         </li>

//                         <li className="hoverrbtn">
//                             <a href="/sign-up">
//                                 <button className="c-button c-button2 c-button--gooey">
//                                     Sign/Login
//                                     <div className="c-button__blobs">
//                                         <div />
//                                         <div />
//                                         <div />
//                                     </div>
//                                 </button>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap"; // Import Bootstrap Dropdown
import logo from "../../assets/images/navbar/logo2.png";
import Hamburger from "./Hamburger";
import "./footer2.css";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleNavbar = () => setShowNavbar(!showNavbar);
    const closeNavbar = () => setShowNavbar(false);
    const [show, setShow] = useState(false);
    const profileName = "My profile"

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo" ><NavLink to="/">
                    <img src={logo} alt="Logo" className="nav-logo-img" /></NavLink>
                </div>
                <div className="nav-menu-icon" onClick={toggleNavbar}>
                    <Hamburger />
                </div>
                <div className={`nav-menu ${showNavbar ? "active" : ""}`}>
                    <ul>
                        <li><NavLink to="/" onClick={closeNavbar}>Home</NavLink></li>
                        <li><NavLink to="/appointment" onClick={closeNavbar}>Appointment</NavLink></li>

                        {/* Services Dropdown */}
                        <li
                            className="dropdown"
                            onMouseEnter={!isMobile ? () => setShowServices(true) : undefined}
                            onMouseLeave={!isMobile ? () => setShowServices(false) : undefined}
                        >
                            <Dropdown show={showServices} onClick={isMobile ? () => setShowServices(!showServices) : undefined}>
                                <Dropdown.Toggle variant="link" id="dropdown-services" className="nav-link">
                                    Services
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as="div">
                                        <NavLink to="/astrology-consultation" onClick={closeNavbar}>Astrology Consultation</NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item as="div">
                                        <NavLink to="/vastu-consultation" onClick={closeNavbar}>Vastu Consultation</NavLink>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>

                        <li><NavLink to="/blog" onClick={closeNavbar}>Blog</NavLink></li>
                        <li><NavLink to="/aboutus" onClick={closeNavbar}>About Us</NavLink></li>
                        <li><NavLink to="/help" onClick={closeNavbar}>Help</NavLink></li>

                        {/* Gallery Dropdown */}
                        <li
                            className="dropdown"
                            onMouseEnter={!isMobile ? () => setShowGallery(true) : undefined}
                            onMouseLeave={!isMobile ? () => setShowGallery(false) : undefined}
                        >
                            <Dropdown show={showGallery} onClick={isMobile ? () => setShowGallery(!showGallery) : undefined}>
                                <Dropdown.Toggle variant="link" id="dropdown-gallery" className="nav-link">
                                    Gallery
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as="div">
                                        <NavLink to="/imagegallerypage" onClick={closeNavbar}>Image Gallery</NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item as="div">
                                        <NavLink to="/videogallerypage" onClick={closeNavbar}>Video Gallery</NavLink>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>

                        {/* <div className="hoverrbtn">
                            <NavLink to="/sing-up">
                                <button className="c-button c-button2 c-button--gooey">
                                    Sign/Login
                                    <div className="c-button__blobs">
                                        <div />
                                        <div />
                                        <div />
                                    </div>
                                </button>
                            </NavLink>
                        </div> */}
                        <div className="position-relative"
                            onMouseEnter={() => setShow(true)}
                            onMouseLeave={() => setShow(false)}
                        >
                            <Dropdown show={show}>
                                {/* <Dropdown.Toggle variant="link" id="dropdown-basic">
                                    <img
                                        src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid" // Replace with actual profile image URL
                                        alt="Profile "
                                        className="rounded-circle profileimg"
                                        
                                    />
                                    
                                </Dropdown.Toggle> */}
                                <Dropdown  id="dropdown-basic" className="d-flex align-items-center">
                                    <img
                                        src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid"
                                        alt="Profile"
                                        className="rounded-circle profileimg"
                                        style={{  height: "25px" }} // Adjust size as needed
                                    />
                                    <span className="ms-2 fw-bold">{profileName}</span>
                                </Dropdown>

                                <Dropdown.Menu align="end" className="shadow">
                                    <Dropdown.Item href="#profile">👤 My Profile</Dropdown.Item>
                                    <Dropdown.Item href="#account">⚙️ Our Course</Dropdown.Item>
                                    <Dropdown.Item href="#widgets">📑 Appointment History</Dropdown.Item>

                                    <Dropdown.Item href="#password">🔑 Change Password</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#logout">🚪 Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;