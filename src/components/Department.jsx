import React from "react";
import "./Department.css";
import Card from "./Card";
import { useDeparts } from "../context/DepartmentProvider";

const Department = () => {
  const departs = useDeparts();

  return (
    <>

      <section className="services-section" id="departments">
        <h2>Our Departments</h2>
        <div className="services-container">
          {departs.map((dept, index) => (
            <div key={index} className="card">
              <Card
                image={dept.image}
                title={dept.title}
                description={dept.description}
              />
            </div>
          ))}
        </div>
      </section>

    </>
  );
};


export default Department;
