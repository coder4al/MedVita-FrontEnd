// Departments.js
import React from "react";
import "./Department.css";

const Department = () => {
  const department = ["Cardiology", "Neurology", "Orthopediology", "ENT"];

  return (
    <div className="department">
      <h2>Our Department</h2>
      <ul>
        {department.map((dept, index) => (
          <li key={index}>{dept}</li>
        ))}
      </ul>
    </div>
  );
};

export default Department;
