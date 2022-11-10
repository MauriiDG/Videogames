import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
import { getGames } from '../redux/actions';
import './SearchBar.css'

function SearchBar() {

    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
     //   getGames(this.state.name)
    }

    return (
        
            <form onSubmit={handleSubmit}>
                <div className='searchbar'>
                    <input
                        type='text'
                        value={name}
                        onChange={handleChange}
                        placeholder='Search Game' />  
                </div>
                <button type='submit'>Search</button>

            </form>
         
  )
}

function mapDispatchToProps(dispatch) {
    return {
        getGames: name => dispatch(getGames(name))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)