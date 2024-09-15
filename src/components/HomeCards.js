import React from 'react';
import '../App.css';
// import HeroComponent from './HeroComponent';
import "./Card.css";
import { Link } from 'react-router-dom';

function Card() {
  return (
    <>
    <div className="white-bar"></div>
      <div className="card-row">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="card-front">
              <p><strong>My name is Anirudh. Here's more about me.</strong></p>
            </div>
            <div className="card-back">
              <p>
                I'm a University of Waterloo and Wilfrid Laurier student in the Double Degree CS/BBA program.<br/>
                I'm interested in space, history, basketball, and <b>contributing positively to your organization.</b> <br/>
                I'm committed to leadership and service, having been the First Year Representative for the Double Degree Club as well as a provincial-championship-winning President of my high school's Classics Club.
              </p>
            </div>
          </div>
        </div>

        <div className = "flip-card">
      <div className = "flip-card-inner">
        <div className = "card-front">
          <p><strong>Work Experience</strong></p>
        </div>
    <div  className = "card-back">
      <p>Accountancy Intern at Mercury Tax <br/>
        Jr. Software Developer at Avant Tech (Scotiabank Division) <br/>
        To learn more, please download my resume at the top of the page!</p>
    </div>
    </div>
    </div>

    
    </div>
      <div className="card-row">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="card-front">
              <strong>Technical Skills</strong>
            </div>
            <div className="card-back">
              <p>
                Python (experience with pandas, numpy, sklearn, matplotlib) <br />
                JavaScript, CSS, React.js, Node.js<br />
                Java (experience with Swing) <br />
                C, C++ <br />
                Bash <br />
              </p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="card-front">
              <strong>Professional Skills</strong>
            </div>
            <div className="card-back">
              <p>
                Team management & morale boosting <br />
                Strong written and verbal communication <br />
                Eager-to-learn personality <br />
                Ability to work well under pressure <br />
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