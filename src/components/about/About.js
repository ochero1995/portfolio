import React from "react";
import './About.css';
import avatar from '../../img/avatar.jpg'; 

const About = props =>  (
    <div className="about">
        <div className="about__title">
            <h1>About me</h1>
        </div>
        <div className="about__content">
            <div className="about__avatar">
                <img src={avatar} alt="avatar"></img>
            </div>
            <div className="about__blurb">
                Hi, Andrew here. Nice to meet you. Since beginning my journey as a 
                software developer nearly 5 years ago, I've done personal and University projects for
                my own personal development and consulted for a financial institution. This was all done along
                with talented people to create software solutions. 
                I'm naturally curious and perpetually striving to improve my skills on a day by day basis.
            </div>
        </div>
    </div>
);

export default About;