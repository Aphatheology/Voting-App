import React from 'react'

function VotingBox({ handleCatVote, handleDogVote, catVote, dogVote }) {
    
  return (
    <div className='voting-box'>
        <div className='each-box cat' onClick={handleCatVote}>
            <h2>CATS</h2>
            <h3>{catVote}</h3>
        </div>

        <div className='each-box dog' onClick={handleDogVote}>
            <h2>DOGS</h2>
            <h3>{dogVote}</h3>
        </div>
    </div>
  )
}

export default VotingBox