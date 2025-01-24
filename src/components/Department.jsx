import React from "react";
import "./Department.css";
// Import images explicitly
import Cardio from "../assets/Cardio.png";
import Neuro from "../assets/Neuro.png";
import Ortho from "../assets/Ortho.webp";
import ENT from "../assets/ENT.webp";

const departments = [
  { id: 1, name: "Cardiology", description: "Heart and vascular care.", image: Cardio },
  { id: 2, name: "Neurology", description: "Brain and nervous system care.", image: Neuro },
  { id: 3, name: "Orthopedics", description: "Bone and joint care.", image: Ortho },
  { id: 4, name: "ENT", description: "Ear, nose, and throat care.", image: ENT },
];

const Department = () => {
  return (
    <section className="departments-section" id="departments">
      <h2>Our Departments</h2>
      <div className="departments-container">
        {departments.map((department) => (
          <div key={department.id} className="department-card">
            <img
              src={department.image} // Correct way to use the image reference
              alt={department.name}
              className="department-image"
            />
            <div className="department-content">
              <h3>{department.name}</h3>
              <p>{department.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Department;
