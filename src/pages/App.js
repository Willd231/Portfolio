import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import im1 from './waving.jfif';
import Projects from './Projects.js'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


function ProjectsSlides()
  const settings = {
      /*sets the dots to true like below the current slide*/
      dots: true,
      /*these are pretty self explanatory - just included in the slick library*/
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll:1,



      appendDots: dots => (
          <div>
              <ul style = {{
                  margin: "0px", padding : "0px"

              }}> {dots} </ul>
          </div>
      ),



responsive: [
  {
      breakpoint: 1024,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
      }
  },
  {
      breakpoint: 600, 
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
      }
  }
]
  }





// Navigation Buttons
function Header() {
  return (
    <nav id="Header">
      <button id="h0" onClick={() => document.getElementById('stars').scrollIntoView({ behavior: 'smooth' })}>
        WD
      </button>
      <button id="h1" onClick={() => document.getElementById('project').scrollIntoView({ behavior: 'smooth' })}>
        Projects
      </button>
      <button id="h2" onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>
        Experience
      </button>
      <button id="h3" onClick={() => document.getElementById('aboutme').scrollIntoView({ behavior: 'smooth' })}>
        About Me
      </button>
      <button id="h4" onClick={() => document.getElementById('index').scrollIntoView({ behavior: 'smooth' })}>
        Contact
      </button>
    </nav>
  );
}


// Projects Component
function Projects() {
  return (
    <div className="projects">
    

                <Slider {...settings}>
                    <div className="full-width-slide">
                        
            <h1>Lig</h1>
                             
                            
                    </div>



                    <div className="full-width-slide">
                        <h1>ma</h1>

                    </div>

                    <div className="full-width-slide">
                        <h1>f</h1>
                    </div>
                </Slider>
      
    
      
    </div>
  );
}

// Experience Section
function Experience() {
  return (
    <div id="experience">
      <h1>Experience</h1>
      <p>This is a paragraph</p>
    </div>
  );
}

// Index/Social Media Buttons
function SocialMedia() {
  return (
    <div id="socials">
      <button onClick={() => window.open('https://instagram.com', '_blank')}>Instagram</button>
      <button onClick={() => window.open('https://github.com', '_blank')}>GitHub</button>
      <button onClick={() => window.open('https://linkedin.com', '_blank')}>LinkedIn</button>
      <button onClick={() => window.location.href = 'mailto:you@example.com'}>Email</button>
    </div>
  );
}

// Home Component (Main Portfolio Page)
function Home() {
  return (
    <div className="App">
      {/* Background and Stars */}
      <div className="Background">
        <div id="stars"></div>
      </div>

      {/* Header Navigation */}
      <div className="Section1">
        <Header />
      </div>

      {/* About Me Section */}
      <div className="Section2">
        <div id="aboutme">
          <div id="des">
            <div className="imgc">
              <img id="photo" src={im1} alt="Waving" />
            </div>
            <div id="title">Will Dellinger | Software Developer / Musician</div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="Section3">
        <h1 id="project">Featured Projects</h1>
        <Projects />
        <p>Click <Link to="/projects">here</Link> to see all my projects</p>
      </div>

      {/* Experience Section */}
      <div className="Section4">
        <Experience />
      </div>

      {/* Index/Social Media Section */}
      <div id="index">
        <Index />
        <div id="sections">
          <div>About</div>
          <div>Projects</div>
          <div>Home</div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <button id="money">Buy me a Monster</button>
        <div id="f">© 2025 William Dellinger. All Rights Reserved</div>
      </div>
    </div>
  );
}



// Main App Component with Routing
function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
