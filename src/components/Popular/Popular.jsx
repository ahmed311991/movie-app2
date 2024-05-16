import React from 'react'
import { popularData } from '../../temp/popular'
import MovieCard from '../MovieCard/MovieCard'
import './Popular.css'
function Popular() {
    
  return (
    <div>
      <div className="popular-container">
        <h3>Popular Movies</h3>
      <div className="popular-movies-wrappers">
        {popularData.map((movie) => 
      <MovieCard
        height={"300px"} 
        width={"200px"}
        borderRadius={"16px"}
        imgSrc={movie.poster_path}
        cardStyle={"popular-card"}
      />
     

      )}
      </div>
      </div>
      <div className="page-numbers">
      <p>Select Page </p>
        {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
          <p className={number === 1 ? "current-page" : "null"}>{number}</p>
        ))
      }
      </div>
      
      
    </div>
  )
}

export default Popular
