import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <>
                <div className="landingPage">
                </div>
                <div className='whoAmI' >
                    <div className='bigInfo'>
                    <p>Rebecca Foster </p>
                    <p> Software Engineer and Textile Artist</p>
                    </div>
                </div>
                <div className="flexContainer">
                    <Link to='/WebDevelopment' className="landingPageButtons"> Web Development </Link>
                    <Link to='/art' className="landingPageButtons"> Textile Art </Link>
                </div>

            </>
        );
    }
}


export default LandingPage;