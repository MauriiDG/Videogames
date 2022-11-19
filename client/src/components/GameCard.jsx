import React from 'react'
import { Link } from 'react-router-dom'
import './GameCard.css'

function GameCard({game}) {


  

  return (
    <Link to={`game/${game.id}`} className='gameCard'>
        <div  className='gameName'>{game.name}</div>
        <div className='imgContainer'>
        <img src={game.image} alt={game.name} className='gameImage'></img>
        </div>
        <ul className='gameGenreContainer'>
            {game.genres.map(genre => (
                <li key={genre.id} className='gameGenre'>
                    {genre.name}
                </li>
            ))}
        </ul>
    </Link>
  )
}

export default GameCard