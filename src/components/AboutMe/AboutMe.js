import React from 'react';
import milos from '../../assets/milos.png';
import './AboutMe.css';

const AboutMe = () => {
    return(
        <div className="segment-wrapper segment-wrapper-about-me">
            <img className="profile-picture" src={milos} alt="Milos Markovic"/>
            <div className="name">Miloš<strong>Marković</strong></div>
            <div className="profession"><strong>Frontend</strong>Developer</div>
            <p className="ptag left-align">Young and enthusiastic developer with strong communication
                skills, ready to learn new technologies. I
                am detail orientied and open minded. I am "outside the
                box" thinker and tend to observe things from a different
                perspective.</p>
            <p className="ptag left-align">In my free time I like to play basketball, watch movies,
                play guitar or hike as a member of mounteering club.
            </p>
        </div>
    )
}

export default AboutMe;