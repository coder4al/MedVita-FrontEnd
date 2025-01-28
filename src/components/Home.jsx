import React from "react";
import "./Home.css";
import About from './About';
import Contact from './Contact';
import Department from './Department';
import { Link } from "react-router-dom";
import GenDept from "../assets/GenDept.png";
import CardioDept from "../assets/CardioDept.png";
import NeuroDept from "../assets/NeuroDept.png";
import OrthoDept from "../assets/OrthoDept.png";
import ENTDept from "../assets/ENTDept.png";
import UrologyDept from "../assets/UrologyDept.png";
import GasteroDept from "../assets/GasteroDept.png";
import PulmoDept from "../assets/PulmoDept.png";
import EyeDept from "../assets/EyeDept.png";
import DermatologyDept from "../assets/DermatologyDept.png";
import DentDept from "../assets/DentDept.png";

const Home = () => {
  const images = [
    { id: 1, src: CardioDept, alt: "Card 1" },
    { id: 2, src: NeuroDept, alt: "Card 2" },
    { id: 3, src: OrthoDept, alt: "Card 3" },
    { id: 4, src: ENTDept, alt: "Card 4" },
    { id: 5, src: UrologyDept, alt: "Card 5" },
    { id: 6, src: GasteroDept, alt: "Card 6" },
    { id: 7, src: PulmoDept, alt: "Card 7" },
    { id: 8, src: EyeDept, alt: "Card 8" },
    { id: 9, src: DermatologyDept, alt: "Card 9" },
    { id: 10, src: DentDept, alt: "Card 10" },
  ];
  return (
    <>
      <div className="home" id="home">
        {/* Welcome Section */}
        <section className="welcome-section">
          <div className="welcome-content">
            <h1>Welcome to MedVita Health Care</h1>
            <p>
              At MedVita, we blend innovation, compassion, and excellence to deliver comprehensive health care services.
              From specialized departments to personalized care, your health is our priority.
            </p>
          </div>
          <div className="home-buttons">
            <Link to="/login" className="btn-primary">
              Login/Register
            </Link>
            <a href="#departments" className="btn-secondary">
              Learn More
            </a>
          </div>
          <img src={GenDept} alt="Welcome" className="welcome-image" />
        </section>

        {/* Image Carousel Section */}
        <section className="carousel-section">
          <h2>Our Facilities</h2>
          <div className="carousel">
            <div className="carousel-track">
              {images.map((image) => (
                <img key={image.id} src={image.src} alt={image.alt} />
              ))}
              {/* Duplicate the images for seamless circular animation */}
              {images.map((image) => (
                <img key={`duplicate-${image.id}`} src={image.src} alt={image.alt} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <h2>What Our Patients Say</h2>
          <div className="testimonials-container">
            <div className="testimonial-card">
              <p>
                "MedVita provided exceptional care during my recovery. The staff is incredibly supportive and professional."
              </p>
              <h4>- John D.</h4>
            </div>
            <div className="testimonial-card">
              <p>
                "Thanks to MedVita's cardiology team, I feel stronger and healthier than ever before."
              </p>
              <h4>- Sarah L.</h4>
            </div>
            <div className="testimonial-card">
              <p>
                "The neurology department at MedVita is second to none. They truly changed my life."
              </p>
              <h4>- Mark T.</h4>
            </div>
          </div>
        </section>
        <Department />
      <About />
      <Contact />
      </div>
    
    </>
  );
};

export default Home;

