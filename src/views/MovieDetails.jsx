import React, {useState, useEffect} from 'react'
import  axios from 'axios'
import {useParams} from 'react-router-dom'
import RactPlayer from "react-player/youtube"
import '../css/movies.css'

function MovieDetails() {
    
    const {id} = useParams();
    const [movieDetail, setMovieDetail] = useState(null);
    const [trailerKey, setTrailerKey] = useState("");
    //console.log(id);
    useEffect(() => {
        axios(`${import.meta.env.VITE_APP_BASE_URL}/${id}?api_key=${import.meta.env.VITE_API_KEY}`)
        .then((response) => {
    
         //console.log(response.data);
         setMovieDetail(response.data);
        }
            
        ).catch (
            err => console.log(err))

         
            axios(`${import.meta.env.VITE_APP_BASE_URL}/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`)
        .then((response) => {
    
        // console.log(response.data);
         
         const filtredTrailers = response.data.results.filter(
            (video) => video.site === "YouTube" && video.type === "Trailer");

            //console.log(filtredTrailers);
        //  console.log(response.data.results.filter(video=>video.site === "Youtube" && video.type === "Trailer"));
        setTrailerKey(filtredTrailers[0].key);
        //console.log("hi wassup");
        console.log(filtredTrailers[0]);
        }
            
        ).catch (
            err => console.log(err))
    }, []);
    
    

  return (
    <div className="movie-details-container">
        <div className="trailer-container">
            <RactPlayer className="player-container"
            url = {`https://www.youtube.com/watch?v=${trailerKey}`}
            width = "100%"
            height = "500px"
            />
        </div>
        
    </div>
  )
}

export default MovieDetails
