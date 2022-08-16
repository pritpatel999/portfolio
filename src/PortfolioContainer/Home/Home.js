import React from "react";
import "./Home.css";
// import Typical from 'react-typical';

export default function Home() {
    return (
        <div className="herosection-2 row justify-content-center" id="home">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="d-flex flex-column justify-content-center Im-text-section">
                    <span className="Im-text">
                        Hello, I'm{" "}
                        <span className="name-Im-text">Prit Patel</span>
                    </span>
                    <span className="Im-text-enthusiastic py-2">
                        
                        {/* <Typical
                            loop={Infinity}
                            steps={[
                                "Enthusiastic Dev😎",
                                1000,
                                "Full Stack Developer💻",
                                1000,
                                "MERN stack Dev🌐",
                                1000,
                                "PHP Developer💻",
                                1000,
                            ]} 
                        /> */}
                    </span>
                    <span className="Im-text-subheading mx-4">
                        knack of building applications with front and back end
                        operations
                    </span>
                    <div className="d-flex flex-row justify-content-center my-4">
                        <a className="btn-hire-me" href="#contact-me">
                            Hire Me
                        </a>
                        <a
                            href="prit_resume.pdf"
                            download="Prit resume.pdf"
                        ><button className="btn-resume-me">Get Resume</button>
                            
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="d-flex justify-content-center custom-div-outer-img">
                    <img
                        src={require("../../assets/Home/prit_bg.jpg")}
                        className="img-fluid custom-img"
                        alt="heroimage"
                    />
                </div>
            </div>
        </div>
    );
}
