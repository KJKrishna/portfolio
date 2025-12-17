import React from 'react';
import { Mail, Phone, Github, Linkedin, ChevronRight } from 'lucide-react';
import '../styles/HeroSection.css';
import Button from './Button.jsx';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section-inner">
        <div className="hero-text-block">
          <div className="hero-availability-pill">
            <div className="hero-availability-dot" />
            <span>Available for Opportunities</span>
          </div>

          <h1 className="hero-title">
            Heyy Hii I am {' '}
            <span className="hero-title-highlight">Kinjarapu JyothiKrishna</span>
          </h1>

          <p className="hero-subtitle">
            Final-year B.Tech CSE student passionate about full-stack development, machine
            learning, and building data-driven solutions. Proficient in the PERN stack and eager
            to solve real-world challenges.
          </p>

          <div className="hero-actions">
            <Button size="lg" className="hero-primary-btn" asChild>
              <a href="#projects">
                <span className="hero-primary-btn-text">View My Work</span>
                <ChevronRight size={20} style={{ marginLeft: 4 }} />
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="hero-secondary-btn"
              asChild
            >
              <a href="mailto:B112201036@smail.iitpkd.ac.in">
                <span>Get in Touch</span>
              </a>
            </Button>
          </div>

          <div className="hero-contact-row">
            <a href="mailto:B112201036@smail.iitpkd.ac.in" className="hero-contact-icon">
              <Mail size={20} />
            </a>
            <a href="tel:+919381449135" className="hero-contact-icon">
              <Phone size={20} />
            </a>
            <a href="https://github.com/KJKrishna" className="hero-contact-icon">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/jyothikrishna47" className="hero-contact-icon">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-background">
        <div className="hero-background-image" />
        <div className="hero-background-overlay" />
      </div>
    </section>
  );
}
