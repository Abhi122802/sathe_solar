import React from "react";
import "./about.css";

import { Link } from "react-router-dom";

const About = () => {

    const feedbackData = [
        {
            id: 1,
            stars: 5,
            message:
                "Sathe Engineering's expertise in solar systems has truly taken care of our energy consumption. Their support is exceptional!",
            location: "Bhogaon Village",
            imgSrc: "https://images.unsplash.com/photo-1605980413988-9ff24c537935?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw4fHxzb2xhciUyMGludmVydGVyc3xlbnwwfHx8fDE3Mjg4MDMzMDl8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=41&h=40",
        },
        {
            id: 2,
            stars: 5,
            message:
                "The solar solutions provided by Sathe Engineering exceeded our expectations. Highly recommended!",
            location: "Solapur City",
            imgSrc: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw0fHxzb2xhciUyMGludmVydGVyc3xlbnwwfHx8fDE3Mjg4MDMzMDl8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=39&h=38",
        },
    ];

    return (
        <div>

            <div className="about-container">
                <div className="text-section">
                    <h1>Sathe Solar and Power Controls</h1>
                    <p>
                        Since 2017, we have been installing high-quality solar rooftop on-grid net
                        metering systems, providing seamless integration and prompt after-sales
                        service. Our focus is on achieving customer satisfaction by significantly
                        reducing electricity bills and offering reliable, efficient solutions.
                        Additionally, we assist our customers in obtaining government subsidies
                        available for various rooftop solar systems.
                    </p>
                    <Link to="/contact">
                    <button className="contact-button">Contact</button>
                    </Link>
                   
                </div>
                <div className="image-section">
                    <img
                        src="https://c1.wallpaperflare.com/preview/469/311/638/solar-power-solar-panels-photovoltaics-panels.jpg"
                        alt="Solar Panels"
                        className="solar-image"
                    />
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
            <div className="customer-feedback">
                <h1>Customer Feedback</h1>
                <p>Explore our customer reviews and experiences with Sathe Solar Energies.</p>
                <div className="feedback-container">
                    {feedbackData.map((feedback) => (
                        <div className="feedback-card" key={feedback.id}>
                            <div className="stars">
                                {"★".repeat(feedback.stars)}{" "}
                                {"☆".repeat(5 - feedback.stars)} 
                            </div>
                            <p className="feedback-message">{feedback.message}</p>
                            <br/>
                            <div className="customer-info">
                                <img
                                    src={feedback.imgSrc}
                                    alt="Customer Avatar"
                                    className="customer-img"
                                />
                                <div>
                                    <span className="customer-label">Our Customer</span>
                                    <p>{feedback.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>





        </div>


    );
};

export default About;
