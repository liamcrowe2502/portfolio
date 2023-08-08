import React, { useState, useEffect } from 'react';
import './contactStyles.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your desired actions with the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Reset the form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="main-container">
      <div className="left-half"></div>
      <div className="right-half">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438348.166706594!2d-10.737549975262766!3d53.357586573183696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485e619e5d73698f%3A0xca9b39444d6ac68d!2sIreland!5e0!3m2!1sen!2sie!4v1691504088096!5m2!1sen!2sie"
          title="Google Maps"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-container">
        <div className="bouncy-container">
          <h1 className="bouncy">C</h1>
          <h1 className="bouncy">o</h1>
          <h1 className="bouncy">n</h1>
          <h1 className="bouncy">t</h1>
          <h1 className="bouncy">a</h1>
          <h1 className="bouncy">c</h1>
          <h1 className="bouncy">t</h1>
        </div>

        <div className="how-to-contact-me">
          <p>
            I am interested in any opportunities – software development,
            cybersecurity, business analysis. However, if you have other
            requests or questions, don't hesitate to contact me using the form
            below. Lastly, I am available for work opportunities abroad.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              className="subjectTextArea"
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
