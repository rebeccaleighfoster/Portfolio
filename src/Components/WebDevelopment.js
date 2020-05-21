import React, { Component } from 'react';
import Header from './Header'

class WebDevelopment extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="info">
                    <h2 className='bigInfo'> Hi there! My name is Rebecca. </h2>
                    <img
                    src={require("../images/IMG_8145.jpg")}
                    className="ParisPic"
                    alt="Rebecca"
                  ></img>
                    <p> I am a Software Developer in the start of my career. I am lucky to be based in the Twin Cities. I am an artistic and analytical thinker that loves math, patterns and solving problems. I love coding because allows me to practice all these things. I currently have skills in: </p>
                    <ul>
                        <li> HTML </li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Node</li>
                        <li>React.js</li>
                        <li> Wordpress </li>
                        <li>Git and Github </li>
                        <li>Express </li>
                    </ul>
                    <p> I am currently seeking fulltime employment.</p>
            </div>
            </div>
        );
    }
}



export default WebDevelopment;