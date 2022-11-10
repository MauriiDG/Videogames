import React from 'react'
import './Game.css'



function Game(props) {

    const baseurl = `https://api.rawg.io/api/games/${props.match.params.id}?key=736cfa1f76a743008958ce3e27b1408f`

    const [game, setGame] = React.useState(null)

    React.useEffect(() => {
        fetch(baseurl).then((response) => {
            response.json().then(data => {
                setGame(data)
            })
            
        } )
    }, [])

    if (!game) return null;

  return (
    <div>
        <h1>{game.name}</h1>
        <img src={game.background_image} alt={game.name}/>
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
            Available on: {game.platforms.map(p => (
                p.platform.name
            ))}
        </ul>
    </div>
  )
}

export default Game;