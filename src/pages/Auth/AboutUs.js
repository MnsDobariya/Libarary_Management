import React from "react";
import image from '../Image/img2.jpg';

const AboutUs = () => {
    return (
        <>
            <div className="About-section">
                <div style={{width:"70%"}}>
                <img className="image" src={image} alt="about image"/>
                </div>
            </div>

            
        </>
    )
}

export default AboutUs;