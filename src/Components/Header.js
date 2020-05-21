import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="intro">
                <h1 className='headerText'> Rebecca Foster - Full Stack Web Developer and Textile Artist </h1>
                <Link className="HeaderLink"> Web Development </Link>
                <Link className="ProjectLink"> Completed Projects </Link>
                <Link className="HeaderLink"> Handweaving </Link>
                <Link className="HeaderLink"> About Me </Link>
                <Link className="HeaderLink"> Resume </Link>
                <Link className="HeaderLink"> Connect </Link>
            </div>
        );
    }
}


export default Header;