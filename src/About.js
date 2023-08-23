import React from 'react';
import professional from './images/photo.png';
import './App.css'; 
const About = () => {
    return (
        <section className="about">
            <div className="container">
        <div className="about-content">
            <h2>About Me</h2>
            <p>
            Hello!My name is Nishant kumawat.<br/> I am a 2nd -year undergraduate student of the department of Agricultural and food engineering enrolled in its Dual degree course.  <br/>       I am a boarder of Acharya Jagdish chandra bose Hall of Residence.<br/> I am from Sikar, Rajasthan.
            </p>
            {/* <p>
            Outside of [Your Field of Interest], I enjoy [Your Hobbies or Interests].
            I believe in continuous learning and love to [Talk About Your Learning Approach or Activities].
            With a blend of [Your Skills] skills, I am excited to [Your Aspirations or Future Plans].
            </p> */}
            <p>
            Feel free to explore my portfolio and learn more about my projects and experiences.
            If you'd like to connect or collaborate, don't hesitate to reach out!
            </p>
        </div>
        <div className="images-about">
        <img src={professional} alt="Nishu" className="profile-photo" />
        </div>
        </div>
    </section>
    );
}

export default About;
