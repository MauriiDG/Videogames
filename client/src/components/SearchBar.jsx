import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
import { searchGames } from '../redux/actions';
import './SearchBar.css'

function SearchBar({ search }) {



    const [game, setGame] = useState("");

    const handleChange = (event) => {
        setGame(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        search(game)
    }

    return (
        <div className='searchbar'>
            <form onSubmit={handleSubmit}>
                <div className=''>
                    <input
                        type='text'
                        value={game}
                        onChange={handleChange}
                        placeholder='Search Game' />  
                    <button type='submit' className='searchButton'>Search</button>
                </div>
                
            </form>
            
        </div>
  )
}

function mapStateToProps(state) {
    return {
        games: state.gameLoaded
    }
}

function mapDispatchToProps(dispatch) {
    return {
        search: game => dispatch(searchGames(game))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)