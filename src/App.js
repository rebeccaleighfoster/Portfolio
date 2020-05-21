import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import About from './Components/AboutRebecca';
import Art from './Components/Art';
import WebDevelopment from './Components/WebDevelopment';
import { BrowserRouter as Router, Route } from "react-router-dom";


import ContactMe from './Components/ContactMe'


function App() {
  return (
 <>
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/AboutRebecca" exact component={About} />
      <Route path="/Art" exact component= {Art} />
      <Route path="/WebDevelopment" exact component= {WebDevelopment}/> 
      <Route path="/ContactMe" exact component={ContactMe} />
    </Router>

  </>
  );
}

export default App;
