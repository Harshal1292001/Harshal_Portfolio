import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Achievements.css';

// Import certificate images
import certPython from '../assets/devlean.jpg';
import certPlacement from '../assets/CodeOvate.jpg';
import certSQL from '../assets/SQL.jpg';
import certCSS from '../assets/Html_CSS.jpg';
import certJava from '../assets/java_Programming.jpg';
import certIIS from '../assets/IIS_Server.jpg';

// Infosys Springboard certificates
import fullStackCert from '../assets/FSD.jpg';
import cloudCert from '../assets/Cloud_Computing.jpg';
import mlFundamentalsCert from '../assets/ML.jpg';
import mobileAdvancedCert from '../assets/Mobile_App.jpg';

// Navigation component
import Navigation from './Navigation';

function Achievements() {
  const [show, setShow] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleShow = (cert) => {
    setSelectedCert(cert);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const certificates = [
    {
      title: "MySQL Basics",
      issuer: "Great Learning Academy",
      year: "March 2024",
      description: "Free online course - MySQL Basics",
      image: certSQL,
    },
    {
      title: "Front End Development - CSS",
      issuer: "Great Learning Academy",
      year: "February 2024",
      description: "Free online course - CSS Fundamentals",
      image: certCSS,
    },
    {
      title: "Java Programming",
      issuer: "Great Learning Academy",
      year: "February 2024",
      description: "Free online course - Java Programming",
      image: certJava,
    },
    {
      title: "IIS Web Server: Publishing and Deploying Web Applications",
      issuer: "Udemy",
      year: "October 2025",
      description: "4.5-hour course on IIS Server Management",
      image: certIIS,
    },
    {
      title: "Learning Full Stack Development",
      issuer: "Infosys Springboard",
      year: "October 2024",
      description: "Successfully completed Full Stack Development training",
      image: fullStackCert,
    },
    {
      title: "Cloud Computing",
      issuer: "Infosys Springboard",
      year: "October 2024",
      description: "Successfully completed Cloud Computing fundamentals",
      image: cloudCert,
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "Infosys Springboard",
      year: "October 2024",
      description: "Successfully completed Machine Learning Fundamentals",
      image: mlFundamentalsCert,
    },
    {
      title: "Mobile Apps Development - Advanced Applications",
      issuer: "Infosys Springboard",
      year: "December 2024",
      description: "Successfully completed Advanced Mobile Applications Development",
      image: mobileAdvancedCert,
    },
    {
      title: "Python Programming",
      issuer: "Develearn × K.E. Society's Pratap College (RUSA Sponsored)",
      year: "Feb – Apr 2021",
      description: "45-hour program on Python Programming",
      image: certPython,
    },
    {
      title: "Placement Upscaling & Entrepreneurship Training",
      issuer: "Cocodeovate × Pratap College",
      year: "March 2021",
      description: "Training for Tech Placements in Companies",
      image: certPlacement,
    },
  ];

  return (
    <>
      <Navigation />

      <section 
        className="py-8 bg-light" 
        id="achievements"
        style={{ paddingTop: '100px' }}           // ← MOST IMPORTANT FIX - adjust this value
      >
        <div className="container">
          <h3 className="text-center mb-5 fw-bold text-primary">
            ACHIEVEMENTS & CERTIFICATIONS
          </h3>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {certificates.map((cert, index) => (
              <div className="col" key={index}>
                <div
                  className="card h-100 shadow border-0 rounded overflow-hidden"
                  onClick={() => handleShow(cert)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={cert.image}
                    className="card-img-top"
                    alt={`${cert.title} certificate`}
                    style={{ height: '240px', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <div className="card-body d-flex flex-column p-4">
                    <h5 className="card-title fw-bold mb-2">{cert.title}</h5>
                    <p className="card-text text-muted small mb-1">
                      {cert.year} • {cert.issuer}
                    </p>
                    <p className="card-text text-secondary flex-grow-1">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <Modal
          show={show}
          onHide={handleClose}
          size="xl"
          fullscreen="sm-down"
          centered
          dialogClassName="modal-90w"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fs-5 fw-bold">
              {selectedCert.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center p-3 p-md-4 bg-light">
            <img
              src={selectedCert.image}
              alt={`${selectedCert.title} certificate`}
              className="img-fluid rounded shadow"
              style={{
                maxHeight: '85vh',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default Achievements;