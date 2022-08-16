import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Alex",
            text: "This guy is incredibly awesome, I hired him and when he delivered, I honestly fell in love with the project. He is indeed a great guy.",
        },
        {
            name: "Mohan",
            text: "This guy is incredibly awesome, I hired him and when he delivered, I honestly fell in love with the project. He is indeed a great guy.",
        },
        {
            name: "Roger",
            text: "This guy is incredibly awesome, I hired him and when he delivered, I honestly fell in love with the project. He is indeed a great guy.",
        },
    ];
    return (
        <div className="testimonial-part my-5" id="testimonial">
            <div className="testimonial-inner-part d-flex flex-column">
                <span className="about-me-text">Testimonials</span>
                <span className="why-text-sub mb-3">
                    what my clients say about me
                </span>
                <div className="row mx-5">
                    {testimonials.map((value) => {
                        return (
                            <div
                                className="col-lg-4 col-sm-12 col-md-6 my-3"
                                key={`${Math.random().toString()}`}
                            >
                                <div className="card shadow testimonial-card d-flex flex-column">
                                    <span className="description">
                                        {value.text}
                                    </span>
                                    <span className="stars">⭐⭐⭐⭐⭐</span>
                                    <span className="name">{value.name}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
