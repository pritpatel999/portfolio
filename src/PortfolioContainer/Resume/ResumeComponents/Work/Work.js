import React from "react";
import "./Work.css";

export default function Work() {
    return (
        <div className="work-inside-new mx-4 my-4">
            <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-between">
                    <span className="company-name">Cybercom Creation</span>
                    <span className="year-passout">
                        August 2020 - April 2022
                    </span>
                </div>
            </div>
            <div className="d-flex flex-column">
                <span className="position">Software Developer</span>
                <span className="description-position">
                    <ul>
                        <li>
                            Have learned PHP frameworks like magento and laravel
                            during training period.
                        </li>
                        <li>
                            My responsibilities involved around maintaining and
                            creating new magento modules.
                        </li>
                        <li>
                            Have worked on multiple reports and optimization of
                            MySQL queries to Improve performance.
                        </li>
                    </ul>
                </span>
            </div>
        </div>
    );
}
