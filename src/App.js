  // import logo from './logo.svg';
import './App.css';

import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function  App(){
  return (
    // <Router>
    <div className="app">
    <Navbar />
    <div className='Home'>
    <Home />
    <div className="About">
    <About />
    </div>

    <div className="Projects">
    <Projects />
      </div>

    <div className="contacts">
    <Contact />

    </div>
    </div>
    </div>

      // <Route path="/" exact component={Home} />
      // <Route path="/about" component={About} />
      // <Route path="/projects" component={Projects} />
      // <Route path="/contact" component={Contact} />
    // </Router>
  );
}

export default App;
