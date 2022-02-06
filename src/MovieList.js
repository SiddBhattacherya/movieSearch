import React, {useState, useEffect} from "react";
import './MovieList.css'
import Movie from "./Movie";
import Modal from "./Modal";

function MovieList({movies, setModalState, setSelectedMovie, setIndex}){
    
    


    return(
        <div className="movielist">
            
        {movies.map((i,index) => <Movie setIndex={setIndex} full_movie = {movies[index]} index = {index}  imdb ={i.imdbID} title={i.Title} poster={i.Poster} date={i.Year} type={i.Type} setModalState={setModalState} setSelectedMovie={setSelectedMovie}/>)} 
        

</div>
    )
    


}

export default MovieList