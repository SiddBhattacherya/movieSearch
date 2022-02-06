import React, {useState, useEffect} from "react";
import MovieList from "./MovieList";
import axios from "axios";
import './MovieSearch.css'
import Modal from "./Modal";

function MovieSearch(){
    const[query, setQuery] = useState('')
    const [movies, setMovies] = useState(null)
    const [modalState, setModalState] = useState('hide-modal');
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [index, setIndex] = useState(0);

    const searchMovie = e => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        async function getData(){
            const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=79dfb4ab`);
           
            setMovies(response.data.Search)
        }
        getData();
    }, [query])

    console.log(movies)

    return(
    
        <div className="searcharea">
                    <h1>MOVIE SEARCH</h1>
                    <input className="searchbar" type="text" onChange={searchMovie}></input>
                   
                    {movies &&
                   
                    <MovieList movies={movies} setModalState={setModalState} setSelectedMovie={setSelectedMovie} setIndex={setIndex}/>
                   
                    }

                    {selectedMovie &&  <Modal index={index} setIndex={setIndex} movieDetails ={selectedMovie} setModalState={setModalState}  showModal={modalState} setSelectedMovie={setSelectedMovie} moviearray={movies}/>} 

                    

        
        </div>
  
    )

}

export default MovieSearch;