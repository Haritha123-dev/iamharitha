import React from 'react';
import '../Style/css/skills.css';

// Web Development
import htmlLogo from '../Image/html.png';
import cssLogo from '../Image/css.png';
import jsLogo from '../Image/javascript.png';
import reactLogo from '../Image/react.png';
import javaLogo from '../Image/java.png';
import springLogo from '../Image/springboot.png';
import sqlLogo from '../Image/sql.png';

// Data Analytics
import pythonLogo from '../Image/python.png';
import powerbiLogo from '../Image/powerbi.png';
import numpyLogo from '../Image/numpy.png';
import pandasLogo from '../Image/pandas.png';
import matplotlibLogo from '../Image/matplotlib.png';

// Soft & Tools
import gitLogo from '../Image/git.png';
import vscodeLogo from '../Image/vscode.png';
import communicationLogo from '../Image/communication.png';
import teamworkLogo from '../Image/teamwork.png';
import { Link } from 'react-router-dom';

function Skills() {
  return (
    <div className="skills-page">
      <header className="skills-header">
        <h1> Skills & Technologies</h1>
        <p>
          Here's a breakdown of my technical toolkit — covering Web Development, Data Analytics,
          and essential tools I use every day.
        </p> <br />
        <Link to="/" className="back-button">⬅ Back to Home</Link>
      </header>

      <div className='flex'>

      {/* Web Development */}
      <div className="skills-category">
        <h2>🌐 Web Development</h2>

        <div className="skills-subcategory">
          <h3>🖥️ Frontend</h3>
          <div className="skills-grid large-icons">
            <div className="skill-card"><img src={htmlLogo} alt="HTML" /><span>HTML5</span></div>
            <div className="skill-card"><img src={cssLogo} alt="CSS" /><span>CSS3</span></div>
            <div className="skill-card"><img src={jsLogo} alt="JavaScript" /><span>JavaScript</span></div>
            <div className="skill-card"><img src={reactLogo} alt="React" /><span>React.js</span></div>
          </div>
        </div>

        <div className="skills-subcategory">
          <h3>🧠 Backend</h3>
          <div className="skills-grid large-icons">
            <div className="skill-card"><img src={javaLogo} alt="Java" /><span>Java</span></div>
           
          </div>
        </div>

        <div className="skills-subcategory">
          <h3>💾 Database</h3>
          <div className="skills-grid large-icons">
            <div className="skill-card"><img src={sqlLogo} alt="SQL" /><span>SQL</span></div>
          </div>
        </div>
      </div>

      

      {/* Tools & Soft Skills */}
      <div className="skills-category">
        <h2>🧰 Tools & Soft Skills</h2>
        <div className="skills-grid large-icons">
          <div className="skill-card"><img src={gitLogo} alt="Git" /><span>Git & GitHub</span></div>
          <div className="skill-card"><img src={vscodeLogo} alt="VSCode" /><span>VS Code</span></div>
          <div className="skill-card"><img src={communicationLogo} alt="Communication" /><span>Communication</span></div>
          <div className="skill-card"><img src={teamworkLogo} alt="Teamwork" /><span>Teamwork</span></div>
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

export default Skills;
