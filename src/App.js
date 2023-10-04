import "./App.css";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Home from "./PortfolioContainer/Home/Home";
import Resume from "./PortfolioContainer/Resume/Resume";
// import Testimonials from "./PortfolioContainer/Testimonial/Testimonials";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import { useState } from "react";

function App() {
    const [opennav, setOpennav] = useState(false);
    return (
        <div className="App">
            <div className="navbar-option-mobile bg-new">
                {/* <div className="d-flex flex-row justify-content-between"> */}
                {/* <span className="brand-name d-flex align-items-center justify-content-center"></span> */}
                <div
                    className="bars"
                    onClick={() => setOpennav(!opennav)}
                ></div>
                {/* </div> */}
            </div>
            <nav
                className={
                    !opennav
                        ? "d-flex bg-new navbar-new px-10 py-5 flex-rows transition-all"
                        : "d-flex bg-new navbar-fixed-new px-10 py-5 my-3 flex-rows transition-all"
                }
            >
                <span className="brand-name">Prit Patel</span>
                <div className="d-flex flex-rows">
                    <a
                        className="mx-4 nav-items"
                        href="#home"
                        onClick={() => {
                            setOpennav(false);
                        }}
                    >
                        Home
                    </a>
                    <a
                        className="mx-4 nav-items"
                        href="#about-me"
                        onClick={() => {
                            setOpennav(false);
                        }}
                    >
                        About Me
                    </a>
                    <a
                        className="mx-4 nav-items"
                        href="#resume"
                        onClick={() => {
                            setOpennav(false);
                        }}
                    >
                        Resume
                    </a>
                    {/* <a
                        className="mx-4 nav-items"
                        href="#testimonial"
                        onClick={() => {
                            setOpennav(false);
                        }}
                    >
                        Testimonial
                    </a> */}
                    <a
                        className="mx-4 nav-items"
                        href="#contact-me"
                        onClick={() => {
                            setOpennav(false);
                        }}
                    >
                        Contact Me
                    </a>
                </div>
            </nav>

            <div className="herosection px-10 py-5 flex-rows">
                {/* <div
                    className="bars"
                    onClick={() => setOpennav(!opennav)}
                ></div> */}
                <Home />
                <br />
                <br />
            </div>
            <AboutMe />
            <Resume />
            {/* <Testimonials /> */}
            <ContactMe />
        </div>
    );
}

export default App;
