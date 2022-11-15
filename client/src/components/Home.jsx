import React from 'react'
import './Home.css'
import GameCard from './GameCard'
import axios from 'axios'
import GenreFilter from './GenreFilter'



function Home() {
    
    
    const [games, setGames] = React.useState(null);

    const [currentPage, setCurrentPage] = React.useState(1);

    const [selectedGenre, setSelectedGenre] = React.useState(null);

    React.useEffect(() => {
      axios.get(`http://localhost:3001/videogames/${currentPage}${selectedGenre !== null ? `&genres=${selectedGenre}` : '' }`)
      .then(response => setGames(response.data))
    }, [currentPage, selectedGenre])

    if (!games) return null;

    const prevPage = () => {
      if( currentPage > 1) {
        setCurrentPage( currentPage - 1);
      }
    }
 
    const nextPage = () => {
      setCurrentPage( currentPage + 1);
    }

    const handleSelected = (genre) => {
      setSelectedGenre(genre)
    }
    
  return (
    <div className='home'>
      <div className='homeButtons'>
        <button onClick={prevPage} className='button'>
          Prev
        </button>
        <button onClick={nextPage} className='button'>
          Next
        </button>  
        <GenreFilter selected={handleSelected}/> 
      </div> 
      <div className='container'>
      {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div> 
    </div>
  )
}

export default Home