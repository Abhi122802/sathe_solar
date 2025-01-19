import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
    return (
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
    );
};

export default Home;
