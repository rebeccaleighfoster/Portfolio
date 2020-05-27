import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

class Header extends Component {
  render() {
    return (
      <div className="intro">
        <h2 className="bigInfo"> Hi there! My name is Rebecca. </h2>
        <Logo />
        <p className="headerInfo">
          Full stack web developer with experience using React, JavaScript,
          Node, Postgres HTML and CSS to build web apps. 
        </p>
        <Link to="/Resume" className="Link">
          Resume
        </Link>
        <Link to="/Connect" className="Link">
          Connect
        </Link>
        <img
            src={require("../images/github_transp_logo.png")}
              className="githubLink"
          ></img>
      </div>
    );
  }
}

export default Header;
