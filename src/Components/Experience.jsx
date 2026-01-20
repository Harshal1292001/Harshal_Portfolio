import React from 'react'
import Navigation from './Navigation';
import '../CSS/Experience.css';

function ExPerience() {
  return (
    <>
     return (
      <Navigation/>
    <section>
      <h3 className="section-header">EXPERIENCE</h3>
      <div className="card">
        <h4 className="card-title">Trainee Software Support Engineer</h4>
        <p className="card-company">Company Name : Nyati Group</p>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Feb 2025 - Present</p>
        <p className="card-paragraph">
          Independently developed a Dashboard and Employee Portal application. Utilized React JS for the frontend and Java Spring Boot with Hibernate and MS SQL Server
           for the backend. Handled full deployment, including deploying React JS on IIS server, starting backend services using NSSM,
            connecting the frontend to the backend, and testing APIs in Postman. Used Eclipse for backend development 
            with connections to multiple databases and VS Code for frontend development.
        </p>
        <ul>
          <li>Developed Dashboard and Employee Portal single-handedly</li>
          <li>Implemented frontend using React JS</li>
          <li>Built backend with Java Spring Boot, Hibernate, and MS SQL Server</li>
          <li>Managed deployment: React on IIS, backend services via NSSM</li>
          <li>Connected frontend to backend and tested APIs in Postman</li>
          <li>Utilized Eclipse for backend (multi-database connections) and VS Code for frontend</li>
        </ul>
      </div>
    </section>
  )
    </>
  )
}

export default ExPerience;