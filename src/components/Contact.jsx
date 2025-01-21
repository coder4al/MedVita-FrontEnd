// Contact.js
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>Have any questions? Reach out to us!</p>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" required />
        <label>Email:</label>
        <input type="email" placeholder="Your Email" required />
        <label>Message:</label>
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
