import React from 'react'
import { Link } from 'react-router-dom'
import './GameCard.css'

function GameCard({game}) {
  return (
    <div>
        <Link to={`game/${game.id}`}>{game.name}</Link>
        <h2>{game.background_image}</h2>
        <ul>
            {game.genres.map(genre => (
                <li key={genre.id}>
                    {genre.name}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default GameCard