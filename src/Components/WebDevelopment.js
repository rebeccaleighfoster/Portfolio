import React, { Component } from "react";
import Header from "./Header";
import Particles from "react-particles-js";

class WebDevelopment extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="info">
          <h2 className="bigInfo"> Skills </h2>
          {/* <p>
            Artist and social worker turned full stack web developer. My passion
            for logic, math, patterns and art transfer well to a career in
            coding. My previous work experience provides me with skills in
            collaboration, creative approaches to problem solving, and data
            management. I am looking for a position that challenges my critical
            thinking skills, and fosters my growth as a developer. I am a
            Software Developer in the start of my career. I am lucky to be based
            in the Twin Cities. I am an artistic and analytical thinker that
            loves math, patterns and solving problems. I love coding because
            allows me to practice all these things. I currently have skills in:
          </p> */}
          <ul>
            <li> HTML </li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Node</li>
            <li>React.js</li>
            <li>Postgres</li>
            <li> SQL </li>
            <li> Knex </li>
            <li> API Development and Integration </li>
            <li> Wordpress </li>
            <li>Git and Github </li>
            <li>Express </li>
          </ul>
          <p> Download Resume PDF </p>
          <p> I am currently seeking fulltime employment.</p>
        </div>
        <div className="info">
          <h2 className="bigInfo"> Projects </h2>
          <div className="singleProject">
            <h3> Web Weavers Studio </h3>
            <p>
              A full stack application for handweavers to connect with eachother
              and log details on projects. Built with React.js, Node, Postgres,
              Knex, Formik.
            </p>
            <button className="projectButton">
              <img
                src={require("../images/web-weavers-studio.png")}
                className="ProjectPic"
                alt="screen shot of web weavers studio"
              ></img>
            </button>
            <img
              src={require("../images/github_transp_logo.png")}
                className="githubLink"
            ></img>
          </div>
          <h3> What Should I Wear On My Hike? </h3>
          <p>
            An app to give users quick, dynamic, simple gear reccomendations
            about the weather based off the location they want to hike. It runs
            by using a fetch block to the Open Weather API.
          </p>
          <button className="projectButton">
            <img
              src={require("../images/hikingapp.png")}
              className="ProjectPic"
              alt="screen shot of hiking app"
            ></img>
          </button>
          <img
            src={require("../images/github_transp_logo.png")}
              className="githubLink"
          ></img>
          <div className="singleProject">
            <h3> Astrocyte Quiz </h3>
            <p>
              A fun app to test your knowledge on all things Astrocytes and
              Neuroscience that utilizes HTML, CSS, JavaScript, and JQuery.
            </p>
            <img
              src={require("../images/github_transp_logo.png")}
                className="githubLink"
            ></img>
          </div>
          <div className="singleProject">
            <h3> Weavers Guild of Minnesota - Web Manager </h3>
            <p>
              I currently manage the Wordpress site for the Weavers Guild of
              Minnesota.
            </p>
            <button className="projectButton">
              <img
                src={require("../images/wgm.png")}
                className="ProjectPic"
                alt="screen shot of hiking app"
              ></img>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WebDevelopment;
