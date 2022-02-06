import './Modal.css'
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Modal({ movieDetails, setModalState, showModal, moviearray, setSelectedMovie, setIndex, index}){
    const [state, setState] = useState(showModal);
    const [leftButtonState, setLeftButtonState] = useState(false);
    const [rightButtonState, setRightButtonState] = useState(false);
    
    //const { title, poster,  date, index} = movieDetails;
    useEffect(() => {
        if(index == 0){
        setLeftButtonState(true);
        }
        else{
            setLeftButtonState(false);
        }
    }, [index]);

    useEffect(() => {
        if(index == moviearray.length - 1){
        setRightButtonState(true);
        }
        else{
            setRightButtonState(false);
        }
    }, [index]);
    
    
    console.log(movieDetails)
    
    useEffect(() => {
        setState(showModal);
    }, [showModal]);

    function onLeftClick(){
        
        setSelectedMovie(moviearray[index - 1]);
        setIndex(index - 1);
       
    }

    function onRightClick(){
     
        setSelectedMovie(moviearray[index + 1]);
        setIndex(index + 1);
        
    }

    if(movieDetails){
    return(
        
        <div className={state}>
            <h2>{movieDetails.Title}</h2>
            <h3>Year: {movieDetails.Year}</h3>
            <img src={movieDetails.Poster}/>
            <div className='modal-button-area'>
            <button disabled={leftButtonState} className='modal-button' onClick={onLeftClick}>Left</button>
            <button className='modal-button' onClick={() => setModalState('hide-modal')}>Close</button>
            
            <button disabled={rightButtonState} className='modal-button' onClick={onRightClick}>Right</button>
            </div>
        </div>
    )
    }
    else{
        return <h2>Empty</h2>
    }

}

export default Modal;