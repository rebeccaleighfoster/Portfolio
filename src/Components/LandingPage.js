import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import Logo from './Logo'

class LandingPage extends Component {
    render() {
        return (
            <>
            <Particles 
            params= {{
                particles: {
                    number: { value: 6, density: { enable: true, value_area: 800 } },
                    color: { value: "#ac9194" },
                    shape: {
                      type: "polygon",
                      stroke: { width: 1, color: "#000" },
                      polygon: { nb_sides: 4 },
                      image: { src: "img/github.svg", width: 100, height: 100 }
                    },
                    opacity: {
                      value: 0.48071915585716235,
                      random: true,
                      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
                    },
                    size: {
                      value: 25,
                      random: true,
                      anim: { enable: true, speed: 10, size_min: 40, sync: false }
                    },
                    line_linked: {
                      enable: false,
                      distance: 176.26369048095953,
                      color: "#ffffff",
                      opacity: 1,
                      width: 2
                    },
                    move: {
                      enable: true,
                      speed: 6.409588744762165,
                      direction: "top",
                      random: true,
                      straight: true,
                      out_mode: "out",
                      bounce: false,
                      attract: { enable: false, rotateX: 600, rotateY: 560.8390151666895 }
                    }
                  },
                  retina_detect: true
            }}
            />
            <div>
            <Link to="/webdevelopment">
                    <div className='landingPage'>
                        <Logo />
                    <p>Rebecca Foster </p>
                    <p> Full Stack Javascript Engineer</p>
                </div> 
                </Link>
                </div>
            </>
        );
    }
}


export default LandingPage;