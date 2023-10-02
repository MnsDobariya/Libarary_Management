import React from "react";
import '../css/AboutUs.css';
import image from '../Image/img2.jpg';
import imagesecond from '../Image/img2.jpg';

const AboutUs = () => {
    return (
        <>
                <div className="image">
                    <img className="image" src={image} alt="about image" />
                </div>
            <div className="About-section">
                <h1>
                     We've been busy for 25 years
                </h1>
                <h5> The Accessit team have been supplying and supporting Accessit Library for 25 years. It’s now being used in over 40 countries.</h5>

                <div className="first">
                <h1>Our focus is education</h1>
                <div  className="contact">
                    <p>
                        While Accessit’s software is state-of-the-art, and our programmers are leaders in their respective fields, the technology itself has always been a means to an end. Our company’s real focus is education. We think of our library system as more than a catalogue, more than a means of accessing media and information. It’s a living, breathing, evolving resource – a boundless world of knowledge that we’re putting at the fingertips of those who need it most.
                    </p>

                    <img className="imagesecond" src={imagesecond} alt="about image" />
                </div>
                </div>

            </div>


        </>
    )
}

export default AboutUs;