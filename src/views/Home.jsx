import React from 'react'
import Slider from '../components/Slider/Slider';
import Popular from '../components/Popular/Popular';
import { upcoming } from '../temp/upcoming';


 function Home() {
  return (
    <div>
       
     <Slider />
     <Popular />
    </div>
  
  );
}

export default Home;