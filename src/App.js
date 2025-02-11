import './App.css';
import Linkedin from "./1.png"
import GitHub from "./2.png"
import mail from "./3.png"
import React, { useState } from 'react';

const openLinkedIn = () => {
  window.open('https://www.linkedin.com/in/will-dellinger-a77b6129b/');
};

const openGitHub = () => {
  window.open('https://github.com/Willd231');
};

const openEmail = () => {
  window.open('mailto:dellinger.w3@gmail.com');
};

function Header() {
  return (
    <div className="Header">
      <div className="H-item" id="h-LinkedIn">
      
        <button onClick={openLinkedIn}><img src={Linkedin} alt="Linkedin" />
        </button>
      </div>
      <div className="H-item" id="h-GitHub">
        <button onClick={openGitHub}><img src = {GitHub} alt = "GitHub" /> </button>
      </div>
      <div className="H-item" id="h-Email">
        <button onClick={openEmail}><img src = {mail} alt ="mail" /> </button>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div id="Title">
      <h1>Will Dellinger</h1>
    </div>
  );
}

function Projects({ expand, setExpand }) {
  const toggle = (item) => {
    setExpand(expand === item ? null : item);
  };

  return (
    <div className="Projects">
      <button onClick={() => toggle('project1')}>Projects</button>
      {expand === 'project1' && (
        <>
          <div className="flexitem" id="p1"></div>
          <div className="flexitem" id="p2"></div>
          <div className="flexitem" id="p3"></div>
        </>
      )}
    </div>
  );
}

function Experience() {
  return (
    <div className="Experience">
      <div className="container">
        <h1>Experience</h1>
        <div className="flexitem" id="experience1">
          <h3>Job Title</h3>
          <p>Description...</p>
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="cont">
        <h1>About Me</h1>
        <div id="abm">
          <p>Hi, I am goated</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex-container" id="Footer">
      <div className="F-item" id="contact1"></div>
      <div className="F-item" id="contact2"></div>
      <div className="F-item" id="contact3"></div>
    </div>
  );
}

function App() {
  const [expand, setExpand] = useState(null);

  return (
    <div className="App">
      {/* Background Layers */}
      <div className="Background">
        <div className="Stars"></div>
        <div className="Twinkling"></div>
        <div className="Clouds"></div>
      </div>

      {/* Foreground Content */}
      <div className="Foreground">
        <Title />
        <Header />
        <Projects expand={expand} setExpand={setExpand} />
        <Experience />
        <AboutMe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
