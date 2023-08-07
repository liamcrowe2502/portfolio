import React, { useEffect } from 'react';
import './aboutStyles.css';

function About() {
  useEffect(() => {
    const letters = document.querySelectorAll('.bouncy');

    const toggleRubberBand = (e) => {
      e.target.classList.add('bouncing');
      e.target.addEventListener('animationend', () => {
        e.target.classList.remove('bouncing');
      });
    };

    letters.forEach((letter) => {
      letter.addEventListener('mouseenter', toggleRubberBand);
    });

    return () => {
      letters.forEach((letter) => {
        letter.removeEventListener('mouseenter', toggleRubberBand);
      });
    };
  }, []);

  return (
    <>
          <div className="bouncy-container">
            <h1 className="bouncy">
              A
            </h1>
            <h1 className="bouncy">
              b
            </h1>
            <h1 className="bouncy">
              o
            </h1>
            <h1 className="bouncy">
              u
            </h1>
            <h1 className="bouncy">
              t
            </h1>
        </div>
       

        <div div="content-about">
  <div class="card-about">
    <div class="profile-sidebar">
      <img class="profile-img" src="https://www.scoliosis-rehabilitation.com/mymedia/2016/06/no-face.png" alt="Owner of portfolio website"/>
      <ul>
        <li class="social-list"><a aria-label="linkedin" href="#"><i class="fa-brands fa-linkedin"></i></a></li>
        <li class="social-list"><a aria-label="github" href="#"></a><i class="fa-brands fa-github"></i></li>
        <li class="social-list"><a aria-label="instagram" href="#"><i class="fa-brands fa-instagram"></i></a></li>
      </ul>
    </div>
    <div class="profile-main">
      <h2 class="profile-name">Liam Crowe</h2>
      <hr class="line"/>
      <p class="profile-position">Software Developer</p>
      <p class="profile-body">Hello, I'm Liam Crowe, a fourth-year student studying Software Systems Development at South East Technological University in Waterford. 
        I have a passion for all things technology and enjoy diving into the world of software development. When I'm not coding, you can find me 
        on the rugby field or hitting the gym. With a strong foundation in software development and a keen interest in exploring innovative solutions,
        I'm excited to showcase my skills and projects on this portfolio website. Join me on this journey as we explore the intersection of technology 
        and creativity.</p>
    </div>
  </div>

</div>


<div className="bouncy-container">
            <h1 className="bouncy">
              E
            </h1>
            <h1 className="bouncy">
              X
            </h1>
            <h1 className="bouncy">
              P
            </h1>
            <h1 className="bouncy">
              E
            </h1>
            <h1 className="bouncy">
              R
            </h1>
            <h1 className="bouncy">
              I
            </h1>
            <h1 className="bouncy">
              E
            </h1>
            <h1 className="bouncy">
              N
            </h1>
            <h1 className="bouncy">
              C
            </h1>
            <h1 className="bouncy">
              E
            </h1>
        </div>
    </>
  );
}

export default About;
