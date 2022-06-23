
import { useState } from 'react';
import './App.css';

function New() {
    const [vote, setVote] = useState({
        catVote: 0,
        dogVote: 0
    })

    function handleCatVote() {
        setVote(prevVote => ({...prevVote, catVote: prevVote.catVote + 1}))
    }
    function handleDogVote() {
        setVote(prevVote => ({...prevVote, dogVote: prevVote.dogVote + 1}))
    }

    let displayCatVote = ((vote.catVote) / (vote.catVote + vote.dogVote) * 100).toFixed(1);

    displayCatVote = !(isNaN(displayCatVote)) ? `${displayCatVote}%` : "0%";

    let displayDogVote = ((vote.dogVote) / (vote.catVote + vote.dogVote) * 100).toFixed(1);

    displayDogVote = !(isNaN(displayDogVote)) ? `${displayDogVote}%` : "0%";

    const styles = (displayCatVote !== "0%" && displayDogVote
    !== "0%") ? 
        {
            backgroundImage: `linear-gradient(to right, #4ea1ed 0%, #4ea1ed ${displayCatVote}, #66cecf ${displayCatVote}, #66cecf ${displayDogVote})`
        } 
        : 
        {
            backgroundColor: `rgb(2,0,36)`,
            backgroundImage: `linear-gradient(141deg, rgba(2,0,36,1) 0%, rgba(93,9,121,1) 35%, rgba(0,212,255,1) 100%)`
        };

  return (

    <div className="App" style={styles}>
        <div className='voting-box'>
            <div className='each-box cat' onClick={handleCatVote}>
                <h2>CATS</h2>
                <h3>{displayCatVote}</h3>
            </div>

            <div className='each-box dog' onClick={handleDogVote}>
                <h2>DOGS</h2>
                <h3>{displayDogVote}</h3>
            </div>
        </div>

        <p>{vote.catVote + vote.dogVote} votes</p>
    </div>
  )
}

export default New