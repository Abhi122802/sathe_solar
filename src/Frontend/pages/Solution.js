import React from "react";
import "./Solution.css";
import "./animations.css";

import PowerManagementImage1 from '../../assets/img1.jpg';
import PowerManagementImage2 from '../../assets/img2.jpg';
import PowerManagementImage3 from '../../assets/img3.jpg';
import PowerManagementImage4 from '../../assets/img4.jpg';

const Contact = () => {
    const solutions = [
        {
            id: 1,
            title: "High-Efficiency Systems",
            description:
                "Our solar systems ensure optimal energy conversion and enhanced efficiency for various applications and needs.",
            imgSrc: "https://images.unsplash.com/photo-1451807278147-2e0e1e90b24d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyM3x8c29sYXIlMjBpbnZlcnRlcnN8ZW58MHx8fHwxNzI4ODAzMzA5fDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=280", // Replace with the actual image path
        },
        {
            id: 2,
            title: "Power Management Systems",
            description:
                "We offer tailored power management solutions that optimize energy usage and contribute to sustainability goals.",
            imgSrc: "https://images.unsplash.com/photo-1545209463-e2825498edbf?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyMnx8c29sYXIlMjBpbnZlcnRlcnN8ZW58MHx8fHwxNzI4ODAzMzA5fDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=223", // Replace with the actual image path
        },
        {
            id: 3,
            title: "Customized Solutions",
            description:
                "Expert team delivering reliable, customer-focused solar solutions that enhance energy efficiency in every project.",
            imgSrc: "https://images.unsplash.com/photo-1583345237708-add35a664d77?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxNnx8c29sYXIlMjBpbnZlcnRlcnN8ZW58MHx8fHwxNzI4ODAzMzA5fDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=224", // Replace with the actual image path
        },
    ];
    return (
        <div>

            <div className="solar-solutions">
                <h1>Solar Solutions</h1>
                <p>
                    Innovative solar energy solutions for residential and industrial applications.
                </p>
                <div className="solutions-container">
                    {/* High-Efficiency Systems */}
                    <div className="solution-card1">
                        <img src={PowerManagementImage2} alt="High-Efficiency Systems" />
                        <h2>High-Efficiency Systems</h2>
                        <p>
                            Reliable power management systems enhance energy efficiency significantly.
                        </p>
                    </div>

                    {/* Tailored Solutions */}
                    <div className="solution-card1">
                        <img src={PowerManagementImage4} alt="Tailored Solutions" />
                        <h2>Tailored Solutions</h2>
                        <p>
                            Customized energy solutions boosting renewable energy growth in India.
                        </p>
                    </div>
                </div>
            </div>

            <div className="solar-solutions">
                <div className="solutions-container">
                    {/* Expert Team */}
                    <div className="solution-card1">
                        <img src={PowerManagementImage3} alt="High-Efficiency Systems" />
                        <h2>Expert Team</h2>
                        <p>
                        Dedicated professionals ensuring highest industry standards in products.
                        </p>
                    </div>

                    {/* Customer Satisfaction */}
                    <div className="solution-card1">
                        <img src={PowerManagementImage1} alt="Tailored Solutions" />
                        <h2>Customer Satisfaction</h2>
                        <p>
                        Committed to delivering reliability and exceptional client experiences.
                        </p>
                    </div>
                </div>
            </div>



            <div className="solar-solutions">
                <h1>Solar Energy Solutions</h1>
                <p>
                    Sathe Solar and Power Controls provides innovative solar energy
                    products for residential and industrial applications across India.
                </p>
                <div className="solutions-container">
                    {solutions.map((solution) => (
                        <div className="solution-card" key={solution.id}>
                            <img
                                src={solution.imgSrc}
                                alt={solution.title}
                                className="solution-image"
                            />
                            <h3>{solution.title}</h3>
                            <p>{solution.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="customer-review">
                <div className="review-content">
                    <div className="stars">★★★★★</div>
                    <p className="review-text">
                        Sathe Solar and Power Controls provided exceptional solar solutions
                        that significantly improved our energy efficiency. Their expertise in
                        inverter design is truly commendable. Highly recommend their
                        services!
                    </p>
                    <div className="customer-info">
                        <img
                            src={PowerManagementImage1}
                            alt="Customer"
                            className="customer-image"
                        />
                        <p>Our Customer</p>
                    </div>
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
