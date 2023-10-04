import React, { useState } from "react";
import "./Resume.css";
import Education from "./ResumeComponents/Education/Education";
import Programming from "./ResumeComponents/Programming/Programming";
import Projects from "./ResumeComponents/Projects/Projects";
import Work from "./ResumeComponents/Work/Work";

export default function Resume() {
    const [education, setEducation] = useState(true);
    const [work, setWork] = useState(false);
    const [programming, setProgramming] = useState(false);
    const [projects, setProjects] = useState(false);

    function setAllFalse() {
        setEducation(false);
        setWork(false);
        setProgramming(false);
        setProjects(false);
    }

    function changeState(function1, state1) {
        setAllFalse();
        function1(state1);
    }

    return (
        <div className="resume-outer-section d-flex flex-column mt-5" id="resume">
            <span className="about-me-text">Resume</span>
            <span className="why-text-sub">My formal Bio Details</span>
            <div
                className="resume-new-section row"
                style={{ width: "70%", marginInline: "auto" }}
            >
                <div className="col-lg-4 col-md-4 col-sm-12 shadow-lg d-flex px-0 flex-row resume-left-section">
                    <div className="d-flex flex-column bg-new text-white">
                        <span className="icons-span">
                            <i className="fa fa-graduation-cap"></i>
                        </span>
                        <span className="icons-span">
                            <i className="fa fa-briefcase"></i>
                        </span>
                        <span className="icons-span">
                            <i className="fa fa-code"></i>
                        </span>
                        <span className="icons-span">
                            <i className="fa fa-tasks"></i>
                        </span>
                    </div>
                    <div className="d-flex flex-column">
                        <span
                            className={
                                education === true
                                    ? "resume-options-items selected"
                                    : "resume-options-items"
                            }
                            onClick={() => changeState(setEducation, true)}
                        >
                            Education
                        </span>
                        <span
                            className={
                                work === true
                                    ? "resume-options-items selected"
                                    : "resume-options-items"
                            }
                            onClick={() => changeState(setWork, true)}
                        >
                            Work
                        </span>
                        <span
                            className={
                                programming === true
                                    ? "resume-options-items selected"
                                    : "resume-options-items"
                            }
                            onClick={() => changeState(setProgramming, true)}
                        >
                            Programming
                        </span>
                        <span
                            className={
                                projects === true
                                    ? "resume-options-items selected"
                                    : "resume-options-items"
                            }
                            onClick={() => changeState(setProjects, true)}
                        >
                            Projects
                        </span>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 resume-right-section">
                    {education && <Education />}
                    {programming && <Programming />}
                    {projects && <Projects />}
                    {work && <Work />}
                </div>
            </div>
        </div>
    );
}
