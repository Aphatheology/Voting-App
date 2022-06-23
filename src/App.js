import { useEffect, useState } from 'react';
import './App.css';
import VotingBox from './components/VotingBox';

function App() {
    const [vote, setVote] = useState({
        catVote: 0,
        dogVote: 0
    })
    // const [catVote, setCatVote] = useState(0);
    // const [dogVote, setDogVote] = useState(0);
    function handleCatVote() {
        // setCatVote(catVote + 1);
        setVote(prevVote => ({...prevVote, catVote: prevVote.catVote + 1}))
    }
    function handleDogVote() {
        // setDogVote(dogVote + 1);
        setVote(prevVote => ({...prevVote, dogVote: prevVote.dogVote + 1}))
    }
    const [catVote, dogVote] = vote
    let disCat = ((catVote) / (catVote + dogVote) * 100).toFixed(1);

    disCat = !(isNaN(disCat)) ? `${disCat}%` : "0%";
    let disDog = ((dogVote) / (catVote + dogVote) * 100).toFixed(1);

    disDog = !(isNaN(disDog)) ? `${disDog}%` : "0%";
    // console.log(disCat)

    // console.log(`linear-gradient(to right, pink 0%, pink ${disCat}%, grey ${disCat}%, grey ${disDog}%)`)

    let styles = {
        // background: 'linear-gradient(to right, pink 0%, pink 50%, grey 50%, grey 100%)'
        // backgroundImage: `linear-gradient(to right, pink 0%, pink 50%, grey 50%, grey 0%)`

        backgroundImage: `linear-gradient(to right, #4ea1ed 0%, #4ea1ed ${disCat}, #66cecf ${disCat}, #66cecf ${disDog})`
    };


    // useEffect(() => {
    //      styles = {
    //         // background: 'linear-gradient(to right, pink 0%, pink 50%, grey 50%, grey 100%)'
    //         backgroundImage: `linear-gradient(to right, pink 0%, pink 50%, grey 50%, grey 100%)`
    
    //         // backgroundImage: `linear-gradient(to right, pink 0%, pink ${disCat}%, grey ${disCat}%, grey ${disDog}%)`
    //     }
    // }, [disCat, disDog])

    // console.log(styles)
  return (

    <div className="App" style={styles}>
        <VotingBox 
            handleCatVote={handleCatVote}
            handleDogVote={handleDogVote}
            catVote={catVote}
            dogVote={dogVote}
        />

        <p>{vote.catVote + vote.dogVote} votes</p>
    </div>
  );
}

export default App;
