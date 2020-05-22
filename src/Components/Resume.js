import React from "react";
import Logo from './Logo'
import { Link } from "react-router-dom";

function Resume(props) {
  return (
    <>
      <div className="rela-block page">
        <div className="rela-block top-bar">
          <div className="caps name">
            <div className="abs-center">Rebecca Foster</div>
          </div>
        </div>
        <div className="side-bar">
          <Logo />
          <p>Minneapolis, MN</p>
          <p>(952) 334-6104</p>
          <p>Rebecca.leigh.foster@gmail.com</p>
          <p className="rela-block social linked-in">Linked-in</p>
          <p className="rela-block social linked-in">Github</p>
          <p className="rela-block caps side-header">Front End</p>
          <p className="rela-block list-thing">HTML</p>
          <p className="rela-block list-thing">CSS </p>
          <p className="rela-block list-thing">JavaScript & jQuery</p>
          <p className="rela-block list-thing">React.js</p>
          <p className="rela-block caps side-header">Back End</p>
          <p className="rela-block list-thing">Node.js</p>
          <p className="rela-block list-thing">PostgreSQL</p>
          <p className="rela-block list-thing">RESTful APIs</p>
          <p className="rela-block list-thing">
            TDD with Mocha, Jasmine and Karma
          </p>
          <p className="rela-block caps side-header">Tools</p>
          <p className="rela-block list-thing">NPM</p>
          <p className="rela-block list-thing">Github</p>
          <p className="rela-block list-thing">Slack</p>
          <p className="rela-block caps side-header">Education</p>
          <p className="rela-block list-thing">
            Warren Wilson College -Bachelors in Social Work
          </p>
          <p className="rela-block list-thing">
            Thinkful - Engineering Immersion
          </p>
        </div>
        <div className="rela-block content-container">
          <h2 className="rela-block caps title">Software Engineer</h2>
          <div className="rela-block separator"></div>
          <p className="long-margin">
            Full-stack web developer with background in art and social work and
            passion for logic, math, and patterns. I am looking forward to
            starting a career that combines all these passions and find a
            position in web development that fosters a growth mindset and
            creative collaboration.
          </p>

          <div className="bigInfo">Experience</div>

          <div className = "jobTitle">Thinkful - Engineering Immersion, Expected Graduation - July 2020</div>
          <p>
            Learned industry best practices and practical software development
            standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.js,
            React, Redux, and algorithms and data structures.
          </p>
          <p>
            Created and deployed mobile-first applications while learning new
            languages and frameworks by collaborating several hours every week
            with a senior web developer.
            <Link to="/projects"> See Projects</Link>
          </p>
          

          <div className = "jobTitle">
            Thrifty Outfitters, Department Coordinator Winter 2014 -March 2016
          </div>
          <p>Delegated work assignments across all team members</p>
          <p>Managed social media campaign</p>
          <p>
            Designed effective merchandising displays to meet sales goals{" "}
          </p>
          <div className = "jobTitle">
            Sitkans Against Family Violence, Prevention Manager April
            2017-February 2019
          </div>
          <p>
            Tracked and analyzed data to prove program success and ensure
            evidence based success
          </p>
          <p>
            Planned and facilitated monthly meetings for the program development
            team for Boys Run I toowú klatseen Provided supervision to coworkers
            focusing on empowering their growth
          </p>
        </div>
      </div>
    </>
  );
}

export default Resume;
