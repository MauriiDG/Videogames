import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import css from './Nav.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function Nav({onSearch}) {

    const location = useLocation();

    const handleHomeButton = () => {
        if(location.pathname === '/home') {
            window.location.href = '/home'
        }
      };

    return (
        <nav className={css.nav}>

            <Link to='/home' onClick={handleHomeButton}>
                <span className={css.text}>Home</span>
            </Link>

            <Link to='/create'>
                <span className={css.text}>Create</span>
            </Link>

            <SearchBar/>
        </nav>

    )
}