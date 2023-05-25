import "./homeStyles.css";
import React, { useState, useEffect } from 'react';

function Home() {
  const greeting = "Hi, I am Liam";

  return (
    <>
      <div className="intro">
        <p>{greeting}</p>
        <div className="rotated-square">
          <div className="square"></div>
        </div>
      </div>

      <div>
        <h1 className="about-heading">
          <hr className="left-line" />
          About Me
          <hr className="right-line" />
        </h1>
      </div>
      
      <div>
        <h1 className="about-heading">
          <hr className="left-line" />
          Experience
          <hr className="right-line" />
        </h1>
      </div>

      <div>
        <h1 className="about-heading">
          <hr className="left-line" />
          Featured Projects
          <hr className="right-line" />
        </h1>
      </div>

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
    </>
  );
}

export default Home;
