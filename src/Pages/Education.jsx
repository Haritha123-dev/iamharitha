import React from 'react';
import '../Style/css/Education.css';
import mbu from "../Image/mbu.png";
import vjm from "../Image/vijm.png";
import mar from "../Image/marry.png";
import { Link } from 'react-router-dom';

function Education() {
  return (
    <div className="education-page">
      <header className="education-header">
        
        <h1>🎓 My Education</h1>
        <p>A journey of learning and growth through schools and universities.</p> <br />

        <Link to="/" className="back-button">⬅ Back to Home</Link>

      </header>

      <div className="education-timeline">

        {/* MCA */}
        <div className="education-card">
          <div className="edu-logo">
            {/* Add your college logo here */}
            <img src={mbu} alt="Mohan Babu University" />
          </div>
          <div className="edu-details">
            <h2>MCA – Mohan Babu University, Tirupati</h2>
            <p><strong>Duration:</strong> 2024 – 2026 (Pursuing)</p>
            <p><strong>Current CGPA:</strong> 97%</p>
          </div>
        </div>

        {/* BCA */}
        <div className="education-card">
         
          <div className="edu-details">
            <h2>Bachelor of science–Jyothirmayee womens degree College</h2>
            
            <p><strong>Duration:</strong> 2021 – 2024</p>
            <p><strong>Final CGPA:</strong> 7.9%</p>
          </div>
        </div>

        {/* Intermediate */}
        <div className="education-card">
          
          <div className="edu-details">
            <h2>Intermediate  – Jyothirmayee junior college</h2>
            <p><strong>Marks:</strong> 808 / 1000</p>
            <p><strong>Duration:</strong> 2019 – 2021</p>
          </div>
        </div>

        {/* 10th */}
        <div className="education-card">
          
          <div className="edu-details">
            <h2>10th Class</h2>
            <p><strong>CGPA:</strong> 8.8</p>
            <p><strong>Completed:</strong> 2019</p>
          </div>
        </div>

      </div>

      <footer className="footer">
                <div className="footer-content">
                    <p>© 2025 Santhosh. All rights reserved.</p>
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

export default Education;
