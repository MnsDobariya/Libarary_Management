import React from "react";
import '../css/AboutUs.css';
import Footer from "./Footer";
// import image from '../Image/img2.jpg';
// import imagesecond from '../Image/img1.jpg';
// import imagethird from '../Image/img2.jpg';

const AboutUs = () => {
    return (
        <>

            <div class="about-section">
                <h1>About Us Page</h1>
            </div>
            <div className="contact">
                <p>
                    We've been creating and supporting our innovative library software solutions since 1994, when we formed our company. With a strong educationalist heritage, Accessit founder and CEO Martin Neyland has always been driven by the desire to create powerful, elegant software that enriches environments for teachers and learners.
                </p>
            </div>

            <div class="we-are-block">
                <div id="history-section">
                    <div class="history-image">
                        <img src="lib-img1.jpg" width="951" height="471" alt="Building Pic" />
                    </div>
                    <div class="history-info">
                        <h2>Preserving Local History</h2>
                        <p>The library is at the center of the school's academic programs. The curriculum at a particular school can be largely dependent on the quality of the library. The teaching and learning process is poor without a well-equipped library.</p>
                        <p>The library is essential to facilitate student-centered learning and teaching processes like the Dalton plan, project method, and self-learning as well as seminars.</p>
                        {/* <a href="#" title="History Button">HISTORY</a> */}
                    </div>
                </div>

                <div id="about-us-section">
                    <div class="about-us-image">
                        <img src="lib-img.jpg" width="808" height="458" alt="Lobby Image" />
                    </div>
                    <div class="about-us-info">
                        <h2>In the Spotlight</h2>
                        <p>Libraries are another place for children to develop. They can assist students with the web, offer an area that is quiet for students to focus on their studies, and also encourage learners to take time to study.</p>
                        <p>Staff members, who know what books that students enjoy can assist them in choosing books that match their preferences. Sometimes, these aren’t even books that the student was aware they would love. Giving students books that appeal to them can inspire students to continue reading.</p>
                        {/* <a href="#" title="About Us Button">ABOUT US</a> */}
                    </div>
                </div>
            </div>
            <div className="happy">
                <h4>Happy customers</h4>
                <p>At Accessit, we put a great deal of emphasis on training and support. We prefer the personal approach and have a friendly support team who are available to offer help and answer questions. Alternatively, for those who prefer self-help, we also have over 100 video tutorials. And with support desks around the world, we're able to offer you support whenever you need it.</p>
                <div className="happy-contact">
                    <p>
                        Having the best software isn't enough for us. Keeping our customers happy and well supported is just as important, so we promise you the best service too. Looking back at our customers who have purchased Accessit Library over the last 25 years, 99% of them are still with us - we're pretty proud of that.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs;