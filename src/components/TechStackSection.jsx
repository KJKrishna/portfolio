import React from 'react';
import '../styles/TechStackSection.css';
import InfiniteSlider from './InfiniteSlider.jsx';
import ProgressiveBlur from './ProgressiveBlur.jsx';

export default function TechStackSection({ techLogos }) {
  return (
    <section className="tech-section">
      <div className="tech-section-inner">
        <div className="tech-section-label">
          <p className="tech-label-text">Tech Stack</p>
        </div>
        <div className="tech-section-slider">
          <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
            {techLogos.map((tech) => (
              <div key={tech.name} className="tech-logo-wrapper">
                <img
                  className="tech-logo-image"
                  src={tech.src}
                  alt={`${tech.name} Logo`}
                  title={tech.name}
                />
              </div>
            ))}
          </InfiniteSlider>

          <ProgressiveBlur
            className="tech-blur-left"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            className="tech-blur-right"
            direction="right"
            blurIntensity={1}
          />
        </div>
      </div>
    </section>
  );
}
