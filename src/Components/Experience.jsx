import React from 'react'
import Navigation from './Navigation';
import '../CSS/Experience.css';

function Experience() {
  return (
    <>
      <Navigation/>
      <section>
        <h3 className="section-header">EXPERIENCE</h3>
        <div className="card">
          <h4 className="card-title">Junior Software Developer</h4>
          <p className="card-company text-white" style={{color: "white"}}>Company Name : Nyati Group</p>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            Feb 2025 - Present
          </p>
          <p className="card-paragraph" style={{color: "white"}}>
            Independently developed high-impact enterprise applications including a centralized Dashboard, Employee Portal, and a specialized QA Dashboard. 
            Utilized React JS for modern frontend interfaces and Java Spring Boot 3 with Hibernate and MS SQL Server 
            for robust backend services. Managed the complete lifecycle from multi-database architecture design in Eclipse to 
            full production deployment on Windows Servers.
          </p>
          <ul style={{ color: "white" }}>
            <li>
              <strong>QA Dashboard (Quality Assurance):</strong> Developed a comprehensive dashboard to monitor construction quality metrics, 
              site inspections, and material testing. Integrated real-time data visualization and automated report generation 
              (PDF/Excel) to improve site audit efficiency.
            </li>
            <li>
              <strong>Dashboard & Employee Portal:</strong> Single-handedly built a centralized portal for procurement tracking and 
              employee management, including automated HR workflows and IT ticketing systems.
            </li>
            <li>
              <strong>Full-Stack Development:</strong> Implemented responsive frontends using React JS and secure backends 
              using Java Spring Boot, utilizing Hibernate for efficient MS SQL Server data mapping.
            </li>
            <li>
              <strong>API & Security:</strong> Designed and tested RESTful APIs using Postman, implementing secure data exchange 
              between internal systems and external networks.
            </li>
            <li>
              <strong>Deployment & DevOps:</strong> Handled end-to-end production hosting; deployed React applications on 
              <strong> IIS Server</strong> and configured Spring Boot backend services as Windows services using <strong>NSSM</strong>.
            </li>
            <li>
              <strong>Environment:</strong> Optimized development workflow using VS Code for frontend and Eclipse for 
              complex backend logic involving connections to multiple enterprise databases.
            </li>
          </ul>
        </div>
      </section>
    </>
  )
};

export default Experience;