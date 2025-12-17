import React from 'react';
import '../styles/SkillsSection.css';

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          <div className="skill-card skill-card-blue">
            <h3 className="skill-card-title skill-title-blue">Languages</h3>
            <div className="skill-chip-row">
              {skills.languages.map((skill) => (
                <span key={skill} className="skill-chip skill-chip-blue">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-card skill-card-green">
            <h3 className="skill-card-title skill-title-green">Frameworks</h3>
            <div className="skill-chip-row">
              {skills.frameworks.map((skill) => (
                <span key={skill} className="skill-chip skill-chip-green">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-card skill-card-red">
            <h3 className="skill-card-title skill-title-red">Databases</h3>
            <div className="skill-chip-row">
              {skills.databases.map((skill) => (
                <span key={skill} className="skill-chip skill-chip-red">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-card skill-card-purple">
            <h3 className="skill-card-title skill-title-purple">Tools</h3>
            <div className="skill-chip-row">
              {skills.tools.map((skill) => (
                <span key={skill} className="skill-chip skill-chip-purple">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
