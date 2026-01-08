import React from "react";
import img1 from '../../assets/images/Rectangle 11.png';
import img2 from '../../assets/images/Rectangle 13.png';
import img3 from '../../assets/images/Rectangle 15.png';
import Button from "../button/Button";

const Imagepara = () => {
  const items = [
    {
      title: "STYLISH CHAIRS",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.",
      button: "View more",
      img: img1
    },
    {
      title: "TABLE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.",
      button: "View more",
      img: img2
    },
    {
      title: "CONTEMPORARY LAMPS",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.",
      button: "View more",
      img: img3
    }
  ];

  return (
    <div className="container-wrapper">

      {items.map((item, index) => (
        <div
          key={index}
          className={`row ${index % 2 === 1 ? "reverse" : ""}`}
        >
          <div className="text-section">
            <h1>{item.title}</h1>
            <p>{item.text}</p>
            <Button />
          </div>
          <div className="image-section">
            <img src={item.img} alt={item.title} />
          </div>
        </div>
      ))}

    </div>
  );
};

export default Imagepara;

