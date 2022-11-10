import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <div>
        <nav className="navbar">

            <div className='navtitle'>
                <p>Videogames</p>
            </div>

            <div className='navicon'>
                <Link to='/home' >
                    Home
                </Link>
            </div>

            <div className='navicon'>
                <Link to='/newgame' >
                    Add New Game
                </Link>
            </div>
        <SearchBar />
       </nav>
    </div>
  )
}

export default Navbar