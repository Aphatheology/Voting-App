import { useState } from 'react';
import './App.css';
import VotingBox from './components/VotingBox';

function App() {
    const [vote, setVote] = useState({
        catVote: 0,
        dogVote: 0
    })

    function handleVote(animal) {
        if(animal === 'cat') {
            setVote(prevVote => ({...prevVote, catVote: prevVote.catVote + 1}))
        } else {
            setVote(prevVote => ({...prevVote, dogVote: prevVote.dogVote + 1}))
        }
    }
    
    let catPercent = ((vote.catVote) / (vote.catVote + vote.dogVote) * 100).toFixed(1);

    catPercent = !(isNaN(catPercent)) ? `${catPercent}%` : "0%";

    let dogPercent = ((vote.dogVote) / (vote.catVote + vote.dogVote) * 100).toFixed(1);

    dogPercent = !(isNaN(dogPercent)) ? `${dogPercent}%` : "0%";

    const styles = (catPercent !== "0%" && dogPercent
    !== "0%") ? 
        {
            backgroundImage: `linear-gradient(to right, #4ea1ed 0%, #4ea1ed ${catPercent}, #66cecf ${catPercent}, #66cecf ${dogPercent})`
        } 
        : 
        {
            backgroundColor: `rgb(2,0,36)`,
            backgroundImage: `linear-gradient(141deg, rgba(2,0,36,1) 0%, rgba(93,9,121,1) 35%, rgba(0,212,255,1) 100%)`
        };
    
  return (

    <div className="App" style={styles}>
        <VotingBox 
            handleVote={handleVote}
            catPercent={catPercent}
            dogPercent={dogPercent}
        />

        <p>{vote.catVote + vote.dogVote} votes</p>
    </div>
  );
}

export default App;
