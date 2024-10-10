import React from "react";
import instagram_icon from '../Assets/instagram_icon.png';
import footer_logo from '../Assets/logo1.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>FASHORA</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <a href="https://in.pinterest.com/search/pins/?q=shopping%20outfit&rs=typed" target="_blank" rel="noopener noreferrer">
                        <img src={pintester_icon} alt="Pinterest" />
                    </a>
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Rights reserved</p>
            </div>
        </div>
    )
}

export default Footer