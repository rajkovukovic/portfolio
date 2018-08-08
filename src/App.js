import React, { Component } from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <AboutMe />
        <Skills />
        <Education />
        <Contact />
      </div>
    );
  }
}

export default App;
