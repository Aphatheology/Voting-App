import React from 'react'

function VotingBox({ handleVote, catPercent, dogPercent }) {
    
  return (
    <div className='voting-box'>
        <div className='each-box cat' onClick={() => handleVote('cat')}>
            <h2>CATS</h2>
            <h2>{catPercent}</h2>
        </div>

        <div className='each-box dog' onClick={() => handleVote('dog')}>
            <h2>DOGS</h2>
            <h2>{dogPercent}</h2>
        </div>
    </div>
  )
}

export default VotingBox