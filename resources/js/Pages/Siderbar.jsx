import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "./../../images/logo.png";
import sidemenu from "./../../images/menu-white.svg";
import "../../css/slide.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "@inertiajs/react";
export default function SideNavbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
        console.log("clicked");
    };
    return (
        <div className="side-navbar-items">
            <div className="nav-wrapper">
                <div className="side-navbar">
                    <div className="side-nav-menu">
                        <Link className="smooth-menu" href="#home">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    {/* Toggle Button */}
                    <div
                        className="nav-toggle"
                        onClick={toggleNav}
                        style={{ cursor: "pointer" }}
                    >
                        <img src={sidemenu} alt="Menu" />
                    </div>
                    {/* Social icons */}
                    <div className="author-social">
                        <input
                            type="checkbox"
                            id="toggle"
                            className="share-toggle"
                            hidden
                        />
                        <label htmlFor="toggle" className="share-button">
                            <i className="fas fa-plus"></i>
                        </label>
                        <a href="https://www.linkedin.com/in/umair-hussain-872026278/" target="_blank" className="share-icon facebook">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://x.com/umairsb84?t=yc69QVijpQPmf-ajDbkBsQ&s=08" target="_blank" className="share-icon twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" target="_blank" className="share-icon instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            {/* Sidebar menu */}
            <div className={`container ${isNavOpen ? "open" : ""}`}>
                <div class="nav-side">
                    <div class="nav-items simple-menu">
                        <div
                        className="nav-toggle"
                        onClick={toggleNav}
                        style={{ cursor: "pointer" }}
                        >
                             <FontAwesomeIcon icon={faTimes}/>
                            
                            </div>

                        <div class="nav-item dropdown">
                            <Link class="smooth-menu" href='/'>Home</Link>
                            <div class="nav-item-wrapper"></div>
                        </div>
                        <div class="nav-item">
                            <Link class="smooth-menu" href='/service'>Services</Link>
                            <div class="nav-item-wrapper"></div>
                        </div>
                        <div class="nav-item">
                            <Link class="smooth-menu" href='/about'>About</Link>
                            <div class="nav-item-wrapper"></div>
                        </div>
                        <div class="nav-item">
                            <a class="smooth-menu" href='/portfolio'>Portfolio</a>
                            <div class="nav-item-wrapper"></div>
                        </div>
                        
                        <div class="nav-item">
                            <Link class="smooth-menu" href='/contact-us'>Contact</Link>
                            <div class="nav-item-wrapper"></div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
