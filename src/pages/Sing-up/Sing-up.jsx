// import React from "react";
// import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
// import "./sing-up.css"

// function App() {
//   return (
//     <Container fluid className="d-flex justify-content-center align-items-center  singtop">
//       <Card className="text-white  p-5" style={{ borderRadius: "25px", width: "50rem" }}>
//         <Row className="g-4">
//           {/* Form Column */}
//           <Col md={6} className="d-flex flex-column align-items-center">
//             <h1 className="fw-bold mb-4">Sign Up</h1>

//             <Form className="w-100 text-white">
//               <Form.Group className="mb-3" controlId="formName">
//                 <Form.Label>Your Name</Form.Label>
//                 <Form.Control type="text" placeholder="Enter your name" />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formEmail">
//                 <Form.Label>Your Email</Form.Label>
//                 <Form.Control type="email" placeholder="Enter your email" />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Enter password" />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formRepeatPassword">
//                 <Form.Label>Repeat Your Password</Form.Label>
//                 <Form.Control type="password" placeholder="Repeat password" />
//               </Form.Group>

//               <Form.Check type="checkbox" label="Subscribe to our newsletter" className="mb-3" />

//               <Button variant="primary" size="lg" className="w-100">
//                 Register
//               </Button>
//             </Form>
//           </Col>

//           {/* Image Column */}
//           <Col md={6} className="d-flex align-items-center">
//             <Card.Img
//               src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
//               className="img-fluid"
//             />
//           </Col>
//         </Row>
//       </Card>
//     </Container>
//   );
// }

// export default App;

// import React from 'react'
// import { Col, Container } from 'react-bootstrap'
// import bg from "../../assets/images/singupbg/singupbg.png";


// function Singup() {
//   return (

//     <Container>
//       <Row>
//         <Col md={8} style={{
//           backgroundImage: `url(${bg})`,
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',  // Use 'cover' to make it responsive
//           backgroundPosition: 'center center',
//           height: '100vh',          // Adjust height as needed
//           width: '100%'
//         }}></Col>

//         <Col md={4}>
//         <div><h1>sdughsduihgudhguirdlh</h1></div>

//         </Col>
//       </Row>
//     </Container>


//   )
// }

// export default Singup


// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { FaGoogle, FaFacebook, FaEnvelope, FaWindowClose } from "react-icons/fa";

// import "./sing-up.css"
// import bg from "../../assets/images/singupbg/singupbg.png"; 
// import logo from '../../assets/images/navbar/logo2.png';
// import { Link } from "react-router-dom";

// const SignIn = () => {
//   return (
//     <div className="signin-page justify-content-center align-items-center"

//     >
//       <Container className=" justify-content-center align-items-center"
//       >
//         <Row className="signin-box  rounded shadow-lg py-0 ">
//           <Link to="/">
//             <div className="backtohome">
//               <FaWindowClose />
//             </div>
//           </Link>


//           <Col md={6} className=" d-md-block text-light text-center " style={{
//             backgroundImage: `url(${bg})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             minHeight: "100vh",
//           }}>
//             {/* <h2 className="fw-bold">SIGN IN TO YOUR <span className="text-primary">ADVENTURE!</span></h2> */}
//           </Col>

//           {/* Right Side - Form Section */}
//           <Col md={6} className=" text-light  rounded Right-Side">

//             <div className="Right-Side2 ">
//               <div className="Right-Side2img"> <img
//                 src={logo}
//                 height="60"
//                 className="d-inline-block  "
//                 alt="Logo"
//               /></div>
//               {/* <img
//               src={logo}
//               height="40"
//               className="d-inline-block Right-Side2img "
//               alt="Logo"
//             /> */}
//               <h3 className="fw-bold2 py-5">SIGN IN</h3>
//               <p>Sign in with your email address</p>

//               <Form>
//                 <Form.Group controlId="email" className="mb-3">
//                   <div className="input-group">
//                     <span className="input-group-text bg-transparent text-light border-light">
//                       <FaEnvelope />
//                     </span>
//                     <Form.Control type="email" placeholder="Yourname@gmail.com" className="bg-transparent text-light border-light" />
//                   </div>
//                 </Form.Group>

//                 {/* <Button variant="primary" className="w-100 py-2">Sign Up</Button> */}
//                 <div className=''>
//                   <a href="/sing-up" >
//                     <button className=" w-100 py-2  h5 c-button c-button2 c-button--gooey">
//                       Sign Up
//                       <div className="c-button__blobs">
//                         <div />
//                         <div />
//                         <div />
//                       </div>
//                     </button>
//                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
//                       <defs>
//                         <filter id="goo">
//                           <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
//                           <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
//                           <feBlend in="SourceGraphic" in2="goo" />
//                         </filter>
//                       </defs>
//                     </svg>
//                   </a>
//                 </div>
//               </Form>

//               <p className="text-center mt-3">Or continue with</p>
//               <div className="d-flex justify-content-center gap-3">
//                 <Button variant="outline-light" className="d-flex align-items-center gap-2">
//                   <FaGoogle /> Google
//                 </Button>
//                 <Button variant="outline-light" className="d-flex align-items-center gap-2">
//                   <FaFacebook /> Facebook
//                 </Button>
//               </div>

//               <p className="text-center mt-3 small">By registering, you agree to our <a href="#" className="text-primary">Terms and Conditions</a></p>
//             </div></Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default SignIn;


import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ToggleButton, ButtonGroup } from "react-bootstrap";
// import { FaGoogle, FaFacebook, FaEnvelope, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import bg from "../../assets/images/singupbg/singupbg.png"; // Ensure correct path
import logo from "../../assets/images/navbar/logo2.png";
import "./sing-up.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [dob, setDob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!isLogin) {
  //     // Validation: Ensure passwords match for signup
  //     if (formData.password !== formData.confirmPassword) {
  //       alert("Passwords do not match!");
  //       return;
  //     }

  //     const signupData = {
  //       username: formData.name,
  //       email: formData.email,
  //       phone: formData.number,
  //       dob: dob ? dob.toISOString() : null,
  //       password: formData.password,
  //     };

  //     try {
  //       const response = await fetch("http://localhost:5000/api/users/register", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(signupData),
  //       });

  //       const result = await response.json();

  //       if (response.ok) {
  //         alert("Signup successful!");
  //         console.log("User data:", result);
  //       } else {
  //         alert("Signup failed: " + result.message);
  //       }
  //     } catch (error) {
  //       console.error("Error during signup:", error);
  //       alert("An error occurred. Please try again.");
  //     }
  //   } else {
  //     // Handle login logic here if needed
  //     alert("Login functionality not implemented yet.");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isLogin) {
      // Validation: Ensure passwords match for signup
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
  
      const signupData = {
        username: formData.name,
        email: formData.email,
        phone: formData.number,
        dob: dob ? dob.toISOString() : null,
        password: formData.password,
      };
  
      try {
        const response = await fetch("http://localhost:5000/api/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupData),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          alert("Signup successful!");
          console.log("User data:", result);
        } else {
          alert("Signup failed: " + result.message);
        }
      } catch (error) {
        console.error("Error during signup:", error);
        alert("An error occurred. Please try again.");
      }
    } else {
      // Login functionality
      const loginData = {
        email: formData.email,
        password: formData.password,
      };
  
      try {
        const response = await fetch("http://localhost:5000/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          alert("Login successful!");
          localStorage.setItem("token", result.token);
          localStorage.setItem("user", JSON.stringify(result.user)); // Save the user object as a string
          window.location.href = '/';
  
          // Optionally, save the token or user data to localStorage/sessionStorage
          // localStorage.setItem("token", result.token);
        } else {
          alert("Login failed: " + result.message);
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };
  return (
    <div className=" signin-page d-flex justify-content-center align-items-center">
      <div className="fullwidth ">


        <Row className="signin-box rounded shadow-lg py-0">
          {/* Close Button */}

          {/* Left Side - Background Image */}
          <Col
            md={6}
            className="d-none d-md-block text-light text-center"
            
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100vh",
            }}
            
          >
            <Link to="/" className="nonee">
            <Button className="backtohome">
            
            Back to home
          </Button >
           </Link>
          </Col>

          {/* Right Side - Form Section */}
          <Col md={6} className="text-light  rounded-l-full Right-Side">
            <div className="Right-Side2 mt-5">
              <div className="Right-Side2img ">
                <img src={logo} height="60" className="d-inline-block" alt="Logo" />
              </div>
              {/* <h3 className="fw-bold2 py-3">{isLogin ? "SIGN IN" : "SIGN UP"}</h3> */}
              {/* <p>{isLogin ? "Sign in with your email address" : "Create an account"}</p> */}

              {/* Toggle Login/Signup */}
              <div className="py-5">
                <ButtonGroup className="buttongroup py-3 ">
                  {/* <ToggleButton
                  id="login-toggle"
                  type="radio"
                  variant={isLogin ? "primary" : "outline-primary"}
                  checked={isLogin}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </ToggleButton>
                <ToggleButton
                  id="signup-toggle"
                  type="radio"
                  variant={!isLogin ? "primary" : "outline-primary"}
                  checked={!isLogin}
                  onClick={() => setIsLogin(false)}
                >
                  Signup
                </ToggleButton> */}

                  <ToggleButton
                    id="login-toggle"
                    type="radio"
                    variant="outline-light"
                    style={{ backgroundColor: isLogin ? "#c36" : "transparent", color: isLogin ? "#fff" : "#c36", borderColor: "#c36" }}
                    checked={isLogin}
                    onClick={() => setIsLogin(true)}
                    className="login-toggle2"
                  >
                    Login
                  </ToggleButton>

                  <ToggleButton
                    id="signup-toggle"
                    type="radio"
                    variant="outline-light"
                    style={{ backgroundColor: !isLogin ? "#c36" : "transparent", color: !isLogin ? "#fff" : "#c36", borderColor: "#c36" }}
                    checked={!isLogin}
                    onClick={() => setIsLogin(false)}

                  >
                    Signup
                  </ToggleButton>

                </ButtonGroup>

               {/* Form */}
               <Form className="autofrom" onSubmit={handleSubmit}>
                  {!isLogin && (
                    <Form.Group className="mb-3 formgroup">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="formControl border-light"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  )}
                  <Form.Group controlId="email" className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className="formControl border-light"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {!isLogin && (
                    <Form.Group className="mb-3 formgroup">
                      <Form.Control
                        type="number"
                        name="number"
                        placeholder="Enter Your Number"
                        className="formControl border-light"
                        required
                        value={formData.number}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  )}
                  {!isLogin && (
                    <Form.Group className="mb-3 formgroup">
                      <DatePicker
                        selected={dob}
                        onChange={(date) => setDob(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Enter Your Date of Birth"
                        className="formControl border-light form-control"
                        required
                      />
                    </Form.Group>
                  )}
                  <Form.Group className="mb-3 formgroup">
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      className="formControl border-light"
                      required
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  {!isLogin && (
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="formControl border-light"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  )}
                  <Button type="submit" className="w-100 py-2 sing-up-button">
                    {isLogin ? "Login" : "Signup"}
                  </Button>
                </Form>

              </div>

              {/* Social Login */}
              {/* <p className="text-center mt-3">Or continue with</p>
              <div className="d-flex justify-content-center gap-3">
                <Button variant="outline-light" className="d-flex align-items-center gap-2">
                  <FaGoogle /> Google
                </Button>
                <Button variant="outline-light" className="d-flex align-items-center gap-2">
                  <FaFacebook /> Facebook
                </Button>
              </div> */}
              {/* {isLogin && (
                <p className="text-center mt-3 small">
                  Do you have a Account   <a className="text-primary">Sing up</a>
                </p>
              )} */}

              <div
                
                
                checked={!isLogin}
                    onClick={() => setIsLogin(false)}
                
              >
                <p className="text-center mt-3 small">
                Don’t have an account?  <a className="text-primary">Sing up</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignIn;
