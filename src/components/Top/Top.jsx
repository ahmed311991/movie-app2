import React, {useEffect, useState } from 'react'
import axios from "axios";
//import { topData } from '../../temp/top'
import MovieCard from '../MovieCard/MovieCard'
import './Top.css'

function Top() {

      const [topData, setTopData] = useState([]);
  useEffect(() => {
    axios(`${import.meta.env.VITE_APP_BASE_URL}/top_rated?api_key=${import.meta.env.VITE_API_KEY}`)
    .then((response) => {

       console.log(response.data.results);
      setTopData(response.data.results);
    }
        
    ).catch (
        err => console.log(err))
}, []
);

  return (
    
        <div className="top-rated-container">
             <h3>Top Rated</h3>
             <div className="top-rated-cards-wrapper">
{topData.slice(0, 10).map(movie => 
      <>
      <MovieCard 
        height={"100px"} 
        width={"200px"}
        borderRadius={"8px"}
        imgSrc={movie.backdrop_path}
        movie = {movie} />
       <p>{movie.title}</p>  
      </>
          
      )

      }
             </div>
      
        </div>
       
   
  )
}

export default Top
