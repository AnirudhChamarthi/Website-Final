import React from "react";
import "../App.css";
import logo2 from "./anirudh-eagle.png";
import "./HeroComponent.css";

function HeroComponent () {
    return (
        <div>
            <img src={logo2} className="hero-container"></img>
        </div>
    )
}

export default HeroComponent;