import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'

class Header extends Component {
    render() {
        return (
            <div className="intro">
                 <Logo />       
                {/* <Link to="/Art" className="HeaderLink"> Handweaving </Link> */}
                {/* <Link to="/AboutRebecca" className="HeaderLink"> About Me </Link> */}
                <Link to="/Resume" className="HeaderLink"> Resume </Link>
                <Link to="/Connect" className="HeaderLink"> Connect </Link>
            </div>
        );
    }
}


export default Header;