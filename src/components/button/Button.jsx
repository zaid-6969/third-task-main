import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Button = () => {


    const navigate = useNavigate();
    
    const handerClick = () => {
      navigate('/shop');
    };
  return (
    <div onClick={handerClick} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
       <button className='button' >View more  <FaGreaterThan /> </button>
    </div>
  )
}

export default Button
