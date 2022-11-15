import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
import { GET_GAMES } from '../redux/actions';
import './SearchBar.css'

function SearchBar({ games, searchGame }) {
    const [game, setGame] = useState("");

    const handleChange = (event) => {
        setGame(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        searchGame(game);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='searchbar'>
                    <input
                        type='text'
                        value={game}
                        onChange={handleChange}
                        placeholder='Search Game' />  
                </div>
                <button type='submit'>Search</button>
                
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
        searchGame: game => dispatch({ type: GET_GAMES, payload: game })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)