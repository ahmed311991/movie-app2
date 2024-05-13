import React from 'react'
import { popularData } from '../../temp/popular'
import MovieCard from '../MovieCard/MovieCard'
import './Popular.css'
function Popular() {
    
  return (
    <div>

      <h3>Popular movies</h3>
      <div className="popular-movies-wrappers">
        {popularData.map((movie) => 
      <MovieCard
        height={"300px"}  width={"200px"} borderRadius={"16px"}  imgSrc={movie.poster_path}
      />
     

      )}
      </div>
      
      
    </div>
  )
}

export default Popular
