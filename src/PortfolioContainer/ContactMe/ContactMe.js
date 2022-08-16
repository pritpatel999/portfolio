import React from "react";
import "./ContactMe.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e);
        const templateparams = {
            from_name: name + " " + email,
            to_name: "pritpatel.social15@gmail.com",
            feedback: message,
        };
        emailjs.send(
            "service_06zs8t7",
            "template_83trqvi",
            templateparams,
            "k8w15xTXBRE4uL8Yf"
        ).then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
        // emailjs
        //     .sendForm(
        //         "service_06zs8t7",
        //         "template_83trqvi",
        //         form.current,
        //         "k8w15xTXBRE4uL8Yf"
        //     )
        //     .then(
        //         (result) => {
        //             console.log(result.text);
        //         },
        //         (error) => {
        //             console.log(error.text);
        //         }
        //     );
    };

    return (
        <div className="contact-me-part" id="contact-me">
            <div className="relative-bg py-5">
                <div className="contact-inner-part d-flex flex-column">
                    <span className="about-me-text">Contact Me</span>
                    <span className="why-text-sub mb-5">
                        Lets Keep in Touch
                    </span>
                    <div>
                        <div className="contact-me-card row">
                            <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
                                <span className="get-in-touch mx-4 my-4">
                                    Get in touch
                                </span>
                                <div className="py-4 d-flex justify-content-center">
                                    <lottie-player
                                        src="https://assets2.lottiefiles.com/packages/lf20_zj3qnsfs.json"
                                        background="transparent"
                                        speed="1"
                                        style={{
                                            width: "480px",
                                        }}
                                        loop
                                        autoplay
                                    ></lottie-player>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
                                <form
                                    ref={form}
                                    className="d-flex flex-column card-contact-right"
                                    onSubmit={sendEmail}
                                >
                                    <div className="input-group my-3 d-flex flex-column">
                                        <label htmlFor="Name">Name</label>
                                        <input
                                            value={name}
                                            type="text"
                                            placeholder="Enter Your Name"
                                            className="input-groups"
                                            onChange={(e) => {
                                                setName(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="input-group my-3 d-flex flex-column">
                                        <label htmlFor="Email">Email</label>
                                        <input
                                            value={email}
                                            type="text"
                                            placeholder="abc@gmail.com"
                                            className="input-groups"
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="input-group my-3 d-flex flex-column">
                                        <label htmlFor="Message">Message</label>
                                        <textarea
                                            value={message}
                                            type="text"
                                            placeholder="Enter Your Message"
                                            className="input-groups"
                                            onChange={(e) => {
                                                setMessage(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="input-group my-3 d-flex flex-column">
                                        <input
                                            type="submit"
                                            className="btn btn-success"
                                            value="Send Message"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
