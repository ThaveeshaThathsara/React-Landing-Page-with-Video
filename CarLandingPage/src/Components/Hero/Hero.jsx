// Hero.jsx
import React, { useState } from 'react';
import arrowbutton from '../../assets/forword.png';
import pausebutton from '../../assets/pause.png';
import startbutton from '../../assets/start.png';
import '../Hero/Hero.css'

const Hero = ({ herodata, setHeroCount, heroCount, setPlayStatus, playstatus }) =>{
  return (
    <div className='hero'>
      <div className='herotext'>
        <p>{herodata.text1}</p>
        <p>{herodata.text2}</p>
      </div>

      <div className='heroexplore'>
        <p>Illuminate Your Path with Speed</p>
        <img src={arrowbutton} alt="Arrow Button" className='arrowbtn' />
      </div>

      <div className='herodotplay'>
        <ul className='herodots'>
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "herodot Orange" : "herodot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "herodot Orange" : "herodot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "herodot Orange" : "herodot"}></li>
        </ul>

        <div className='heroplay'>
            <img onClick={() =>setPlayStatus(!playstatus)}   src={playstatus ? pausebutton : startbutton} alt="Play/Pause Button" />
            <p>See the Video</p>
      </div>

      </div>

     
    </div>
  );
  };

export default Hero;
