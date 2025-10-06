import React from 'react';
import '../Style/css/Achi.css'; // Make sure to create this CSS file
import kup from '../Image/kup.jpg'; // Replace with your actual images
import hyd from '../Image/hyd.png.jpg';
import lrn from '../Image/lrn.png'
import { Link } from 'react-router-dom';

function Achivements() {
  return (
    <div className="achievements-page">
      {/* Header */}
      <header className="achievements-header">
        <h1>🏅 My Achievements</h1>
        <p>A showcase of milestones and recognitions that mark my journey.</p><br />
         <Link to="/" className="back-button">⬅ Back to Home</Link>
      </header>

      {/* Achievements Container */}
      <div className="achievements-container">

        {/* Achievement 1 */}
        <div className="achievement-card">
          <img src={kup} alt="Anvesan Award" className="achievement-image" />
          <div className="achievement-details">
            <h3>🎉 1st Prize - Anvesan 2025</h3>
            <p><strong>🏆 Awarded on:</strong> 24th Jan 2025</p>
            <p><strong>💰 Prize:</strong> ₹15,000</p>
            <p>Grateful to the organizers, mentors, and my amazing team for the support!</p>
          </div>
        </div>

        {/* Achievement 2 */}
        <div className="achievement-card">
          <img src={hyd} alt="With Chancellor" className="achievement-image" />
          <div className="achievement-details">
            <h3>🎉 Double Victory - Anvesan 2025</h3>
            <p>🏆 1st Prize for Best Startup Idea – ₹15,000</p>
            <p>🏅 State-Level Appreciation Award – ₹5,000</p>
            <p>🙏 Honored by our Chancellor Dr. Mohan Babu Garu for making our university proud!</p>
            <p>Big thanks to my team and mentors! 🚀</p>
          </div>
        </div>

        {/* Achievement 3 */}
        <div className="achievement-card">
          <img src={lrn} alt="lrnbuddy" className="achievement-image" />
          <div className="achievement-details">
            <h3>📚 lrnbuddy - EdTech Startup</h3>
            <p><strong>Duration:</strong> Mar 2025 - Jun 2025</p>
            <p><strong>Gained:</strong> 370+ users in 50 days</p>
            <p><strong>Revenue:</strong> ₹3,700</p>
            <p><strong>Role:</strong> Project Head (10 member team)</p>
            <p>Built with WordPress. Focused on content creation, student outreach, and engagement.</p>
          </div>
        </div>

        {/* Personal Photo */}
        <div className="achievement-card personal-photo-card">
          {/* <img src={myPhoto} alt="My Photo" className="achievement-image" /> */}
          <div className="achievement-details">
            <h3>About Me</h3>
            <p>Proud and passionate about my work. These achievements are a reflection of my dedication and belief in teamwork and innovation.</p>
          </div>
        </div>

      </div>
        <footer className="footer">
                <div className="footer-content">
                    <p>© 2025 Santhosh. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://github.com/hisanthooosh" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/santhosh-gangasani-8461a72a9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:iamsanthoosh30@gmail.com">Email</a>
                    </div>
                </div>
            </footer>
    </div>
  );
}

export default Achivements;
