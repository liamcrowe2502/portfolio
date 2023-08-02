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
<section className="home_banner_area">
  <div className="cards-container-above">
    <div className="card-image-txt1">
      <div className="card-image-above">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" alt="Profile"/>
      </div>
    </div>
    <div className="card-image-txt2">
      <div className="card-content-above">
        <p dangerouslySetInnerHTML={{ __html: displayedText }}></p>
      </div>
    </div>
    <div className="card-image-txt3">
      <div className="card-content-above">
        <div className="quote">
          <p>“My mama always said life was like a box of chocolates. You never know what you're gonna get.” - Forrest Gump, 1994</p>
          <div className="social-icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-twitch"></i>
          </div>
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
