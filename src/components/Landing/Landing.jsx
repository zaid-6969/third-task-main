import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../button/Button";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

const Landing = () => {
  const location = useLocation();

  return (
    <div className="main">

      {/* ✅ SHOW ARROWS ONLY IF NOT ABOUT PAGE */}
      {location.pathname !== "/About" && (
        <div className="arrow">
          <span className="com">
            <FaLessThan />
          </span>
          <span className="com">
            <FaGreaterThan />
          </span>
        </div>
      )}

      <h1>All for your home</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor
        odio odio malesuada at condimentum adipiscing iaculis semper.
      </p>

      <Button />
    </div>
  );
};

export default Landing;
