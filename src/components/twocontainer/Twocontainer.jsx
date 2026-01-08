import React from "react";

const Twocontainer = ({ info }) => {
  return (
    <div className="twocontainer">
      {info.map((item, index) => (
        <div key={index} className="twocard">
          <img src={item.img} alt={item.title} />
          <div className="twocard-text">
          <p>{item.date}</p>
          <h1>{item.title}</h1>
          <p style={{marginTop:'10px',textDecoration:'underline'}}>read more</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Twocontainer;
