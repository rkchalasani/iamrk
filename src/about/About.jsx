import React from 'react'
import Follow from '../follow/Follow'
import './About.css'
import propic from '../img/profile-photo.avif'

const About = () => {
  return (
    <div>
        <div className='about-container'>
            <h1>Hi, I'am RamaKrishna!</h1>
            <img src={propic} alt="profile-pic" height="700px" />
        </div>
        
        <Follow />
    </div>
  )
}

export default About