import React from 'react'
import { popularData } from '../../temp/popular';

function MovieCard({
    height,
    width, 
    borderRadius,
    imgSrc,
    movie,
    cardStyle
}) {

    const styles = {
        backgroundImage : `url(https://image.tmdb.org/t/p/original/${imgSrc})`,
        backgroundSize :"cover",
        backgroundPosition : "center",
        height : height,
        width : width, 
        borderRadius,


    };
  return ( 
   
    <div style={styles}>
      
    </div>
  )
}

export default MovieCard
