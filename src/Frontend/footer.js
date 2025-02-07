import React from "react";

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: "#111",
            color: "#fff",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "30px 20px",
            flexWrap: "wrap",
            textAlign: "left",
            marginTop:"30px"
        }}>
            <div style={{ flex: 1, maxWidth: "300px", margin: "10px" }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#fdd835" }}>Innovative</h3>
                <p style={{ fontSize: "1rem", marginBottom: "20px", opacity: "0.8" }}>
                    Tailored solar solutions for energy efficiency.
                </p>
                <div>

                    <div>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"
                                style={{ fontSize: "24px", margin: "20px", cursor: "pointer", color: "#fdd835", transition: "color 0.3s ease-in-out" }}
                                onMouseOver={(e) => e.target.style.color = "#1877F2"}
                                onMouseOut={(e) => e.target.style.color = "#fdd835"}>
                            </i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"
                                style={{ fontSize: "24px", margin: "20px", cursor: "pointer", color: "#fdd835", transition: "color 0.3s ease-in-out" }}
                                onMouseOver={(e) => e.target.style.color = "#E4405F"}
                                onMouseOut={(e) => e.target.style.color = "#fdd835"}>
                            </i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"
                                style={{ fontSize: "24px", margin: "20px", cursor: "pointer", color: "#fdd835", transition: "color 0.3s ease-in-out" }}
                                onMouseOver={(e) => e.target.style.color = "#1DA1F2"}
                                onMouseOut={(e) => e.target.style.color = "#fdd835"}>
                            </i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"
                                style={{ fontSize: "24px", margin: "20px", cursor: "pointer", color: "#fdd835", transition: "color 0.3s ease-in-out" }}
                                onMouseOver={(e) => e.target.style.color = "#0077B5"}
                                onMouseOut={(e) => e.target.style.color = "#fdd835"}>
                            </i>
                        </a>
                    </div>



                </div>
                <p style={{ fontSize: "1rem", marginTop: "10px", opacity: "0.8" }}>© 2024. All rights reserved.</p>
            </div>

            <div style={{ flex: 1, maxWidth: "300px", margin: "10px" }}>
                <h4 style={{ fontSize: "1.2rem", marginBottom: "10px", color: "#fdd835" }}>Contact</h4>
                <p style={{ fontSize: "1rem", marginBottom: "10px", opacity: "0.8" }}>0217-2991202</p>
                <p style={{ fontSize: "1rem", marginBottom: "10px", opacity: "0.8" }}>+91-9822351390</p>
                <p style={{ fontSize: "1rem", marginBottom: "10px", opacity: "0.8" }}>sunbird.solar@gmail.com</p>
            </div>

            <div style={{ flex: 1, maxWidth: "300px", margin: "10px" }}>
                <h4 style={{ fontSize: "1.2rem", marginBottom: "10px", color: "#fdd835" }}>Contact Inquiry</h4>
                <form>
                    <input
                        type="email"
                        placeholder="Your email for inquiries"
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "none",
                            marginTop: "20px",
                            textAlign: "center",
                            fontSize: "1rem",
                            outline: "none"
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            width: "320px",
                            backgroundColor: "#fdd835",
                            color: "#111",
                            padding: "10px 15px",
                            marginTop: "20px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            transition: "background-color 0.3s ease",
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#ffc107"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#fdd800"}
                    >
                        Submit your inquiry now
                    </button>
                </form>
            </div>
        </footer>
    );
};

export default Footer;
