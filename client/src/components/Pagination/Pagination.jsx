import React from "react";
import css from './Pagination.module.css';

export default function Pagination({videogamesPerPage, allVideogames, pagination}) {
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(allVideogames/videogamesPerPage); i++) {
        pageNumbers.push(i + 1);
    }

    return (
        <nav>
            <ul className={css.button}>
                {pageNumbers && pageNumbers.map(number => (
                    <div key={number}>
                        <button onClick={() => pagination(number)} className={css.eachBtn}>{number}</button>
                    </div>
                ))}
            </ul>
        </nav>
    )
}