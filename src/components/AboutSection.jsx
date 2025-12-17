import React from 'react';
import { MapPin, Code } from 'lucide-react';
import '../styles/AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate developer from IIT Palakkad, focused on creating impactful solutions
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <MapPin size={32} className="about-icon about-icon-blue" />
            <h3 className="about-card-title">Based in</h3>
            <p className="about-card-text">Srikakulam, Andhra Pradesh, India</p>
            <p className="about-card-note">Currently studying at IIT Palakkad</p>
          </div>

          <div className="about-card">
            <Code size={32} className="about-icon about-icon-green" />
            <h3 className="about-card-title">Expertise</h3>
            <p className="about-card-text">Full-stack development with PERN stack</p>
            <p className="about-card-note">C, C++, Python, React.js, Node.js</p>
          </div>
        </div>
      </div>
    </section>
  );
}
