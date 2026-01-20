import React from 'react'

function Header() {
   return (
    <div className="header-content">
      <div>
        <div className="image-wrapper">
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%235eead4' width='200' height='200'/%3E%3Ctext x='50%' y='50%' font-size='80' font-weight='bold' fill='%23101c35' text-anchor='middle' dominant-baseline='middle'%3EHP%3C/text%3E%3C/svg%3E" 
            alt="Harshal Patil"
            style={{ width: '112px', height: '112px' }}
          />
          <div>
            <h1>Harshal Patil</h1>
          </div>
        </div>

            <h2>Trainee Software Support Engineer — Full Stack Developer</h2>

        <p style={{ marginTop: '1.5rem', lineHeight: '1.8' }}>
          Working at Nyati Group as a Trainee Software Support Engineer while contributing as a Full Stack Developer. I build responsive frontends with React
          and implement robust backends using Java Spring Boot and Hibernate with MS SQL Server. I independently handle end-to-end deployments and production rollouts,
          deploying backend services to Windows servers (IIS) and running them as managed services using NSSM.
        </p>

        <a href="#" className="resume-btn" onClick={(e) => { e.preventDefault() }}>
          <span>📄</span> Download Resume
        </a>

        <nav className="nav-wrapper">
          <button 
            className="nav-link" 
            onClick={() => onNavigate('about')}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              color: 'inherit',
              fontSize: 'inherit',
              font: 'inherit'
            }}
          >
            <span>→</span> About
          </button>
          <button 
            className="nav-link" 
            onClick={() => onNavigate('experience')}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              color: 'inherit',
              fontSize: 'inherit',
              font: 'inherit'
            }}
          >
            <span>→</span> Experience
          </button>
          <button 
            className="nav-link" 
            onClick={() => onNavigate('projects')}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              color: 'inherit',
              fontSize: 'inherit',
              font: 'inherit'
            }}
          >
            <span>→</span> Projects
          </button>
          <button 
            className="nav-link" 
            onClick={() => onNavigate('education')}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              color: 'inherit',
              fontSize: 'inherit',
              font: 'inherit'
            }}
          >
            <span>→</span> Education
          </button>
          <button 
            className="nav-link" 
            onClick={() => onNavigate('achievements')}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              color: 'inherit',
              fontSize: 'inherit',
              font: 'inherit'
            }}
          >
            <span>→</span> Achievements
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Header;