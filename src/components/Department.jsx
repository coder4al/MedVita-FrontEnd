import React from "react";
import "./Department.css";
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

const Department = () => {
  return (
    <section className="services-section" id="departments">
      <h2>Our Departments</h2>
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
  );
};

export default Department;
