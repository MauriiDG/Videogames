import React from "react";
import css from './OrderBy.module.css';

export default function OrderBy({handlerByName, handlerByRating, nameChange, ratingChange}) {
    return (
        <div className={css.divSort}>

            <p className={css.titles}>Sort By</p>

            <div className={css.divName}>
                <label className={css.subTitles}>Name</label>
                <select value={nameChange} onChange={(e) => handlerByName(e)} className={css.selects}>
                    <option value=''>Select</option>
                    <option value='asc'>A - Z</option>
                    <option value='desc'>Z - A</option>
                </select>
            </div>

            <div className={css.divRating}>
                <label className={css.subTitles}>Rating</label>
                <select value={ratingChange} onChange={(e) => handlerByRating(e)} className={css.selects}>
                    <option value=''>Select</option>
                    <option value='asc'>0 - 5</option>
                    <option value='desc'>5 - 0</option>
                </select>
            </div>
        </div>
    )
}