import React from "react";
import "./Programming.css";

export default function Programming() {
    const values = [
        {
            text: "Javascript",
            percentage: 85,
        },
        {
            text: "React JS",
            percentage: 75,
        },
        {
            text: "Node jS",
            percentage: 75,
        },
        {
            text: "PHP",
            percentage: 70,
        },
        {
            text: "HTML",
            percentage: 90,
        },
        {
            text: "CSS",
            percentage: 80,
        },
    ];
    return (
        <div>
            <div className="row">
                {values.map((value, index) => {
                    return (
                        <>
                            <div
                                key={value.text}
                                className="col-lg-6 col-mg-6 col-sm-12 my-2"
                            >
                                <span className="language">{value.text}</span>
                                <div className="progress-some">
                                    <div
                                        className="progress-new"
                                        style={{
                                            width: `${value.percentage}%`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}
