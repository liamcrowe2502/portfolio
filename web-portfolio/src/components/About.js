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
        <div class = "myself">
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
        <p>
        Hello, I'm Liam Crowe, a fourth-year student studying Software Systems Development at South East Technological University in Waterford. 
        I have a passion for all things technology and enjoy diving into the world of software development. When I'm not coding, you can find me 
        on the rugby field or hitting the gym. With a strong foundation in software development and a keen interest in exploring innovative solutions,
        I'm excited to showcase my skills and projects on this portfolio website. Join me on this journey as we explore the intersection of technology 
        and creativity.
        </p>
        </div>

    </>
  );
}

export default About;
