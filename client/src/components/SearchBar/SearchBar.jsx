import React , { useState } from "react";
import { useDispatch } from 'react-redux';
import { getVideogamesByName } from '../../redux/actions';
import css from './SearchBar.module.css';

export default function SearchBar() {

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handlerChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handlerSubmit(e) {
        e.preventDefault();
        dispatch(getVideogamesByName(name));
        setName('');
    }

    return (
        <div className={css.formClass}>
            <form onSubmit={(e) => handlerSubmit(e)}>
                <input 
                type='text'
                placeholder="Videogame"
                value={name}
                onChange={(e) => handlerChange(e)}
                className={css.input} 
                />

                <button type="submit" className={css.btn}>Search</button>
            </form>
        </div>
    )
}
