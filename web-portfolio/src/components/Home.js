import "./homeStyles.css";
import React, { useState, useEffect } from 'react';


function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const greeting = "Hi, <br/> I'm Liam <br/> Software Systems Developement"; // Use <br /> for line break

  useEffect(() => {
    let currentLetterIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(greeting.substring(0, currentLetterIndex));
      currentLetterIndex++;

      if (currentLetterIndex > greeting.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
<section class="home_banner_area">
  <div class="cards-container-above">
    <div class="cards">
      <div class="card-image">
        <img src="https://media.licdn.com/dms/image/C4D03AQGpjMz1V0fEfw/profile-displayphoto-shrink_800_800/0/1602671238550?e=2147483647&v=beta&t=5SrRf8Stm4JXpy-YuoafSrip5OX6JENUFxu3WdXsW2w" alt="Profile" />
      </div>
    </div>
    <div class="information">
       <div class="cards-spelling-info">
      <div class="card-content-info">
        <p dangerouslySetInnerHTML={{ __html: displayedText }}></p>
      </div>
    </div>

    <div class="cards-brief-info">
      <div class="card-content-info">
        <p> "Which Would Be Worse: To Live As A Monster, Or To Die As A Good Man?" - Teddy Daniels</p>
        <i className="fab fa-instagram"></i> {/* Instagram icon */}
        <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
        <i className="fab fa-github"></i> {/* GitHub icon */}
        <i className="fab fa-twitch"></i> {/* Twitch icon */}
      </div>
    </div>
    </div>
   
  </div>
</section>




      <div>
        <h1 className="about-heading">
          <hr className="left-line" />
          About Me
          <hr className="right-line" />
        </h1>
        <div class = "myself">
        <p>
        Hello, I'm Liam Crowe, a fourth-year student studying Software Systems Development at South East Technological University in Waterford. 
        I have a passion for all things technology and enjoy diving into the world of software development. When I'm not coding, you can find me 
        on the rugby field or hitting the gym. With a strong foundation in software development and a keen interest in exploring innovative solutions,
        I'm excited to showcase my skills and projects on this portfolio website. Join me on this journey as we explore the intersection of technology 
        and creativity.
        </p>
        </div>
      </div>
      
      <div>
        <h1 className="about-heading">
          <hr className="left-line" />
          Experience
          <hr className="right-line" />
        </h1>
      </div>
      <div className="card-container">
      <div className="card">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRs8ram-SCoTrQsgB5xrwVs326B3PpIhwKbiZv5x2Y&s'
        alt="Project" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Cyber</h3>
          <p className="card-description">aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
          aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
          aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
          aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
          aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
          </p>
          <div className="card-buttons">
            <button className="card-button">Github</button>
            <button className="card-button">Read More</button>
          </div>
        </div>
      </div>
      </div>

      <div>
        <h1 className="about-heading">
          <hr className="left-line" />
          Featured Projects
          <hr className="right-line" />
        </h1>
      </div>
      <div className="card-container">
  <div className="card">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRs8ram-SCoTrQsgB5xrwVs326B3PpIhwKbiZv5x2Y&s'
      alt="Project" className="card-image" />
    <div className="card-content">
      <h3 className="card-title">Cyber</h3>
      <p className="card-description">aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
        aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
        aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
        aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
        aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
      </p>
      <div className="card-buttons">
        <button className="card-button">Github</button>
        <button className="card-button">Read More</button>
      </div>
    </div>
  </div>

  <div className="card">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRs8ram-SCoTrQsgB5xrwVs326B3PpIhwKbiZv5x2Y&s'
      alt="Project" className="card-image" />
    <div className="card-content">
      <h3 className="card-title">Software Dev</h3>
      <p className="card-description">aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
        aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
        aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
        aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
        aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
      </p>
      <div className="card-buttons">
        <button className="card-button">Github</button>
        <button className="card-button">Read More</button>
      </div>
    </div>
  </div>

  <div className="card">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRs8ram-SCoTrQsgB5xrwVs326B3PpIhwKbiZv5x2Y&s'
      alt="Project" className="card-image" />
    <div className="card-content">
      <h3 className="card-title">Databases</h3>
      <p className="card-description">aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
        aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
        aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
        aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
        aDHSAFNGIJNOANGONOANSDLNGSDNS JNGNSOGNSK
      </p>
      <div className="card-buttons">
        <button className="card-button">Github</button>
        <button className="card-button">Read More</button>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Home;
