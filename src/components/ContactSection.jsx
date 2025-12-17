import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import '../styles/ContactSection.css';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-subtitle">
          I'm currently looking for new opportunities. Feel free to reach out!
        </p>

        <div className="contact-grid">
          <a
            href="mailto:112201036@smail.iitpkd.ac.in"
            className="contact-card contact-card-email"
          >
            <Mail className="contact-card-icon contact-card-icon-email" size={32} />
            <h3 className="contact-card-title">Email</h3>
            <p className="contact-card-text">112201036@smail.iitpkd.ac.in</p>
          </a>

          <a
            href="tel:+919381449135"
            className="contact-card contact-card-phone"
          >
            <Phone className="contact-card-icon contact-card-icon-phone" size={32} />
            <h3 className="contact-card-title">Phone</h3>
            <p className="contact-card-text">+91-938-144-9135</p>
          </a>
        </div>

        <div className="contact-social-row">
          <a
            href="https://github.com/KJKrishna"
            className="contact-social-btn"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/jyothikrishna47"
            className="contact-social-btn"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
