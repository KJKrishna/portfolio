import React from 'react';
import { Briefcase, Award } from 'lucide-react';
import '../styles/ExperienceSection.css';

export default function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="experience-card">
          <div className="experience-header-row">
            <Briefcase size={32} className="experience-icon" />
            <div className="experience-header-text">
              <h3 className="experience-role">{experience.title}</h3>
              <p className="experience-company">{experience.company}</p>
              <p className="experience-period">{experience.period}</p>
            </div>
          </div>
          <ul className="experience-list">
            {experience.points.map((point) => (
              <li key={point} className="experience-list-item">
                <span className="experience-bullet">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="experience-extra-grid">
          <div className="experience-extra-card">
            <Award size={24} className="experience-extra-icon-green" />
            <h3 className="experience-extra-title">LeetCode Achievements</h3>
            <p className="experience-extra-text">50-Day Badge • 200+ Problems Solved</p>
          </div>

          <div className="experience-extra-card">
            <Award size={24} className="experience-extra-icon-yellow" />
            <h3 className="experience-extra-title">Leadership</h3>
            <p className="experience-extra-text">Class Representative 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}
