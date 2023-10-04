import React from "react";
import '../css/Footer.css';
import image from '../Image/logo1.png';
import { Navigate, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>Z.S. PATEL COLLEGE OF COMPUTER APPLICATION</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>9876543210 0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>library@info.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a><img src={image} className="img-fluid" alt="logo" /></a>
                                    </div>
                                    <div className="footer-text">
                                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                            elit,Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        {/* <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                        <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <p onClick={() => navigate("/home")}>Home</p>
                                    <p onClick={() => navigate("/books")}>Books</p>
                                    <p onClick={() => navigate("/abouthus")}>Abouth Us</p>
                                    <p onClick={() => navigate("/contact")}>Cotact Us</p>
                                    <p onClick={() => navigate("/profile")}>Profile</p>
                                    <p onClick={() => navigate("/forgot")}>Forgot</p>
                                    <p onClick={() => navigate("/registration")}>Registration</p>
                                    {/* <ul>
                                        <li><a href="/home">Home</a></li>
                                        <li><a href="/books">Books</a></li>
                                        <li><a href="abouthus">Abouth Us</a></li>
                                        <li><a href="/contact">Cotact Us</a></li>
                                        <li><a href="/profile">Profile</a></li>
                                        <li><a href="/forgot">Forgot</a></li>
                                        <li><a href="/registration">Registration</a></li>
                                    </ul> */}
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            {/* <button><i className="fab fa-telegram-plane"></i></button> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer;
