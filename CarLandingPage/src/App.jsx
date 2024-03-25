// App.jsx
import React, { useState } from 'react';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

let herodata = [
  { text1: "Feel the Power", text2: "of Lamborghini" },
  { text1: "Drive with Passion", text2: "Lamborghini Style" },
  { text1: "Experience Elegance", text2: "in Every Detail" }
];

const App = () => {
  const [heroCount, setHeroCount] = useState(2);
  const [playstatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playstatus={playstatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        herodata={herodata[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playstatus={playstatus}
      />
    </div>
  );
}

export default App;
