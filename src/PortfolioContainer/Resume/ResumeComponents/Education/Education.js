import React from "react";
import "./Education.css";

export default function Education() {
    return (
        <div className="d-flex flex-column">
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="university-name">
                        Lambton College - Mississauga, ON, Canada
                    </span>
                    <span className="university-degree">
                        Full Stack Software Development - Post Graduate
                    </span>
                </div>
                <div>
                    <span className="year-passout">2022-Cont...</span>
                </div>
            </div>
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="university-name">
                        Silver Oak University - Ahmedabad, India
                    </span>
                    <span className="university-degree">
                        Bachelors of Engineering in Computer Science
                    </span>
                </div>
                <div>
                    <span className="year-passout">2016-2020</span>
                </div>
            </div>
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="university-name">Vishwa Vidhyalaya</span>
                    <span className="university-degree">
                        Higher Secondary School - GHSEB
                    </span>
                </div>
                <div>
                    <span className="year-passout">2014-2016</span>
                </div>
            </div>
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="university-name">Vishwa Vidhyalaya</span>
                    <span className="university-degree">
                        Secondary School - GSEB
                    </span>
                </div>
                <div>
                    <span className="year-passout">2012-2014</span>
                </div>
            </div>
        </div>
    );
}
