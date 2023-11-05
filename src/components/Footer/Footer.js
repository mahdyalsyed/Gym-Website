import React from "react";
import "./Footer.css";
import Github from "../../assas/github.png";
import Instagram from "../../assas/instagram.png";
import LinkedIn from "../../assas/linkedin.png";
import Logo from "../../assas/logo.png";

const Footer = () => {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>

            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    );
};

export default Footer;
