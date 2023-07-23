import React from "react";
import { Link } from 'react-router-dom';
import { deleteVideogame, getVideogames } from "../../redux/actions";
import { useDispatch } from "react-redux";
import css from './VideogameCard.module.css'

export default function VideogameCard({name, genres, id, rating, image, createdInDb}) {

    let dispatch = useDispatch();

    function handlerClickDelete(id) {
        dispatch(deleteVideogame(id));
        dispatch(getVideogames());
    }

    return (
        <div className={css.div}>

            <Link to={`/videogame/${id}`}>
                <h3 className={css.title}>{name}</h3>
            </Link>

            <img className={css.imgs} src={image} alt='Img not found' />

            <div className={css.afterImg}>
                <p className={css.text}>{genres.join(', ')}</p>
                <p className={css.rating}>{rating}</p>
            </div>

            <div>
                {
                    createdInDb === true ?
                    <button className={css.btnDelete} onClick={() => handlerClickDelete(id)}>X</button>
                    : undefined
                }
            </div>

        </div>
    )
}