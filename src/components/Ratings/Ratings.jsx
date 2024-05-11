import React from 'react'
import StarRatings from 'react-star-ratings';
function Ratings({numberRating}) {
  return (
    <StarRatings
    starRatedColor="red"
    starEmtyColor = 'gray'
    rating = {numberRating / 2}
    numberOfStars={5}
    name='rating'   
    starDimension = {"15px"}
    starSpacing = {"1px"}  

    />
  )
}

export default Ratings
