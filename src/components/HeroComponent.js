import React from "react";
import "../App.css";
import heroImage from "./starspicture2.jpg";
import "./HeroComponent.css";

function HeroComponent () {
    return (
        <div className = "hero-container">
        <img src={heroImage} alt="Anirudh" className="hero-container"></img>
        <div className = "overlay"></div>
        <div className = "hero-welcome-message">Hi, I'm Anirudh Chamarthi, and it's nice to meet you.</div>
        <a className="resume-button" type="submit" href="./Anirudh Chamarthi 2024 Resume.pdf" download="Anirudh Chamarthi 2024 Resume.pdf">Download my resume here!</a>
        </div>
    )
}

export default HeroComponent;  