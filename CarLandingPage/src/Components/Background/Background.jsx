// Background.jsx
import './Background.css'
import React from 'react'
import car1 from '../../assets/car1.jpg'
import car2 from '../../assets/car2.jpg'
import car3 from '../../assets/car3.jpg'
import car4 from '../../assets/car4.jpg'
import car5 from '../../assets/car5.jpg'
import car6 from '../../assets/car6.jpg'
import carV from '../../assets/video1.mp4'

const Background = ({ playstatus, heroCount ,displayImage }) => {
  
  if (playstatus && !displayImage) {
    return (
      <video className='background  fadein' autoPlay loop muted>
        <source src={carV} type='video/mp4' />
      </video>
    );
  } else {
    // Display images based on heroCount
    const images = [car1, car2, car3, car4, car5, car6];
    return <img src={images[heroCount]} className='background' alt={`Car ${heroCount + 1}`} />;
  }
  
  
  if (playstatus) {
    return (
      <video className='background' autoPlay loop muted>
        <source src={carV} type='video/mp4' />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={car1} className='background fadein' alt="Car 1" />;
  } else if (heroCount === 1) {
    return <img src={car2} className='background fadein' alt="Car 2" />;
  } else if (heroCount === 2) {
    return <img src={car3} className='background fadein' alt="Car 3" />;
  } else if (heroCount === 3) {
    return <img src={car4} className='background fadein' alt="Car 4" />;
  } else if (heroCount === 4) {
    return <img src={car5} className='background fadein' alt="Car 5" />;
  } else if (heroCount === 5) {
    return <img src={car6} className='background fadein' alt="Car 6" />;
  }
}

  


export default Background;
