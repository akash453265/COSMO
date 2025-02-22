import React, { useState } from "react";
import "./form.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const App = () => {
    const [formData, setFormData] = useState({
        name: "",
        gender: "Male",
        dateOfBirth: "",
        timeOfBirth: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage("");

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments/book`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setResponseMessage("Appointment booked successfully!");
                setFormData({
                    name: "",
                    gender: "Male",
                    dateOfBirth: "",
                    timeOfBirth: "",
                    email: "",
                    message: "",
                });
            } else {
                const errorData = await response.json();
                setResponseMessage(errorData.message || "Failed to book the appointment.");
            }
        } catch (error) {
            setResponseMessage("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            style={{
                backgroundImage: "linear-gradient(rgb(15 11 62 / 85%), rgb(16 6 38)),  url('https://kitnew.moxcreative.com/astrologia/wp-content/uploads/sites/12/2022/11/astronomical-clock-in-prague-czech-republic-close-up-photo-e1668035871830.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                width: "100%",
            }}
        >
            <div className="container d-flex justify-content-center align-items-center text-light py-5">
                <div className="row">
                    <div className="col-md-6 p-4 form-border text-light">
                        <h4 className="form-top-text">Book Appointment</h4>
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <form className="fo" onSubmit={handleSubmit}>
                            <div className="mb-3 d-flex gap-2">
                                <div className="sizeee">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control formControl"
                                        placeholder="Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="sizeee">
                                    <label className="form-label">Gender</label>
                                    <select
                                        className="form-select form-control formControl"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3 d-flex gap-2">
                                <div className="sizeee">
                                    <label className="form-label">Date of Birth</label>
                                    <input
                                        type="date"
                                        className="form-control formControl"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="sizeee">
                                    <label className="form-label">Time of Birth</label>
                                    <input
                                        type="time"
                                        className="form-control formControl"
                                        name="timeOfBirth"
                                        value={formData.timeOfBirth}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control formControl"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea
                                    className="form-control formControl"
                                    placeholder="Message"
                                    rows="3"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className="">
                                <button
                                    className="c-button c-button--gooey formbt3"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? "Booking..." : "Book now"}
                                    <div className="c-button__blobs">
                                        <div />
                                        <div />
                                        <div />
                                    </div>
                                </button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="1.1"
                                    style={{ display: "block", height: 0, width: 0 }}
                                >
                                    <defs>
                                        <filter id="goo">
                                            <feGaussianBlur
                                                in="SourceGraphic"
                                                stdDeviation={10}
                                                result="blur"
                                            />
                                            <feColorMatrix
                                                in="blur"
                                                mode="matrix"
                                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                                result="goo"
                                            />
                                            <feBlend in="SourceGraphic" in2="goo" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </form>
                        {responseMessage && (
                            <p className="mt-3 text-light">{responseMessage}</p>
                        )}
                    </div>
                    <div className="col-md-6 p-4 text-light">
                        <h4 className="form-top-text">Astrology+ Subscription Includes:</h4>
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <ul className="list-unstyled">
                            <li className="mb-4">
                                <span className="form-icon me-2">
                                    <IoCheckmarkCircleOutline />
                                </span>
                                <b className="form-icon-text">Detailed Birth Chart</b> <br />
                                <span className="text-muted">
                                    Dictumst massa mauris vel primis et aenean euismod congue nisi elementum rutrum
                                </span>
                            </li>
                            <li className="mb-4">
                                <span className="form-icon me-2">
                                    <IoCheckmarkCircleOutline />
                                </span>
                                <b className="form-icon-text">Personalized Daily Horoscopes</b> <br />
                                <span className="text-muted me-2">
                                    Dictumst massa mauris vel primis et aenean euismod congue nisi elementum rutrum
                                </span>
                            </li>
                            <li className="mb-4">
                                <span className="form-icon me-2">
                                    <IoCheckmarkCircleOutline />
                                </span>
                                <b className="form-icon-text">Full-Moon Reading</b> <br />
                                <span className="text-muted">
                                    Dictumst massa mauris vel primis et aenean euismod congue nisi elementum rutrum
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default App;
