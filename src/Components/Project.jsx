import React from 'react'
import '../CSS/Project.css';
import Navigation from './Navigation';
function Project() {
  return (
    <>
    <Navigation/>
    <section>
      <h3 className="section-header">PROJECTS</h3>

      <div className="card">
        <h4 className="card-title">Employee Portal</h4>
        <p className="card-paragraph">
          A comprehensive enterprise-grade web application for managing employee information and workflows. Built with React frontend connected to a robust Java Spring Boot backend
          with Hibernate ORM for seamless database operations. Features secure user authentication, role-based access control, and real-time data synchronization. Includes employee records
          management, tracking, performance reviews, and document management capabilities. Backend deployed on IIS server with NSSM (Non-Sucking Service Manager)
          for reliable service management and continuous availability. Utilizes MS SQL Server for persistent data storage with optimized queries and indexing. Implements RESTful API architecture
          with pagination, caching strategies, and comprehensive error handling. Responsive mobile-first design ensures accessibility and optimal performance across all devices.
        </p>
        <p className="card-paragraph" style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
          Solo project: designed, implemented, and deployed end-to-end (frontend, backend, and production rollout) by me.
        </p>
        <ul>
          <li><strong>Frontend Development:</strong> React, JavaScript (ES6+), HTML, CSS</li>
          <li><strong>State Management:</strong> React Hooks (useState, useEffect, useCallback, useMemo)</li>
          <li><strong>UI/UX:</strong> Bootstrap, responsive design, form handling, accessibility basics</li>
          <li><strong>API Integration:</strong> axios, REST principles, error handling</li>
          <li><strong>Data Export:</strong> Excel generation, file downloads</li>
          <li><strong>Performance Optimization:</strong> Lazy loading, memoization, efficient rendering</li>
          <li><strong>Security:</strong> Client-side validation, session management, HTTPS</li>
          <li><strong>Build Tools:</strong> Vite, npm,XLSX</li>
          <li><strong>Version Control:</strong> Git, GitHub</li>
          <li><strong>Problem Solving:</strong> Multi-challenge solutions (claims consistency, dropdowns, session persistence, calculations)</li>
          <li><strong>Backend Development:</strong> Core Java, Spring Boot, Hibernate/JPA, RESTful API design, Postman API testing, Eclipse IDE</li>

        </ul>

      </div>

      <div className="card">
        <h4 className="card-title">Dashboard Application</h4>
        <p className="card-paragraph">
          Developed a full-stack procurement and contract management dashboard using React 19 and Vite. The application features secure authentication, multi-module reporting system, PDF/Excel export capabilities, and responsive design. Integrated with RESTful APIs for real-time data synchronization across purchase orders, labor requisitions, work orders, and gate pass management.
        </p>
        <p className="card-paragraph" style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
          Solo project: end-to-end implementation and deployment handled by me, including frontend, backend integration.
        </p>
        <ul>
           <li><strong>Frontend Development:</strong> React, JavaScript (ES6+), HTML, CSS</li>
          <li><strong>State Management:</strong> React Hooks (useState, useEffect, useCallback, useMemo)</li>
          <li><strong>UI/UX:</strong> Bootstrap, responsive design, form handling, accessibility basics</li>
          <li><strong>API Integration:</strong> axios, REST principles, error handling</li>
          <li><strong>Data Export:</strong> Excel generation, file downloads</li>
          <li><strong>Performance Optimization:</strong> Lazy loading, memoization, efficient rendering</li>
          <li><strong>Security:</strong> Client-side validation, session management, HTTPS</li>
          <li><strong>Build Tools:</strong> Vite, npm,XLSX</li>
          <li><strong>Version Control:</strong> Git, GitHub</li>
          <li><strong>Backend Development:</strong> Core Java, Spring Boot, Hibernate/JPA, RESTful API design, Postman API testing, Eclipse IDE</li>
        </ul>
      </div>

      <div className="card">
        <h4 className="card-title">RESTful API</h4>
        <p className="card-paragraph">
          Scalable, production-ready backend API with comprehensive endpoint management for data operations, user authentication, and third-party service integration.
          Built with Java Spring Boot framework ensuring enterprise-grade reliability and performance. Implements JWT-based authentication with token refresh mechanisms, role-based access control,
          and comprehensive security protocols. Features advanced error handling, request validation, pagination, and rate limiting. Utilizes MS SQL Server with Hibernate ORM for robust
          data persistence and complex query optimization. Includes comprehensive . Implements caching strategies, async operations,
        </p>
        <p className="card-paragraph" style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>
          Solo backend development and deployment — designed, implemented, and deployed to production by me.
        </p>
        <ul>
          <li>Java Core</li>
          <li>Spring Boot</li>
          <li>Hibernate ORM</li>
          <li>MS SQL Server</li>
          <li>JWT Authentication</li>
          <li>Role-Based Access Control</li>
          <li>Pagination</li>
        </ul>
      </div>
    </section>
    </>

    
  )

}

export default Project;