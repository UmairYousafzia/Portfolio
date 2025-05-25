import React from "react";
import MainLayout from "./MainLayout";
import call from "./../../images/icon/call.png";
import { useForm } from "@inertiajs/react";
const Contact = () => {
    const { data, setData,post, processing, errors } = useForm({
        name: "",
        email: "",
        phone: "",
        comments: "",
    });
    function submitData(e) {
        e.preventDefault();
        post('/contact_us/store')

    }
    return (
        <MainLayout>
            <div
                id="contact"
                class="contact-area contact-page overflow-hidden default-padding"
            >
                <div class="container_hh">
                    <div class="row">
                        <div class="col-tact-stye-one col-lg-5 pr-50 pr-md-15 pr-xs-15">
                            <div class="contact-style-one-info">
                                <div class="top-info">
                                    <h2 class="gradient-text">Let's Talk</h2>
                                    <div class="call">
                                        <img src={call} alt="Image not Found" />
                                        <a
                                            class="phone-link"
                                            href="tel:+4733378901"
                                        >
                                            +92 319 1826264
                                        </a>
                                    </div>
                                </div>
                                <ul class="contact-address">
                                    <li>
                                        <div class="info">
                                            <h4>Location</h4>
                                            <p>
                                                Street 28 <br /> G-7/1 Islamabad
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="info">
                                            <h4>Official Email</h4>
                                            <a href="mailto:umairsb84@gmail.com">
                                                umairsb84@gmail.com
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                                <p class="copyright">
                                    © 2025 All Rights Reserved
                                </p>
                            </div>
                        </div>

                        <div class="col-tact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15 mt-md-50 mt-xs-50">
                            <div class="contact-form-style-one">
                                <form
                                    onSubmit={submitData}
                                    class="contact-form contact-form mt-30"
                                >
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input
                                                    class="form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Name"
                                                    type="text"
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <span class="alert-error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <input
                                                    class="form-control"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email*"
                                                    type="email"
                                                    value={data.email}
                                                    onChange={(e)=> setData('email', e.target.value)}
                                                />
                                                <span class="alert-error"></span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <input
                                                    class="form-control"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Phone"
                                                    type="text"
                                                    value={data.phone}
                                                    onChange={(e)=>setData('phone', e.target.value)}
                                                />
                                                <span class="alert-error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group comments">
                                                <textarea
                                                    class="form-control"
                                                    id="comments"
                                                    name="comments"
                                                    placeholder="Tell Us About Project *"
                                                    value={data.comments}
                                                    onChange={(e)=>setData('comments', e.target.value)}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <button
                                                type="submit"
                                                name="submit"
                                                id="submit"
                                            >
                                                <i class="fa fa-paper-plane"></i>{" "}
                                                Get in Touch
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 alert-notification">
                                        <div
                                            id="message"
                                            class="alert-msg"
                                        ></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Contact;
