import React from 'react';
import Navigation from './Navigation';

function Education() {
  return (
    <>
      <Navigation />
      <section>
        <h3 className="section-header">EDUCATION</h3>

        <div className="education-card">
          <h4 className="card-title">Master of Computer Applications (MCA)</h4>
          <p className="card-company">
            Shri Vile Parle Kelavani Mandal's Institute of Technology (SVKM-IOT), Dhule
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            Completed · 2025 &nbsp;|&nbsp; CGPA: <strong>7.22</strong>
          </p>
          <p className="card-paragraph">
            Advanced coursework in software development, database management, and web technologies.
            Developed a strong foundation in computer science principles and practical development skills.
          </p>
        </div>

        <div className="education-card">
          <h4 className="card-title">
            Bachelor of Science in Computer Science (B.Sc Computer Science)
          </h4>
          <p className="card-company">Pratap College, Amalner</p>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            Completed · 2023 &nbsp;|&nbsp; CGPA: <strong>9.22</strong>
          </p>
          <p className="card-paragraph">
            Comprehensive education in computer science, programming languages, and software engineering.
            Built foundational knowledge in algorithms, data structures, and web development.
          </p>
        </div>

        <div className="education-card">
          <h4 className="card-title">12th Standard</h4>
          <p className="card-company">
            Jay Yogeshwar Arts and Science College, Amalner
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            Completed · 2019 &nbsp;|&nbsp; Percentage: <strong>64.62%</strong>
          </p>
        </div>

        <div className="education-card">
          <h4 className="card-title">10th Standard</h4>
          <p className="card-company">
            B. Y. Chaudhary High School, Shirsale
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            Completed · 2017 &nbsp;|&nbsp; Percentage: <strong>71.40%</strong>
          </p>
        </div>

      </section>
    </>
  );
}

export default Education;
