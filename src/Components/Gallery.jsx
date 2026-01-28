// Gallery.jsx
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Gallery.css';     // ← create this file if you want custom styling

// Import your photos (update paths & names as needed)
import Nyati_Office_1 from '../assets/Photos/Nyati_Office_1.jpeg'
import Nyati_Office_2 from '../assets/Photos/Nyati_Office_2.jpeg'
import Nyati_Office_3 from '../assets/Photos/Nyati_Office_3.jpeg'
import Nyati_Office_4 from '../assets/Photos/Nyati_Office_4.jpeg'
import Nyati_Office_5 from '../assets/Photos/Nyati_Office_5.jpeg'
import Nyati_Office_6 from '../assets/Photos/Nyati_Office_6.jpeg'
import Nyati_Office_7 from '../assets/Photos/Nyati_Office_7.jpeg'
import Nyati_Office_8 from '../assets/Photos/Nyati_Office_8.jpeg'
import Birthday_1 from '../assets/Photos/Birthday_1.jpeg'
import Birthday_2 from '../assets/Photos/Birthday_2.jpeg'
import Birthday_3 from '../assets/Photos/Birthday_3.jpeg'
import Collage from '../assets/Photos/Collage.jpeg'


// Navigation component (same as in Achievements)
import Navigation from './Navigation';

function Gallery() {
  const [show, setShow] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleShow = (photo) => {
    setSelectedPhoto(photo);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  // Add your real photos here
  const photos = [
    {
      title: "Master Degree Collage Last Day",
      location: "Dhule",
      year: "July 2025",
      image: Collage,
    },{
      title: "Office First's Birthday Celebration",
      location: "Pune",
      year: "July 2025",
      image: Birthday_2,
    },{
      title: "Friend's Birthday Celebration",
      location: "Dhule",
      year: "July 2025",
      image: Birthday_3,
    },{
      title: "Office's  Birthday Celebration",
      location: "Pune",
      year: "July 2024",
      image: Birthday_1,
    },
    {
      title: "Nyati Group Office Memories",
      location: "Pune",
      year: "Dec 2024",
      image: Nyati_Office_1,
    },
    {
      title: "Nyati Group Office Memories",
      location: "Goa",
      year: "March 2025",
      image: Nyati_Office_2,
    },
    {
      title: "Nyati Group Office Memories",
      location: "Lonavala",
      year: "Aug 2025",
      image: Nyati_Office_3,
    },
    {
      title: "Nyati Group Office Memories",
      location: "Pune",
      year: "July 2024",
      image: Nyati_Office_4,
    },
    {
      title: "Nyati Group Office Memories",
      location: "Ahmednagar",
      year: "Jan 2025",
      image: Nyati_Office_5,
    },
    {
      title: "Nyati Group Office Memories",
      location: "Pune",
      year: "Oct 2025",
      image: Nyati_Office_6,
    },
    {
      title: "Nyati Group Office Memories",
      location: "Pune",
      year: "Nov 2024",
      image: Nyati_Office_7,
    },
    {
      title: "Nyati Group Office Memories",
      location: "Home",
      year: "2025",
      image: Nyati_Office_8,
    },
    // ← Add more objects here
  ];

  return (
    <>
      <Navigation />

      <section
        className="py-8 bg-light"
        id="gallery"
        style={{ paddingTop: '100px' }}           // ← Keeps navbar clearance (same as Achievements)
      >
        <div className="container">
          <h3 className="text-center mb-5 fw-bold text-primary">
            PHOTO GALLERY
          </h3>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {photos.map((photo, index) => (
              <div className="col" key={index}>
                <div
                  className="card h-100 shadow border-0 rounded overflow-hidden"
                  onClick={() => handleShow(photo)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={photo.image}
                    className="card-img-top"
                    alt={photo.title}
                    style={{ height: '260px', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  <div className="card-body d-flex flex-column p-4">
                    <h5 className="card-title fw-bold mb-2">{photo.title}</h5>
                    <p className="card-text text-muted small mb-1">
                      {photo.year} • {photo.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - Full size image view */}
      {selectedPhoto && (
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
              {selectedPhoto.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center p-3 p-md-4 bg-light">
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
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

export default Gallery;