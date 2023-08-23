import React from 'react';
import Nishu from './images/Nishantk.png';
import './App.css'; 
const Home = () => {
    return ( 


    <section className="home">
        <div className="container">
            <div className="home-name-content">

                <img src={Nishu} alt="Nishu" className="profile-photo" />
            </div>
            <div className="home-contents">
                    <h1 >Hello, I am Nishant</h1>
                    <h2 > Web-Development</h2>
                    <p>I'm an undergraduate student at IIT KHARAGPUR </p>
                    <button className='hire' type="submit">Hire me</button>
            </div>
        </div>
    </section>
    );
}

export default Home;
