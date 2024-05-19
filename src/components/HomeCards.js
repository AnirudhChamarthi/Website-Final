import React from 'react';
import '../App.css';
// import HeroComponent from './HeroComponent';
import "./Card.css";
import { Link } from 'react-router-dom';

function Card() {
  return (
    <>
    <div className = "card-row">

    <div className = "flip-card">
        <div className = "flip-card-inner">
          <div className = "card-front">
           <p> Hi </p>
          </div>
            <div  className = "card-back">
                  <p>
                  My projects include: <br/>
                  <Link to="https://github.com/AnirudhChamarthi"> the BasketballReference API project </Link> <br/>
                  (and this website, made using React, Node.js, SMTP, and the Fetch API)
                  </p>
            </div>
        </div>
    </div>

    <div className = "flip-card">
      <div className = "flip-card-inner">
        <div className = "card-front">
          <p>This is definitely not a cry for help</p>
        </div>
    <div  className = "card-back">
      <p>help me please</p>
    </div>
    </div>
    </div>

    
    </div>
    <div className = "card-row">

    <div className = "flip-card">
      <div className = "flip-card-inner">
        <div className = "card-front">
          <strong>Technical Skills</strong>
        </div>
        <div className = "card-back">
      <p>
      Python (experience with pandas, numpy, sklearn, matplotlib) <br/>
      JavaScript, CSS, React.js (experience with Node.js) <br/>
      Java (experience with Swing) <br/>
      C <br/>
      Bash <br/>
      </p>

    </div>
      </div>
    </div>
    
    <div className = "flip-card">
    <div className = "flip-card-inner">
    <div className = "card-front"><strong>Professional Skills</strong></div>
    <div className = "card-back">
      <p>
      Team management & morale boosting <br/>
      Strong written and verbal communication <br/>
      Eager-to-learn personality <br/>
      Ability to work well under pressure <br/>
      Experience with pipeline work <br />
      </p>
    </div>
    </div>
    </div>
    </div>

    </>
  );
}

export default Card;