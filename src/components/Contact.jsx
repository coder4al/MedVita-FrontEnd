import React from "react";
import "./Contact.css";

const ContactUs = () => {
  return (
    <section className="contact-section" id="contact-us">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-subheading">
        We’d love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out to us.
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>
            </div>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-info">
          <h2>Our Contact Details</h2>
          <ul>
            <li>
              <strong>Address:</strong> MedVita Health Care, 123 Wellness Street, Cityville
            </li>
            <li>
              <strong>Phone:</strong> +1-234-567-890
            </li>
            <li>
              <strong>Email:</strong> support@medvita.com
            </li>
            <li>
              <strong>Working Hours:</strong> Mon - Sat: 9:00 AM - 8:00 PM
            </li>
          </ul>
          <h2>Find Us Here</h2>
          <div className="map-placeholder">
            <p>Map Placeholder (Integrate Google Maps API or iframe here)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
