import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
    return (
        <div className="about-me-section aboutme-inside my-5" id="about-me">
            <div className="d-flex flex-column">
                <span className="about-me-text">About Me</span>
                <span className="why-text-sub">Why Choose me?</span>
                <div className="row justify-content-center my-3 py-5 shadow-lg">
                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-item-center justify-content-center">
                        <lottie-player
                            className="about-me-animation"
                            src="https://assets3.lottiefiles.com/packages/lf20_v1yudlrx.json"
                            background="transparent"
                            speed="1"
                            loop
                            autoplay
                        ></lottie-player>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
                        <span className="some-text-about-me">
                            Full Stack web developer with background knowledge
                            in MERN Stack with redux and PHP, along with a knack
                            of building applications with utmost efficiency.
                            Strong professional with a BE willing to be an asset
                            for an organization.
                        </span>
                        <span className="few-highlights">
                            <span className="few-text">
                                Here are few highlights
                            </span>
                            <span className="few-list">
                                <ul>
                                    <li>Fullstack web development</li>
                                    <li>
                                        Interactive Front end as per the design
                                    </li>
                                    <li>PHOTOSHOP</li>
                                    <li>
                                        Node JS, Express, MongoDB, PHP, React,
                                        Redux
                                    </li>
                                </ul>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
