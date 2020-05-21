import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Components/Projects'
import LandingPage from './Components/LandingPage';
import About from './Components/AboutRebecca';
import Art from './Components/Art';
import WebDevelopment from './Components/WebDevelopment';
import { BrowserRouter as Router, Route } from "react-router-dom";


import ContactMe from './Components/ContactMe'
import Resume from './Components/Resume';


function App() {
  return (
 <>
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/AboutRebecca" exact component={About} />
      <Route path="/Resume" exact component={Resume} />
      <Route path="/Art" exact component= {Art} />
      <Route path='/Projects' exact component ={Projects} />
      <Route path="/WebDevelopment" exact component= {WebDevelopment}/> 
      <Route path="/Connect" exact component={ContactMe} />
    </Router>

  </>
  );
}

export default App;
