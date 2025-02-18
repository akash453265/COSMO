// import { useState } from "react";
// import { Container, Form, Button, ToggleButton, ButtonGroup } from "react-bootstrap";
// import "./AuthForm.css";

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <Container className="auth-wrapper">
//       {/* Toggle Login/Signup */}
//       <ButtonGroup className="w-100 mb-3">
//         <ToggleButton
//           id="login-toggle"
//           type="radio"
//           variant={isLogin ? "primary" : "outline-primary"}
//           checked={isLogin}
//           onClick={() => setIsLogin(true)}
//         >
//           Login
//         </ToggleButton>
//         <ToggleButton
//           id="signup-toggle"
//           type="radio"
//           variant={!isLogin ? "primary" : "outline-primary"}
//           checked={!isLogin}
//           onClick={() => setIsLogin(false)}
//         >
//           Signup
//         </ToggleButton>
//       </ButtonGroup>

//       {/* Forms */}
//       <div className={`form-container ${isLogin ? "login-active" : "signup-active"}`}>
//         {isLogin ? (
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Control type="email" placeholder="Email Address" required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control type="password" placeholder="Password" required />
//             </Form.Group>
//             <div className="text-end mb-3">
//               <a href="#">Forgot password?</a>
//             </div>
//             <Button type="submit" className="w-100">
//               Login
//             </Button>
//             <div className="text-center mt-3">
//               Not a member? <a href="#" onClick={() => setIsLogin(false)}>Signup now</a>
//             </div>
//           </Form>
//         ) : (
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Control type="email" placeholder="Email Address" required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control type="password" placeholder="Password" required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control type="password" placeholder="Confirm Password" required />
//             </Form.Group>
//             <Button type="submit" className="w-100">
//               Signup
//             </Button>
//           </Form>
//         )}
//       </div>
//     </Container>
//   );
// };

// export default AuthForm;


import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ToggleButton, ButtonGroup } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaEnvelope, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import bg from "../../assets/images/singupbg/singupbg.png"; // Ensure correct path
import logo from "../../assets/images/navbar/logo2.png";
import "./AuthForm.css";

const SignIn = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="signin-page d-flex justify-content-center align-items-center">
            <Container className="justify-content-center align-items-center">
                <Row className="signin-box rounded shadow-lg py-0">
                    {/* Close Button */}
                    <Link to="/">
                        <div className="backtohome">
                            <FaWindowClose />
                        </div>
                    </Link>

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
                    ></Col>

                    {/* Right Side - Form Section */}
                    <Col md={6} className="text-light  rounded-l-full Right-Side">
                        <div className="Right-Side2">
                            <div className="Right-Side2img">
                                <img src={logo} height="60" className="d-inline-block" alt="Logo" />
                            </div>
                            <h3 className="fw-bold2 py-3">{isLogin ? "SIGN IN" : "SIGN UP"}</h3>
                            <p>{isLogin ? "Sign in with your email address" : "Create an account"}</p>

                            {/* Toggle Login/Signup */}
                            <ButtonGroup className="w-100 mb-3">
                                <ToggleButton
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
                                </ToggleButton>
                            </ButtonGroup>

                            {/* Form */}
                            <Form className="autofrom">
                                <Form.Group controlId="email" className="mb-3">
                                    <div className="input-group">
                                        <span className="input-group-text bg-transparent text-light border-light">
                                            <FaEnvelope />
                                        </span>
                                        <Form.Control
                                            type="email"
                                            placeholder="Yourname@gmail.com"
                                            className="bg-transparent text-light border-light"
                                            required
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        className="bg-transparent text-light border-light"
                                        required
                                    />
                                </Form.Group>

                                {!isLogin && (
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirm Password"
                                            className="bg-transparent text-light border-white"
                                            required
                                        />
                                    </Form.Group>
                                )}

                                <Button type="submit" className="w-100 py-2">
                                    {isLogin ? "Login" : "Signup"}
                                </Button>

                                {isLogin && (
                                    <div className="text-end mt-2">
                                        <a href="#">Forgot password?</a>
                                    </div>
                                )}
                            </Form>

                            {/* Social Login */}
                            <p className="text-center mt-3">Or continue with</p>
                            <div className="d-flex justify-content-center gap-3">
                                <Button variant="outline-light" className="d-flex align-items-center gap-2">
                                    <FaGoogle /> Google
                                </Button>
                                <Button variant="outline-light" className="d-flex align-items-center gap-2">
                                    <FaFacebook /> Facebook
                                </Button>
                            </div>

                            <p className="text-center mt-3 small">
                                By registering, you agree to our <a href="#" className="text-primary">Terms and Conditions</a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignIn;
