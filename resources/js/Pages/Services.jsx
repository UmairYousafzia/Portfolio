import React from "react";
import MainLayout from "./MainLayout";
import wordpress from "./../../images/icon/wordpress.png";
import react from "./../../images/icon/react.png";
import laravel from "./../../images/icon/laravel.png";
import js from "./../../images/icon/js.png";
import html from "./../../images/icon/html.png";
import css from "./../../images/icon/css.png";
import banner from "./../../images/banner.png";
const Services = () => {
    return (
        <MainLayout>
            <div
                id="services"
                class="services-style-one-area default-padding-top mb--50"
            >
                <div class="container_hh">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="left-heading mb-50">
                                <h4 class="sub-title">What i do</h4>
                                <h2 class="title">My Specializations</h2>
                                <div class="devider"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container_hh">
                    <div class="row">
                        <div class="service-style-one col-lg-6 col-md-6">
                            <div class="service-style-one-item">
                                <div class="thumb">
                                    <img src={laravel} alt="Icon" />
                                </div>
                                <div class="info">
                                    <h4>
                                        <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#serviceSingleModal"
                                        >
                                            BackEnd Developer
                                        </a>
                                    </h4>
                                    <p>
                                        Building dynamic and secure web
                                        applications using Laravel with RESTful
                                        APIs, authentication, and modern
                                        back-end practices.
                                    </p>
                                    <div class="bottom">
                                        <span>Projects</span>
                                        <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#serviceSingleModal"
                                        >
                                            <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="service-style-one col-lg-6 col-md-6">
                            <div class="service-style-one-item">
                                <div class="thumb">
                                    <img src={react} alt="Icon" />
                                </div>
                                <div class="info">
                                    <h4>
                                        <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#serviceSingleModal"
                                        >
                                            Frontend Developer
                                        </a>
                                    </h4>
                                    <p>
                                        Creating responsive and user-friendly
                                        interfaces with React JS, HTML, CSS,
                                        JavaScript, and Bootstrap.
                                    </p>
                                    <div class="bottom">
                                        <span> Projects</span>
                                        <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#serviceSingleModal"
                                        >
                                            <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="service-style-one col-lg-6 col-md-6">
                            <div class="service-style-one-item">
                                <div class="thumb">
                                    <img src={wordpress} alt="Icon" />
                                </div>
                                <div class="info">
                                    <h4>
                                        <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#serviceSingleModal"
                                        >
                                            WordPress Developer
                                        </a>
                                    </h4>
                                    <p>
                                        Designing and customizing WordPress
                                        websites with responsive themes,
                                        plugins, and performance optimization.
                                    </p>
                                    <div class="bottom">
                                        <span>Projects</span>
                                        <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#serviceSingleModal"
                                        >
                                            <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="service-style-one col-lg-6 col-md-6">
                            <div class="service-style-one-item button">
                                <a class="hire-btn" href="#contact">
                                    hire me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="modal fade"
                    id="serviceSingleModal"
                    tabindex="-1"
                    aria-hidden="true"
                >
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="modal-header">
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>

                                <div class="services-details-area">
                                    <div class="container_h">
                                        <div class="services-details-items">
                                            <div class="row">
                                                <div class="col-xl-12 services-single-content">
                                                    <div class="service-single-thumb">
                                                        <img
                                                            src={banner}
                                                            alt="Thumb"
                                                        />
                                                    </div>
                                                    <h3>What I Do</h3>
                                                    <p>
                                                        I develop modern,
                                                        scalable websites and
                                                        applications using
                                                        Laravel, React JS, HTML,
                                                        CSS, Bootstrap, and
                                                        WordPress. Whether it's
                                                        a full-stack solution or
                                                        frontend-only interface,
                                                        I ensure clean code,
                                                        performance, and
                                                        responsive design.
                                                    </p>

                                                    <div class="services-more mt-40">
                                                        <h2 class="mb-20">
                                                            Popular Services
                                                        </h2>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="item">
                                                                    <div className="d-flex gap-3">
<img
                                                                        src={html}
                                                                        alt="Friendly Interface"
                                                                    />
                                                                    <img
                                                                        src={css}
                                                                        alt="Friendly Interface"
                                                                    />
                                                                    <img
                                                                        src={js}
                                                                        alt="Friendly Interface"
                                                                    />
                                                                    </div>
                                                                    
                                                                    <h4>
                                                                        <a href="#">
                                                                            Modern
                                                                            UI/UX
                                                                        </a>
                                                                    </h4>
                                                                    <p>
                                                                        Sleek
                                                                        and
                                                                        responsive
                                                                        interfaces
                                                                        built
                                                                        with
                                                                        HTML,
                                                                        CSS,
                                                                        Bootstrap,
                                                                        and
                                                                        React
                                                                        JS.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="item">
                                                                    <img
                                                                        src={laravel}
                                                                        alt="Secure Code"
                                                                    />
                                                                    <h4>
                                                                        <a href="#">
                                                                            Secure
                                                                            Backends
                                                                        </a>
                                                                    </h4>
                                                                    <p>
                                                                        Secure,
                                                                        fast,
                                                                        and
                                                                        scalable
                                                                        backends
                                                                        using
                                                                        Laravel
                                                                        and
                                                                        WordPress.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="item">
                                                                    <img
                                                                        src={wordpress}
                                                                        alt="Secure Code"
                                                                    />
                                                                    <h4>
                                                                        <a href="#">
                                                                            WordPress Website
                                                                        </a>
                                                                    </h4>
                                                                    <p>
                                                                        Secure,
                                                                        fast,
                                                                        and
                                                                        scalable
                                                                        Website Using
                                                                
                                                                        WordPress.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Services;
