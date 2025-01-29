import React from "react";
import "./Home.css";
import About from './About';
import Contact from './Contact';
import Department from './Department';
import { Link } from "react-router-dom";
import GenDept from "../assets/GenDept.png";
import { useDeparts } from "../context/DepartmentProvider";

const Home = () => {
  const departs = useDeparts();
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
              {departs.map((dept, index) => (
                <div key={index} className="cardScroll">
                  <img src={dept.image} alt="Card" />
                </div>
              ))}
              {/* Duplicate the images for seamless circular animation */}
              {departs.map((dept, index) => (
                <div key={`duplicate-${index}`} className="cardScroll">
                  <img src={dept.image} alt="Card" />
                </div>
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

