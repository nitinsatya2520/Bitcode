import React from 'react';
import backImage from '../assets/images/blue.jpg';  // Import the image
import Services from '../pages/Services';
import backImag from '../assets/images/team.jpg';
import './Home.css';
import backIma from '../assets/images/cc.png';
import { blue } from '@mui/material/colors';



function Home() {
  return (
    <div 
      className="home"     >
      <div className='card'
       style={{ backgroundImage: `url(${backIma})` }}>
      {/* Logo Section */}
      <div className="logoa">
        <img src="/assets/images/logo.png" alt="BitCode Solutions Logo" />
      </div>
      </div>
      <div className='card'
       >
      {/* Welcome Text */}
      <h2>Welcome to</h2>
      <h1>BitCode Solutions Private Ltd</h1>

      <p>Your one-stop solution for all your software needs.</p>
      </div>
      

      {/* Services Component */}
      <div className='card'
      style={{ backgroundImage: `url(${backImag})` }} >
      <Services />
      </div>
      
      
    </div>
  );
}

export default Home;
