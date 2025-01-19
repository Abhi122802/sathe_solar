import React, { useState } from "react";
import "./contact.css"; 

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        contactNumber: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/submit-form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert("Form submitted successfully!");
                setFormData({ firstName: "", contactNumber: "", email: "", message: "" });
            } else {
                alert("Failed to submit form.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div>
            <div className="part1-container">
                <div className="form-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <h2>Contact Us</h2>
                        <p>Get in touch for innovative solar energy solutions and inquiries.</p>
                        <div className="form-group">
                            <label htmlFor="firstName">Your First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactNumber">Contact Number / Mobile Number*</label>
                            <input
                                type="text"
                                id="contactNumber"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                placeholder="Contact Number/ Mobile Number"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email Address*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message*</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your message here"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            Submit Your Inquiry
                        </button>
                    </form>
                </div>
            </div>

            
            <div className="location-container">
                <div className="location-info">
                    <h2>Location Info</h2>
                    <p>
                        Sathe Solar and Power Controls is based in Chincholikati, Maharashtra,
                        specializing in solar energy solutions and power electronics for
                        residential and industrial applications.
                    </p>
                    <div>
                        <h4>Address</h4>
                        <ul>
                            <li>QR33+GWQ, Chincholikati, Maharashtra, India</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li>0217-2991202 / +91-9822351390</li>
                            <li>sunbird.solar@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Hours</h4>
                        <ul>
                            <li>10 AM - 6 PM</li>
                        </ul>
                    </div>
                </div>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49125.62156101589!2d75.77137268391797!3d17.569839662264847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5df1155a00c59%3A0x9a8b7ed875d51b17!2sQR33%2BGWQ%2C%20Chincholikati%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1673093202043!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>

            <footer className="footer-container">
                <div className="footer-section">
                    <h3>Innovative</h3>
                    <p>Tailored solar solutions for energy efficiency.</p>
                    <div className="social-icons">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-x-twitter"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                    <p>© 2024. All rights reserved.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>0217-2991202</p>
                    <p>+91-9822351390</p>
                    <p>sunbird.solar@gmail.com</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Inquiry</h4>
                    <form>
                        <input
                            type="email"
                            placeholder="Your email for inquiries"
                            className="email-input"
                        />
                        <button type="submit" className="submit-button">
                            Submit your inquiry now
                        </button>
                    </form>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
