import React from "react";
import Button from "../button/Button";
import { FaPlay } from "react-icons/fa";

export const SecondImage = () => {
  return (
    <div className="second">
      <div className="play">
        <FaPlay />
      </div>
    </div>
  );
};

const Twoimage = () => {
  return (
    <div className="secondimage">
      <div className="first">
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            dolor odio odio malesuada at condimentum adipiscing iaculis semper.
          </p>
          <Button />
        </div>
      </div>

      <SecondImage />
    </div>
  );
};

export default Twoimage;

