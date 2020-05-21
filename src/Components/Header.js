import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="intro">
                        <img
            src={require("../images/logo-start.png")}
            className="ResumePic"
          ></img>
                <Link to="/WebDevelopment" className="HeaderLink"> Web Development </Link>
                <Link to="/Projects" className="HeaderLink"> Completed Projects </Link>
                <Link to="/Art" className="HeaderLink"> Handweaving </Link>
                <Link to="/AboutRebecca" className="HeaderLink"> About Me </Link>
                <Link to="/Resume" className="HeaderLink"> Resume </Link>
                <Link to="/Connect" className="HeaderLink"> Connect </Link>
            </div>
        );
    }
}


export default Header;