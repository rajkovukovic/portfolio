import React, { Component } from 'react';
import './Skills.css';
import react from '../../assets/react.png';
import redux from '../../assets/redux.png';
import jquery from '../../assets/jquery.png';
import javascript from '../../assets/javascript.png';
import html5 from '../../assets/html5.png';
import css3 from '../../assets/css3.png';
import reactBar from '../../assets/bars/react-bar.jpg';
import reduxBar from '../../assets/bars/redux-bar.jpg';
import javascriptBar from '../../assets/bars/javascript-bar.jpg';
import jqueryBar from '../../assets/bars/jquery-bar.jpg';
import html5Bar from '../../assets/bars/html5-bar.jpg';
import css3Bar from '../../assets/bars/css3-bar.jpg';

class Skills extends Component {
    render() {
        return (
            <div className="segment-wrapper segment-wrapper-skills">
                <div className="segment-arch" />
                <div className="segment-container">
                    <div>
                        <img className="img" src={react} alt="ReactJS" />
                        <p className="react-color">React JS</p>
                        <img src={reactBar} alt="ReactJS skill" />
                    </div>
                    <div>
                        <img className="img" src={redux} alt="Redux" />
                        <p className="redux-color">Redux</p>
                        <img src={reduxBar} alt="Redux skill" />
                    </div>
                    <div>
                        <img className="img" src={jquery} alt="jQuery" />
                        <p className="jquery-color">jQuery</p>
                        <img src={jqueryBar} alt="jQuery skill" />
                    </div>
                    <div>
                        <img className="img" src={javascript} alt="JavaScript" />
                        <p className="javascript-color">JavaScript</p>
                        <img src={javascriptBar} alt="JavaScript skill" />
                    </div>
                    <div>
                        <img className="img" src={html5} alt="HTML5" />
                        <p className="html5-color">HTML5</p>
                        <img src={html5Bar} alt="HTML5 skill" />
                    </div>
                    <div>
                        <img className="img" src={css3} alt="CSS3" />
                        <p className="css3-color">CSS3</p>
                        <img src={css3Bar} alt="CSS3 skill" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;