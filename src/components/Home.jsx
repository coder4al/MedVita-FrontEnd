// // Home.js
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css"; // Style the Home page

// const Home = () => {
//   return (
//     <div className="home" id="home">
//       <h1>Welcome to MedVita Health Care</h1>
//       <p>
//         MedVita Health Care Management System ensures the best patient care and streamlined management
//         for medical professionals and administrators.
//       </p>
//       <div className="home-buttons">
//         <Link to="/login-register" className="btn-primary">
//           Login/Register
//         </Link>
//         <a href="#about" className="btn-secondary">
//           Learn More
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Home;



import React from "react";
import "./Home.css";
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
  return (
    <div className="home">
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
          <Link to="/login-register" className="btn-primary">
            Login/Register
          </Link>
          <a href="#about" className="btn-secondary">
            Learn More
          </a>
        </div>
        <img src={GenDept} alt="Welcome" className="welcome-image" />
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Key Services</h2>
        <div className="services-container">
          <div className="service-card">
            <img src={CardioDept} alt="Cardiology" />
            <h3>Cardiology</h3>
            <p>Comprehensive care for your heart with state-of-the-art diagnostic and treatment options.</p>
          </div>
          <div className="service-card">
            <img src={NeuroDept} alt="Neurology" />
            <h3>Neurology</h3>
            <p>Expert treatment for brain, spinal cord, and nervous system disorders.</p>
          </div>
          <div className="service-card">
            <img src={OrthoDept} alt="Orthopedics" />
            <h3>Orthopedics</h3>
            <p>Advanced solutions for bone, joint, and muscle health to keep you active.</p>
          </div>
          <div className="service-card">
            <img src={ENTDept} alt="ENT" />
            <h3>ENT</h3>
            <p>Dedicated care for ear, nose, and throat issues with a focus on lasting solutions.</p>
          </div>
          <div className="service-card">
            <img src={UrologyDept} alt="Urology" />
            <h3>Urology</h3>
            <p>Specialized care for urinary tract and male reproductive system health.</p>
          </div>
          <div className="service-card">
            <img src={GasteroDept} alt="Gastroenterology" />
            <h3>Gastroenterology</h3>
            <p>Comprehensive digestive care for stomach, intestines, and liver issues.</p>
          </div>
          <div className="service-card">
            <img src={PulmoDept} alt="Pulmonology" />
            <h3>Pulmonology</h3>
            <p>Specialized care for lung health and respiratory disorders.</p>
          </div>
          <div className="service-card">
            <img src={EyeDept} alt="Ophthalmology" />
            <h3>Ophthalmology</h3>
            <p>Precision eye care for clear vision and healthy eyes.</p>
          </div>
          <div className="service-card">
            <img src={DermatologyDept} alt="Dermatology" />
            <h3>Dermatology</h3>
            <p>Comprehensive skin care solutions for all your dermatological needs.</p>
          </div>
          <div className="service-card">
            <img src={DentDept} alt="Odontology" />
            <h3>Odontology</h3>
            <p>Advanced dental care for a healthy smile and strong teeth.</p>
          </div>
        </div>
      </section>


      {/* Image Carousel Section */}
      <section className="marquee-section">
        <h2>Our Facilities</h2>
        {/* <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src={CardioDept} alt="Facility 1" />
            </div>
            <div class="swiper-slide">
              <img src={NeuroDept} alt="Facility 2" />
            </div>
            <div class="swiper-slide">
              <img src={OrthoDept} alt="Facility 3" />
            </div>
            <div class="swiper-slide">
              <img src={ENTDept} alt="Facility 4" />
            </div>
            <div class="swiper-slide">
              <img src={UrologyDept} alt="Facility 5" />
            </div>
            <div class="swiper-slide">
              <img src={GasteroDept} alt="Facility 6" />
            </div>
            <div class="swiper-slide">
              <img src={PulmoDept} alt="Facility 7" />
            </div>
            <div class="swiper-slide">
              <img src={EyeDept} alt="Facility 8" />
            </div>
            <div class="swiper-slide">
              <img src={DermatologyDept} alt="Facility 9" />
            </div>
            <div class="swiper-slide">
              <img src={DentDept} alt="Facility 10" />
            </div>
          </div>
        </div> */}
        {/* <section className="marquee-section">
        <h2>Our Facilities</h2> */}
        <marquee behaviour="scroll" direction="left" scrollamount="10" className="marquee-track">
          <img src={CardioDept} alt="Facility 1" />
          <img src={NeuroDept} alt="Facility 2" />
          <img src={OrthoDept} alt="Facility 3" />
          <img src={ENTDept} alt="Facility 4" />
          <img src={UrologyDept} alt="Facility 5" />
          <img src={GasteroDept} alt="Facility 6" />
          <img src={PulmoDept} alt="Facility 7" />
          <img src={EyeDept} alt="Facility 8" />
          <img src={DermatologyDept} alt="Facility 9" />
          <img src={DentDept} alt="Facility 10" />
        </marquee>
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
    </div>
  );
};

export default Home;

