import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

import PowerManagementImage1 from '../../assets/img1.jpg';
import PowerManagementImage2 from '../../assets/img2.jpg';
import PowerManagementImage3 from '../../assets/img3.jpg';
import PowerManagementImage4 from '../../assets/img4.jpg';




const Home = () => {
    return (
        <div>
            <div className="part1">
                <div className="part1-content">
                    <h1>Harnessing Solar<br /> Energy for You</h1>
                    <p>Expertly designed Solar systems for residential and industrial applications.</p>
                    <div className="part1-buttons">
                        <Link to="/contact">
                            <button className="part1-btn contact">Contact</button>
                        </Link>
                        <Link to="/learn">
                            <button className="part1-btn learn">Learn</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="part2">
                <div className="part2-content">
                    <h1>Empowering Renewable Energy Solutions</h1>
                    <p>
                        At Sathe Solar and Power Controls, we specialize in innovative solar
                        energy solutions, focusing on high-efficiency inverters and power
                        management systems for residential and industrial applications.
                    </p>
                    <Link to="/about">
                        <button className="explore-btn">Explore</button>
                    </Link>

                </div>
                <div className="part2-image">
                    <img
                        src={PowerManagementImage3}
                        alt="Solar Panels"
                        className="solar-image"
                    />

                    <div className="part2-stats">
                        <h2>150+</h2>
                        <p>Reliable Solutions</p>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="solar-systems-container">
                {/* Power Management Systems */}
                <div className="system-card2">
                    <h2>Power Management Systems</h2>
                    <p>
                        Tailored solutions that enhance energy efficiency and contribute to sustainable growth in the energy sector.
                    </p>
                    <img
                        src={PowerManagementImage2}
                        alt="Power Management Systems"
                        className="system-image"
                    />
                </div>

                {/* High-Efficiency Systems */}
                <div className="system-card2">
                    <h2>High-Efficiency Systems</h2>
                    <p>
                        Our system ensures optimal performance and reliability for both residential and industrial solar applications.
                    </p>
                    <img
                        src={PowerManagementImage1}
                        alt="High-Efficiency Systems"
                        className="system-image"
                    />
                </div>
            </div>

            <br />


            <div className="testimonials-container">
                <div className="testimonial">
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-text">
                        Sathe Solar and Power Controls provided exceptional service and reliable solar solutions for our energy needs. Highly recommended!
                    </p>
                    <div className="customer-info">
                        <img
                            src={PowerManagementImage4}
                            alt="Customer"
                            className="customer-image"
                        />
                        <p>Our Customer</p>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-text">
                        The high-efficiency system from Sathe Solar and Power Controls took care of our energy consumption needs and significantly reduced our bills!
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

            <br />

           


        </div>

    );
};

export default Home;
