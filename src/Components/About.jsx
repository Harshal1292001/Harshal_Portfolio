// About.jsx
import React from 'react';
import Navigation from './Navigation';
import '../CSS/About.css';
import {
  FaGithub, FaInstagram, FaYoutube, FaLinkedin,
  FaEnvelope, FaCode, FaTwitter
} from 'react-icons/fa';
import '../CSS/SocialLink.css';

// Make sure this path is correct
import profilePhoto from '../assets/Harshal.jpeg';
// import SocialLinks from './SocialLink';

function About() {

   const socialLinks = [
      {
        name: 'GitHub',
        url: 'https://github.com/harshal1292001',
        icon: <FaGithub />,
        color: '#333'
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/harshal-patil-829b3220b',
        icon: <FaLinkedin />,
        color: '#0a66c2'
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/harsh_suryawanshi_78',
        icon: <FaInstagram />,
        color: '#e1306c'
      },
      {
        name: 'YouTube',
        url: 'https://youtube.com/@harsh_suryawanshi_78?si=tVLyDFpbVMRgwPP0',
        icon: <FaYoutube />,
        color: '#ff0000'
      },
      {
        name: 'LeetCode',
        url: 'https://leetcode.com/harshal1292001/',
        icon: <FaCode />,
        color: '#f79f1b'
      },
      {
        name: 'Email',
        url: 'mailto:hp12092001@example.com',
        icon: <FaEnvelope />,
        color: '#ea4335'
      },
    ];
  return (
    <>
      <Navigation />

      <main className="about-page">
        <section className="about-hero">
          <div className="container">
            <div className="hero-wrapper">
              {/* Profile Photo Section */}
              <div className="profile-photo-wrapper">
                <div className="photo-frame">
                  <img
                    src={profilePhoto}
                    alt="Harshal Patil - Full Stack Developer"
                    className="profile-photo"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text & Introduction */}
              <div className="hero-content">
                <h1 className="main-title">
                  Hi, I'm <span className="gradient-text">Harshal Patil</span>
                </h1>

                <h2 className="subtitle">
                  Trainee Software Support Engineer — Full Stack Developer
                </h2>

                <div className="description">
                  <p>
                    Working at <strong>Nyati Group</strong> as a Trainee Software Support Engineer
                    while actively contributing as a Full Stack Developer.
                  </p>

                  <p>
                    I build modern, responsive frontends with <strong>React, JavaScript</strong>
                    and develop robust enterprise backends using
                    <strong> Java • Spring Boot • Hibernate • Microsoft SQL Server</strong>.
                  </p>

                  <p>
                    I independently handle end-to-end production deployments on Windows servers (IIS),
                    run services as managed processes using NSSM, and focus on production stability,
                    clean code, and automation.
                  </p>

                  <p>
                    Passionate about writing reliable software and helping teams succeed.
                  </p>
                </div>

                <div className="cta-buttons">
                  <a
                    href="https://drive.google.com/file/d/1J-_GiGKchLjD8evUs60CXagZ37Bgk7zJ/view?usp=sharing"  // ← Change this path
                    className="btn primary-btn"
                    download
                  >
                    <span className="emoji">📄</span> Download Resume
                  </a>

                  <a href="mailto:hp12092001@gmail.com" className="btn secondary-btn">
                    Let's Connect →
                  </a>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="skills-section">
              <h3 className="skills-heading">Core Skills & Technologies</h3>
              <div className="skills-grid">
                {[
                  "React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap 5",
                  "Java", "Spring Boot", "Hibernate", "RESTful APIs",
                  "MS SQL Server", "PostgreSQL", "Git", "GitHub",
                  "Postman", "IIS Deployment", "NSSM", "Windows Server",
                  "Production Support", "Troubleshooting"
                ].map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="social-section">
          <h2 className="social-title">Find Me Online</h2>

          <div className="social-container">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={link.name}
                style={{ '--hover-color': link.color }}
              >
                <div className="icon-wrapper">
                  {link.icon}
                </div>
                <span className="tooltip">{link.name}</span>
              </a>
            ))}
          </div>
        </section>

      </main>

    </>
  );
}

export default About;