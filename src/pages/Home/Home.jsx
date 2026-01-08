import React, { useState, useEffect } from 'react';
import './Home.css';
import Landing from '../../components/Landing/Landing';
import Hcard from '../../components/Hcard/Hcard';
import Twoimage from '../../components/Twoimg/Twoimage';
import Imagepara from '../../components/imagepara/Imagepara';
import Features from '../../components/features/Features';
import Twocontainer from '../../components/twocontainer/Twocontainer';
import Client from '../../components/client/Client';
import image7 from "../../assets/images/Rectangle 20.png";
import image8 from "../../assets/images/Rectangle 19.png";
import Button from '../../components/button/Button';

const Home = () => {


  const info = [
    {
      img: image7,
      date: "29 sep, 2022 / by soroush norozy",
      title: "Your office should have only natural materials",
    },
    {
      img: image8,
      date: "29 sep, 2022 / by soroush norozy",
      title: "Your office should have only natural materials",
    }
  ];

  return (
    <div>
      <div className='landing'>
        <Landing />
      </div>
      <Hcard  />
      <Twoimage />
      <Imagepara />
      <div className='delivery'>
        <h1> order now for an <span style={{ color: 'black' }}>express delivery in 24h !</span>
        </h1>
        <Button />
      </div>
      <Features />
      <Twocontainer info={info} />
      <Client />
    </div>
  );
}

export default Home;
