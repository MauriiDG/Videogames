import React from 'react'
import './Game.css'
import axios from 'axios'

function Game(props) {

    const baseurl = `http://localhost:3001/videogame/${props.match.params.id}`

    const [game, setGame] = React.useState(null)

    React.useEffect(() => {
        axios.get(baseurl)
            .then(response => setGame(response.data))
    })

    if (!game) return null;

  return (
    <div className='container'>
        <h1>{game.name}</h1>
        <img src={game.image} alt={game.name}/>
        <p dangerouslySetInnerHTML={{__html: game.description}} />
        <span>
            Genres: {game.genres.map(genre => (
                <span key={genre.id}>
                    {genre.name}
                </span>
            ))}
        </span>
        <ul>
            Released: {game.released}
            Rating: {game.rating}
            Available on: {game.platforms.map(platform => (
                platform.name
            ))}
        </ul>
    </div>
  )
}

export default Game;