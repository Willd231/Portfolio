import './App.css';
import React from 'react';
import { useState } from 'react';



const linkedin = () =>{
  window.open('https://www.linkedin.com/in/will-dellinger-a77b6129b/');
};

const github = () => {
  window.open('https://github.com/Willd231');
};

const email = () => {
  window.open('mailto:dellinger.w3@gmail.com');
};



function Header() {
  return (
    <div className="Header">
      
      <div class = "H-item" id = "h-Projects"><button onClick={linkedin}>Linkedin</button></div>
      <div class = "H-item" id = "h-Experience"><button onClick={github}>Github</button></div>
      <div class = "H-item" id = "h-aboutme"><button onClick={email}>Email</button></div>
      
    </div>
  );
}


function Title(){
  return(<div id = "Title">
    <h1>Will Dellinger</h1>
  </div>)
}



function Projects({expand, setExpand}){
  const toggle = (item) => {
    setExpand(expand === item ? null :item)
  };
  return(
    
    <div className = "Projects">
      <button onClick={() => toggle('project1')}>Projects</button>
      {expand === 'project1'} 
      <div class  = "flexitem" id = "p3">

      </div>
      <div class  = "flexitem" id = "p2">

      </div>
      <div class  = "flexitem" id = "p3">

      </div>
      </div>
    
  )
}



function Experience(){
  return(
    <div className ="Experience">
      <div class = "container">
      <h1></h1>
      <div class = "flexitem" id = "experience1">      
        <h3></h3>
        <p></p>
        </div>
      </div>
    </div>
  )
}

function AboutMe(){

  return(
    <div className = "Aboutme">
      <div className = "cont">
      <h1></h1>
      <div id = "abm">
      <p> </p>
      </div>
      </div>
    </div>
  )
}


function Footer(){
return(<div class = "flex-container" ID = "Footer">
  
  <div class = "F-item" id = "contact1"></div>
  <div class = "F-item" id = "contact2"></div>
  <div class = "F-item" id = "contact3"></div>

    </div>
)
}




function App() {
  const [expand, setExpand] = useState(null);
  <Projects expand={expand} setExpand={setExpand} />

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
        <Projects />
        <Experience />
        <AboutMe />
        <Footer />
      </div>
    </div>
  );
}



export default App;
