import React from 'react'
import './Home.css'
import GameCard from './GameCard'


const baseurl = 'https://api.rawg.io/api/games?key=736cfa1f76a743008958ce3e27b1408f'
//const baseurl = process.env.REACT_APP_BASE_URL + 'games?key=' + process.env.REACT_APP_API_KEY;

function Home(props) {
    
    
    const [games, setGames] = React.useState(null)

    React.useEffect(() => {
        fetch(baseurl).then((response) => {
            response.json().then(data => {
                setGames(data.results)
            })
            
        } )
    }, [])

    if (!games) return null;
    
    
  return (
    <div>
        {games.map(game => (
            <GameCard key={game.id} game={game} />
        ))}
        
    </div>
  )
}

export default Home