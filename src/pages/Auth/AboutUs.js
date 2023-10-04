import React from "react";
import '../css/AboutUs.css';
// import image from '../Image/img2.jpg';
// import imagesecond from '../Image/img1.jpg';
// import imagethird from '../Image/img2.jpg';

const AboutUs = () => {
    return (
        <>

            <div className="about-section">
                <h1>About Us Page</h1>
            </div>
            <div className="contact">
                <p>
                Many institutions make a distinction between a circulating or lending library, where materials are expected and intended to be loaned to patrons, institutions, or other libraries, and a reference library where material is not lent out. Travelling libraries, such as the early horseback libraries of eastern Kentucky[45] and bookmobiles, are generally of the lending type. Modern libraries are often a mixture of both, containing a general collection for circulation, and a reference collection which is restricted to the library premises. Also, increasingly, digital collections enable broader access to material that may not circulate in print, and enables libraries to expand their collections even without building a larger facility. Lamba (2019) reinforced this idea by observing that "today's libraries have become increasingly multi-disciplinary, collaborative and networked" and that applying Web 2.0 tools to libraries would "not only connect the users with their community and enhance communication but will also help the librarians to promote their library's activities, services, and products to target both their actual and potential users".                </p>
            </div>
            
            <div className="we-are-block">
                <div id="history-section">
                    <div className="history-image">
                        <img src="lib-img1.jpg" width="900" height="471" alt="Building Pic" />
                    </div>
                    <div className="history-info">
                        <h2>Preserving Local History</h2>
                        <p>The library is at the center of the school's academic programs. The curriculum at a particular school can be largely dependent on the quality of the library. The teaching and learning process is poor without a well-equipped library.</p>
                        <p>The library is essential to facilitate student-centered learning and teaching processes like the Dalton plan, project method, and self-learning as well as seminars.</p>
                        {/* <a href="#" title="History Button">HISTORY</a> */}
                    </div>
                </div>

                <div id="about-us-section">
                    <div class="about-us-image">
                        <img src="lib-img.jpg" width="750" height="458" alt="Lobby Image" />
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
                <h4>History In Library</h4>
                    <p>The history of libraries began with the first efforts to organize collections of documents.[2] The first libraries consisted of archives of the earliest form of writing—the clay tablets in cuneiform script discovered in Sumer, some dating back to 2600 BC. Private or personal libraries made up of written books appeared in classical Greece in the 5th century BC. In the 6th century, at the very close of the Classical period, the great libraries of the Mediterranean world remained those of Constantinople and Alexandria.</p>
                <div className="happy-contact">
                    <p>
                    The Fatimids (r. 909-1171) also possessed many great libraries within their domains. The historian Ibn Abi Tayyi’ describes their palace library, which probably contained the largest collection of literature on earth at the time, as a "wonder of the world". Throughout history, along with bloody massacres, the destruction of libraries has been critical for conquerors who wish to destroy every trace of the vanquished community's recorded memory. A prominent example of this can be found in the Mongol massacre of the Nizaris at Alamut in 1256 and the torching of their library, "the fame of which", boasts the conqueror Juwayni, "had spread throughout the world".</p>
                </div>
            </div>
        </>
    )
}

export default AboutUs;