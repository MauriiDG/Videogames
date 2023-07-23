import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/actions";
import css from './Filter.module.css'

export default function Filter({handlerGenres, handlerCreated, genreChange}) {

    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch]);

    return (
        <div className={css.divSourceGenres}>

            <div className={css.divSource}>
                <p className={css.titles}>Source</p>
                <div className={css.divSource}>
                    <button className={css.source} onClick={() => handlerCreated('All')}>All</button> 
                    <button className={css.source} onClick={() => handlerCreated('Created')}>Created</button> 
                    <button className={css.source} onClick={() => handlerCreated('Api')}>Rawg</button> 
                </div>
            </div>
            <div>
                <p className={css.titles}>Genres</p>

                <select value={genreChange} onChange={(e) => handlerGenres(e)} className={css.select}>
                    <option value='All'>All</option>
                    {
                        genres && genres.map(g => (
                            <option value={g.name} key={g.id}>{g.name}</option>
                        ))
                    }
                </select>
            </div>

        </div>
    )

}   