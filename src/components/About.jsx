import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h1 className="about-heading">Welcome to MedVita Health Care</h1>
      <p className="about-intro">
        At <strong>MedVita Health Care</strong>, we believe in transforming lives through world-class medical services,
        cutting-edge technology, and a compassionate approach to healthcare. With years of trusted excellence in
        patient care, MedVita Health Care stands as a beacon of hope and healing in our community.
      </p>

      <div className="about-section-content">
        <h2>Our Vision</h2>
        <p>To become a globally recognized leader in healthcare by providing innovative, ethical, and patient-centric services that focus on improving health and wellness for all.</p>

        <h2>Our Mission</h2>
        <ul>
          <li>To deliver affordable, high-quality healthcare services through the latest medical advancements and state-of-the-art facilities.</li>
          <li>To promote health awareness and preventive care across diverse communities.</li>
          <li>To create a positive and healing environment that empowers both patients and caregivers.</li>
        </ul>

        <h2>Why Choose MedVita Health Care?</h2>
        <ul>
          <li><strong>World-Class Specialists:</strong> Our team of experienced doctors, surgeons, and specialists work tirelessly to provide the best care.</li>
          <li><strong>Comprehensive Departments:</strong> From Cardiology to Neurology, Orthopedics, and ENT, we cater to all your healthcare needs under one roof.</li>
          <li><strong>Advanced Technology:</strong> Equipped with modern diagnostic and treatment tools, we ensure precision, safety, and optimal outcomes for every patient.</li>
          <li><strong>Patient-Centric Care:</strong> We prioritize your comfort, trust, and satisfaction, providing personalized care tailored to individual needs.</li>
        </ul>

        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Compassion:</strong> We treat every patient with kindness, dignity, and respect.</li>
          <li><strong>Integrity:</strong> We uphold the highest ethical standards in our practices.</li>
          <li><strong>Excellence:</strong> We strive for continuous improvement to achieve outstanding outcomes.</li>
          <li><strong>Collaboration:</strong> We work as a cohesive team to deliver holistic healthcare services.</li>
          <li><strong>Innovation:</strong> We embrace cutting-edge advancements to stay ahead in medical care.</li>
        </ul>

        <h2>Our Story</h2>
        <p>
          Founded with the vision to redefine healthcare excellence, <strong>MedVita Health Care</strong> started as a
          small clinic serving a handful of patients. Over the years, we have expanded into a leading healthcare
          institution, offering specialized treatments and advanced diagnostic facilities. Today, we serve thousands of
          patients annually, driven by a commitment to make healthcare accessible and reliable for all.
        </p>

        <h2>Our Facilities</h2>
        <ul>
          <li><strong>24/7 Emergency Services:</strong> Immediate medical assistance for critical care.</li>
          <li><strong>Modern Operation Theaters:</strong> Advanced surgical suites designed for safety and efficiency.</li>
          <li><strong>Diagnostic Laboratories:</strong> Cutting-edge labs for accurate tests and reports.</li>
          <li><strong>Pharmacy Services:</strong> Well-stocked pharmacy for all your medicinal needs.</li>
          <li><strong>Rehabilitation Programs:</strong> Comprehensive support for recovery and wellness.</li>
        </ul>

        <h2>Hear From Our Patients</h2>
        <blockquote>
          "The doctors at MedVita Health Care saved my life with their timely diagnosis and treatment. I am forever
          grateful!" – <strong>A. Singh</strong>
        </blockquote>
        <blockquote>
          "The staff here is so caring and professional. I highly recommend MedVita for anyone seeking quality
          healthcare." – <strong>R. Patel</strong>
        </blockquote>
      </div>
    </section>
  );
};

export default About;
