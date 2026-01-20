import React from 'react'
import Navigation from './Navigation';
function Education() {
   return (
    <>
   <Navigation/>
    <section>
      <h3 className="section-header">EDUCATION</h3>
      
      <div className="education-card">
        <h4 className="card-title">Master of Computer Applications</h4>
        <p className="card-company">SVKM IOT, Dhule</p>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Completed · 2025</p>
        <p className="card-paragraph">
          Advanced coursework in software development, database management, and web technologies. 
          Developed strong foundation in computer science principles and practical development skills.
        </p>
      </div>

      <div className="education-card">
        <h4 className="card-title">Bachelor of Science in Computer Science</h4>
        <p className="card-company">Pratap College, Amalner</p>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Completed · 2023</p>
        <p className="card-paragraph">
          Comprehensive education in computer science, programming languages, and software engineering. 
          Built foundational knowledge in algorithms, data structures, and web development.
        </p>
      </div>
    </section>
    </>
    
  )
}

export default Education;