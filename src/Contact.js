import React from 'react';
import './App.css'; 
// import { FaIconName } from 'react-icons/fa';

import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
    <section className="contact">
        <div className="contact-form">
                <h3>Contact Me</h3>
                <h3 class="message">Send me a message:</h3>
            <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit">Send</button>
            </form>
        </div>
        <div>
            <br/>
            <br/>
            <br/>
        </div>
        <div className="container-contact">
            <h3 class="connect-me">Let's Talk</h3>
        <div className="contact-info">
            <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:nishantk1103@email.com">Mail</a>
            </div>
            <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a href="https://www.linkedin.com/in/nishant-kumawat-0a6362255/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="contact-item">
            <FaGithub className="contact-icon" />
            <a href="https://github.com/Nishu1103" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
        </div>
        <br/>
        <br/>
        <div className="copyright">| Copyright © 2023 Portfolio. All rights reserved |</div>
    </section>
    );
}

export default Contact;
