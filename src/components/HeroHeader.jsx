import React, { useEffect, useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import '../styles/HeroHeader.css';
import Button from './Button.jsx';
import Logo from './Logo.jsx';

export default function HeroHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' }
  ];

  return (
    <header className="hero-header">
      <nav className={`hero-nav ${menuOpen ? 'hero-nav-mobile-bg' : ''}`}>
        <div className={`hero-nav-inner ${scrolled ? 'hero-nav-scrolled' : ''}`}>
          <div className={`hero-nav-row ${scrolled ? 'hero-nav-row-scrolled' : ''}`}>
            <div className="hero-nav-left">
              <a href="/" className="hero-logo-link">
                <Logo />
              </a>

              <button
                className="hero-menu-button"
                onClick={() => setMenuOpen((v) => !v)}
              >
                <Menu
                  className={`hero-menu-icon ${menuOpen ? 'hero-menu-icon-hidden' : ''}`}
                  size={24}
                />
                <X
                  className={`hero-menu-icon hero-menu-icon-close ${
                    menuOpen ? 'hero-menu-icon-visible' : ''
                  }`}
                  size={24}
                />
              </button>

              <div className="hero-nav-links-desktop">
                <ul className="hero-nav-list">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="hero-nav-link">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className={`hero-nav-right ${menuOpen ? 'hero-nav-right-open' : ''}`}
            >
              <div className="hero-nav-links-mobile">
                <ul className="hero-nav-list-mobile">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="hero-nav-link-mobile">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hero-nav-actions">
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:B112201036@smail.iitpkd.ac.in" className="hero-action-link">
                    <Mail size={16} style={{ marginRight: 8 }} />
                    Contact
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href="#projects" className="hero-action-link">
                    View Projects
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
