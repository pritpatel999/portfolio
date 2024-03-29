import React from "react";
import "./Project.css";

export default function Projects() {
    return (
        <div className="d-flex flex-column project-section">
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="project-name">
                        Online Dietitian (Final Year Project)
                    </span>
                    <span className="project-language">PHP, MYSQL</span>
                    <span className="project-info">
                        The Proposed system take input from users and give
                        proper diet plan based on BMI index. It also consist
                        login functionality for User and Admin. The main purpose
                        of this website to reduce the time and cost for expert
                        advices for diet.
                    </span>
                    <a href="https://emedicio.000webhostapp.com/index.php" rel="noreferrer" target="_blank">
                        Online Dietitian
                    </a>
                </div>
            </div>
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="project-name">
                        Feedback App
                    </span>
                    <span className="project-language">React, Routers, JSON-server</span>
                    <span className="project-info">
                        Implemented Feedback web app using React in which user can rate the service and write reviews. Moreover, user can also edit reviews along with average and count on total number of reviews provided.
                    </span>
                    <a href="https://62abc29e297a5f5246c0e739--tubular-swan-51a6f1.netlify.app/" rel="noreferrer" target="_blank">
                        Feedback App
                    </a>
                </div>
            </div>
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="project-name">
                        Online Parking Booking System (Third Year Project)
                    </span>
                    <span className="project-language">PHP, MYSQL</span>
                    <span className="project-info">
                        Portal for management and booking of parking slots for
                        four-wheelers in specific apartments or buildings, so
                        user don’t have to worry about parking availabilities.
                    </span>
                </div>
            </div>
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="project-name">Quotree</span>
                    <span className="project-language">
                        Javascript, Firebase
                    </span>
                    <span className="project-info">
                        Website to display some greate quotes of famouse
                        personalities with many functionality likes add new
                        quote, add comment on particular quote, display comments
                        etc. For backend part I have used Firebase API.
                    </span>
                </div>
            </div>
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="project-name">Pig Game</span>
                    <span className="project-language">
                        Javascript
                    </span>
                    <span className="project-info">
                        Created pig game using Javascript. Its a multy player game, where one player can roll a dice multiple times and then pass it to another player. If plater get 0 then it will automatically pass to another player. Plater who get score of 100 first will consider as a winner.
                    </span>
                    <a href="https://pritpatel999.github.io/pig-game/">Pig Game</a>
                </div>
            </div>
        </div>
    );
}
