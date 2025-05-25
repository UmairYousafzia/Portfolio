import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from "./../../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <>

        <header>
            <nav
                class="navbar mobile-sidenav onepage-menu mobile-nav-only attr-border navbar-sticky navbar-default validnavs navbar-fixed dark no-background">


                <div class="container_p d-flex justify-content-between align-items-center">

                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle px-5" data-toggle="collapse" data-target="#navbar-menu">
                          <FontAwesomeIcon icon={faBars} style={{ fontSize: '24px', color: '#fff' }} />

                        </button>
                       
                    </div>

                    <div class="collapse navbar-collapse" id="navbar-menu">

                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <FontAwesomeIcon icon={faTimes}/>
                        </button>

                        <ul class="nav navbar-nav navbar-right mt-6" data-in="fadeInDown" data-out="fadeOutUp">
                            <li>
                                <a class="smooth-menu" href="#home">Home</a>
                            </li>
                            <li>
                                <a class="smooth-menu" href="#services">Services</a>
                            </li>
                            <li>
                                <a class="smooth-menu" href="#about">About</a>
                            </li>
                            <li>
                                <a class="smooth-menu" href="#portfolio">Portfolio</a>
                            </li>
                           
                            <li>
                                <a class="smooth-menu" href="#contact">contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="overlay-screen"></div>
            </nav>
        </header> 
    </>
  )
}

export default Header
