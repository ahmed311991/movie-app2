import React, {useEffect, useState } from 'react'
import './Slider.css'
//import { upcoming } from '../../temp/upcoming.js';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Ratings from '../Ratings/Ratings.jsx';
import axios from "axios";

function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);
    const [upcoming, setUpcoming] = useState([]);

    //get API data
    useEffect(() => {
        axios(`${import.meta.env.VITE_APP_BASE_URL}/upcoming?api_key=${import.meta.env.VITE_API_KEY}`).then((response) => {

           console.log(response.data.results);
            setUpcoming(response.data.results) ;
        }
            
        ).catch (
            err => console.log(err))
    }, []

    );

    const sliderStyles = {
        backgroundImage : `url(https://image.tmdb.org/t/p/original/${upcoming[slideIndex]?.backdrop_path})`,
        backgroundPosition : "center center",
        backgroundSize : "cover",
        height : '60vh',
        width : '100%',
        position : 'relative',
    }
     
    const slideForeward = () => {
        if(slideIndex < upcoming.length - 1){
            setSlideIndex(slideIndex + 1);
        }
        

    };
    const slideBackward = () => {
        if(slideIndex > 0){
            setSlideIndex(slideIndex - 1);
        }
        
        
    };

  return (
    <div style = {sliderStyles} className="slider-container">
        <div className='slide-overlay'></div>
       <MdKeyboardArrowLeft className='arrow-left' onClick={slideBackward}/>
       <MdKeyboardArrowRight className='arrow-right' onClick={slideForeward}/>

       <div className="slider-info">
          <h2>{upcoming[slideIndex]?.title}</h2>
          <p>{upcoming[slideIndex]?.description}</p>
          <p>{upcoming[slideIndex]?.overview.slice(0, 130)}
             {upcoming[slideIndex]?.overview.length > 130 ? "..." : null }
          </p>
          <p>Release date : {upcoming[slideIndex]?.release_date}</p>
          {/* <Ratings numberRating = {upcoming[slideIndex]?.vote_average}/> */}

       </div>
    </div>
  )
}

export default Slider
