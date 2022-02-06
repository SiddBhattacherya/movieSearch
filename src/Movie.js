import React, {useState, useEffect} from "react"
import Modal from "./Modal"
import axios from "axios";

function Movie({imdb, title, poster, type, date, setModalState, setSelectedMovie, index, full_movie, setIndex}){
    //const [showModal, setshowModal] = useState('hide-modal');
    var movieDetails = {imdb, title, poster, type, date, index}
    
    function handleMovieClick(){
        setModalState('show-modal');
        setSelectedMovie(full_movie)
        setIndex(index);
        console.log(movieDetails)
    }
    

    return(
        <div>
           

            <div onClick={handleMovieClick} className="movie" key={imdb}> 
            
            <h2>{title}&nbsp;&nbsp;&nbsp;</h2>
            
            <h2>({date})</h2>
        
            </div>

        </div>

    )
}

export default Movie