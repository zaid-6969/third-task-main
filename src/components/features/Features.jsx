import React from 'react'
import './Features.css'
import { IoTimeOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { AiFillFileText } from "react-icons/ai";
import { AiOutlineDollarCircle } from "react-icons/ai";


const Features = () => {
  const info = [
    {
      font: <IoTimeOutline />,
      title: "Shop online",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper."
    },
    {
      font: <IoBagOutline />,
      title: "Free shipping",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper."
    },
    {
      font: <AiFillFileText />,
      title: "Return policy",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper."
    },
    {
      font: <AiOutlineDollarCircle />,
      title: "PAYMENT",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper."
    }
  ];

  return (
    <div className="features">
      {info.map((item, index) => (
        <div key={index} className="scard">

          <div style={{ color: "#686868ff"  ,display:"flex",flexDirection:'row' , justifyContent:'center',alignItems:"center",gap:"10px"}}>
            <span style={{fontSize:"40px"}}>{item.font}</span>
            <h1>{item.title}</h1>
          </div>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
