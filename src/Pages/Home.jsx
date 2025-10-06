import React from 'react';
import '../Style/css/home.css';
import profileImage from '../Image/hari.png'; // Make sure the path is correct
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container">
            <header className="header">
                <div className="logo-dropdown">
                    <img src={profileImage} alt="logo" className="logo-image" />
                    <span className='name' >Dasa Haritha </span>

                </div>


                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/skills">Skills</Link>
                   
                    
                </nav>
            </header>

            <section className="main-section" id="home">
                <div className="text-content">
                    <h1>Hi, I'm <span>Dasa Haritha</span></h1>

                    <div className="resume-button-container">
                        <p className="resume-intro">
                            Curious about my journey, experience, and achievements? 🎯<br />
                            Click below to explore my resume and get to know the developer behind the code.
                        </p>
                        <a
                            href="https://drive.google.com/file/d/1KRIP1d9iQaUYBa_QJTYQIldOJtT_dFek/view?usp=drive_link" // Replace with actual resume link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-button"
                        >
                            Visit My Resume
                        </a>
                    </div>
                </div>

                <div className="image-container">
                    <img src={profileImage} alt="Santhoosh" />
                </div>
            </section>
            <footer className="footer">
                <div className="footer-content">
                    <p>© 2025 Haritha. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://github.com/Haritha123-dev" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/dasa-haritha-850831339/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="harithadasa11@gmail.com">Email</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Home;
