import React from 'react'
import './Game.css'
import { useDispatch, useSelector } from 'react-redux'
import { getGame } from '../redux/actions';
import Loading from './Loading';

function Game(props) {

    const dispatch = useDispatch();

    const game = useSelector((store) => store.gameDetail)



    React.useEffect(() => {
        if (game === null) {
            dispatch(getGame(props.match.params.id))
        }
    })

    if (game === null) {
        return <Loading/>
      }
    
  return (
    <div className='gameContainer'>
        <h1 className='gameTitle'>{game.name}</h1>
        <div className='gameimgAndinfo'>
            <img src={game.image} alt={game.name} className='gameImg' />
            <p dangerouslySetInnerHTML={{__html: game.description}} className='gameDescription' />
            <ul className='game'>
                Genres: {game.genres.map(genre => (
                    <li key={genre.id}>
                        {genre.name}
                    </li>
                ))}
            </ul>
            <ul className='noBull'>
                <li>Released: {game.released}</li>
                <li>Rating: {game.rating}</li>
                <li>Available on: {game.platforms.map((platform, index) => (
                        (index? ', ' :'') + platform.name
                    ))}
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Game;