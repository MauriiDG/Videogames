import React from 'react'
import './Home.css'
import GameCard from './GameCard'
import GenreFilter from './GenreFilter'
import { useDispatch, useSelector } from 'react-redux'
import { getGames, getNextPage, getPrevPage } from '../redux/actions'
import OrderBy from './OrderBy'
import Loading from './Loading'

function Home() {

    const dispatch = useDispatch();
    
    const store = useSelector((store) => store);


    React.useEffect(() => {
      if(store.games === null) {
        dispatch(getGames());
      }
    })
  
    const prevPage = () => {
      if( store.hasPrev ) {
        dispatch(getPrevPage({page: store.page, genre: store.genre, search: store.search}));
      }
    }
 
    const nextPage = () => {
      if( store.hasNext ){
        dispatch(getNextPage({page: store.page, genre: store.genre, search: store.search}));
      }
    }


  if (store.loading) {
    return <Loading/>
  }
    

    return (
      <div className='home'>
        <div className='homeButtons'>
          <button onClick={prevPage} disabled={!store.hasPrev} className='button'>
            Prev Page
          </button>
          <button onClick={nextPage} disabled={!store.hasNext} className='button'>
            Next Page
          </button>  
          <GenreFilter/> 
          <OrderBy/>
        </div> 
        <div className='container'>
        {store.games.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div> 
      </div>
    )
  
}

export default Home