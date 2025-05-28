import React from 'react';
import MainLayout from './MainLayout';
import harnd from "./../../images/shape/harnd.png";
import profile from "./../../images/1.png";
import wordpress from "./../../images/icon/wordpress.png";
import react from "./../../images/icon/react.png";
import laravel from "./../../images/icon/laravel.png";
import html from "./../../images/icon/html.png";
import css from "./../../images/icon/css.png";
import "../../css/slide.css";
import bootstrap from "./../../images/icon/bootstrap.png";
const Home = () => {
  return (
    <MainLayout
>
       <div id="home" class="banner-style-one-area default-padding">
            <div class="container_h">
                <div class="banner-top">
                    <div class="row align-center sss">
                        <div class="col-lg-7 conn pr-50 pr-md-15 pr-xs-15">
                            <div class="information">
                                <div class="content">
                                    <h2 className='harndd'>Hey <img src={harnd} alt="image not found"/> , I'm
                                    </h2>
                                    <h2>Umair Hussain </h2>
                                    <p>
                                        Pakistani Full Stack Web Developer.
                                    </p>
                                    <a href="https://www.linkedin.com/in/umair-hussain-872026278/" className="btn-standard mt-10 smooth-menu text-decoration-none ">Hire me Now</a>
                                </div>
                                <div class="profile-grid">
                                    <ul className="ser">
                                        <li className='smm'>
                                            <a className="smoth-menu" href='/service'>
                                                Services
                                                <div class="icon-list d-flex p-6">
                                                    <img src={react} alt="Image not Found"/>
                                                    <img src={wordpress} alt="Image not Found"/>
                                                    <img src={laravel} alt="Image not Found"/>
                                                    <img src={html} alt="Image not Found"/>
                                                    <img src={css} alt="Image not Found"/>
                                                    <img src={bootstrap} alt="Image not Found"/>
                                                    
                                                    
                                                </div>
                                               
                                            </a>


                                        </li>
                                        {/* <li>
                                            <a class="smooth-menu" href="#portfolio">
                                                Projects
                                                <img src="assets/img/shape/laptop.png" alt="Image Not Found"/>
                                            </a>
                                        </li> */}
                                        <li className='abou'>
                                            <a class="smooth-menu" href='/about'>
                                                About
                                                <strong>A</strong>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="thumb">
                                <img src={profile} alt="Image Not Found"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default Home
