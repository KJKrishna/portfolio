import React from 'react';
import './App.css';
import HeroHeader from './components/HeroHeader.jsx';
import HeroSection from './components/HeroSection.jsx';
import TechStackSection from './components/TechStackSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import ContactSection from './components/ContactSection.jsx';

export default function App() {
  const skills = {
    languages: ['C', 'C++', 'Python', 'JavaScript'],
    frameworks: ['React.js', 'Node.js', 'Express.js'],
    databases: ['PostgreSQL', 'Sequelize ORM'],
    tools: ['GitHub', 'VS Code', 'Linux', 'Windows']
  };

  const projects = [
    {
      title: 'Placements-Record Management System',
      period: 'Apr 2025 - Jun 2025',
      description:
        'Full-stack web application for managing placement records with React.js, Node.js, Express.js, and PostgreSQL. Implemented secure authentication with bcrypt and seamless routing with React Router DOM.',
      tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize ORM'],
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop'
    },
    {
      title: 'Weather Forecasting System',
      period: 'Jun 2024 - Jul 2024',
      description:
        'Single-page application providing real-time weather data and 5-day forecasts using OpenWeatherMap API. Built with React.js and Bootstrap for responsive design.',
      tech: ['React.js', 'Bootstrap', 'OpenWeatherMap API', 'React Router'],
      image:
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&auto=format&fit=crop'
    },
    {
      title: 'Road Load Data Acquisition',
      period: 'Aug 2025 - Nov 2025',
      description:
        'Machine learning pipeline for road anomaly classification using Random Forest ensemble model, achieving 90%+ accuracy with real-time inference capabilities.',
      tech: ['Python', 'Machine Learning', 'Random Forest', 'Data Analysis'],
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop'
    },
    {
      title: 'DocAdd - Healthcare Directory',
      period: 'May 2023 - Jun 2023',
      description:
        'GUI-based desktop application using Python Tkinter to display specialist doctors based on location and specialization with custom validation and exception handling.',
      tech: ['Python', 'Tkinter', 'PIL'],
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop'
    }
  ];

  const experience = {
    title: 'Zoho Admin and API Developer',
    company: 'The Right Doctors',
    period: 'Apr 2025 - Jul 2025',
    points: [
      'Automated recruitment workflows using Zoho Recruit, Flow, and Deluge',
      'Built custom functions, webhooks, and blueprints for multi-stage hiring processes',
      'Integrated Zoho Forms, Mail, and Recruit via APIs for candidate tracking',
      'Developed API-based solutions for data extraction and duplication control'
    ]
  };

  const techLogos = [
    {
      name: 'React',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Node.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Python',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'PostgreSQL',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    {
      name: 'JavaScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'C++',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
    },
    {
      name: 'Git',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'Linux',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
    }
  ];

  return (
    <div className="app-root">
      <HeroHeader />
      <main className="app-main">
        <HeroSection />
        <TechStackSection techLogos={techLogos} />
        <AboutSection />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experience={experience} />
        <ContactSection />
      </main>
    </div>
  );
}
