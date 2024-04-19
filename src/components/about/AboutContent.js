import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";

export const AboutContent = () => {
  return (
    <div className="about">
      <div className="center">
        <h1>Who Am I ?</h1>
        <p>
          Results-oriented Power Platform / FrontEnd  developer with over 3 years of dynamic
          experience, specializing in frontend development and successfully
          catering to multi-million-dollar international clients. Proficient in
          frontend technologies such as HTML, CSS, JavaScript, and React.js.
          Recognized for an exceptional ability to tackle intricate problems,
          consistently elevating customer satisfaction.
        </p> <br />     
        <p>
          Achieved a noteworthy track record of delivering top-tier solutions,
          evidenced by a 15% increase in operational efficiency and a 20% boost
          in customer satisfaction ratings through strategic cross-functional
          collaboration. Accomplished 30% increase in productivity for
          end-users. Demonstrates a keen eye for detail, ensuring the delivery
          of high-quality solutions that align with industry best practices.
        </p>
      </div>
    </div>
  );
};
