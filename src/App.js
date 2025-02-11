import './App.css';
import React from 'react';
import im1 from "./waving.png";

function Header() {
  return (
    <nav id="Header">
      
      <button id="Projects">Projects</button>
      <button id="Experience">Experience</button>
      <button id="AboutMe">About Me</button>
      <button id="contact">Contact</button>
    </nav>
  );
}


function Projects(){
  return(
    <nav className='projects'>
      <button id = "p1">Meal Dealer</button>
      <button id = "p2">Diagnose Me</button>
      <button id = "p3">Study Flash</button>
    </nav>
  )
}



function Experience(){
  return( <h1>Experience</h1>
  );
}

function AboutMe(){
  return(
    <h1>About me</h1>
  )
}


function ScrollHeader() {
  return(
  <div id="Scroll"></div>
);
}

function App() {
  return (
    <div className = "App">
    <div className="Section1">
      
      <Header />
      <ScrollHeader />
      <img id = "photo" src = {im1}></img>
      <div className="Background">
        <div className="Stars"></div>
        <div className="Twinkling"></div>
        <div className="Clouds"></div>
      </div>

      <div className="Foreground"></div>
    </div>
    <div className='Section2'>
      <h1 id = "title">Projects</h1>
      <Projects />
    </div>
    </div>
  );
}

export default App;
