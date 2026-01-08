import React from 'react'
import './About.css'
import Landing from '../../components/Landing/Landing'
import Features from '../../components/features/Features'
import Twocontainer from '../../components/twocontainer/Twocontainer'
import image7 from "../../assets/images/Rectangle 43.png"
import image8 from "../../assets/images/Rectangle 49.png"
import image9 from "../../assets/images/Rectangle 50.png"
import Progressbar from '../../components/progressbra/Progressbar'
import { FaPlay } from 'react-icons/fa'
const About = () => {

  const info = [
    {
      img: image7,
      date: "29 sep, 2022 / by soroush norozy",
      title: "Your office should have only natural materials",
    },
    {
      img: image9,
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
    <div className='about'>
      <div className='landingcontainer'>
        <div className='landings'>
          <Landing />
        </div>
      </div>
      <Features />
      <div className="second-last">
        <div className="play">
          <FaPlay />
        </div>
      </div>
      <div className='progress-container'>
        <div className='progress-para'>
          <h1>Functionality meets perfection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa libero, mattis volutpat id. Egestas adipiscing placerat eleifend a nascetur. Mattis proin enim, nam porttitor vitae. </p>
        </div>
        <div className='skill-container'>
          <Progressbar />
        </div>
      </div>
      <Twocontainer info={info} />
    </div>
  )
}

export default About