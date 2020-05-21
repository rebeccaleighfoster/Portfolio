import React from "react";
import Header from "./Header";

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
          <img
            src={require("../images/logo-start.png")}
            className="ResumePic"
          ></img>
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
          <div className="rela-block caps greyed">Profile</div>
          <p className="long-margin">
            Full-stack web developer with background in art & social work and
            passion for logic, math, and patterns. I am looking forward to
            starting a career that combines all these passions and find a
            position in web development that fosters a growth mindset and
            creative collaboration.{" "}
          </p>
          <div className="rela-block caps greyed">Experience</div>

          <h3>Job #1</h3>
          <p className="light">First job description</p>
          <p className="justified">
            Plaid gentrify put a bird on it, pickled XOXO farm-to-table irony
            raw denim messenger bag leggings. Hoodie PBR&B photo booth, vegan
            chillwave meh paleo freegan ramps. Letterpress shabby chic fixie
            semiotics. Meditation sriracha banjo pour-over. Gochujang pickled
            hashtag mixtape cred chambray. Freegan microdosing VHS, 90's bicycle
            rights aesthetic hella PBR&B.{" "}
          </p>

          <h3>Job #2</h3>
          <p className="light">Second Job Description</p>
          <p className="justified">
            Beard before they sold out photo booth distillery health goth.
            Hammock franzen green juice meggings, ethical sriracha tattooed
            schlitz mixtape man bun stumptown swag whatever distillery blog.
            Affogato iPhone normcore, meggings actually direct trade lomo plaid
            franzen shoreditch. Photo booth pug paleo austin, pour-over banh mi
            scenester vice food truck slow-carb. Street art kogi normcore, vice
            everyday carry crucifix thundercats man bun raw denim echo park pork
            belly helvetica vinyl.{" "}
          </p>

          <h3>Job #3</h3>
          <p className="light">Third Job Description</p>
          <p className="justified">
            Next level roof party lo-fi fingerstache skateboard, kogi tumblr.
            Shabby chic put a bird on it chambray, 3 wolf moon swag beard
            brooklyn post-ironic taxidermy art party microdosing keffiyeh marfa.
            Put a bird on it 3 wolf moon cliche helvetica knausgaard. Mumblecore
            fingerstache lomo, artisan freegan keffiyeh paleo kinfolk kale chips
            street art blog flannel.
          </p>
        </div>
      </div>
    </>
  );
}

export default Resume;
