import React from 'react'
import Slider from '../components/Slider/Slider';
import Popular from '../components/Popular/Popular';
import { upcoming } from '../temp/upcoming';
import Top from '../components/Top/Top';
import '../../src/css/movies.css'
 function Home() {
  return (
    <div>
       
     <Slider />

     <div className="movies-container" >
      <Popular />
     <Top />
     </div>
     
    </div>
  
  );
}

export default Home;