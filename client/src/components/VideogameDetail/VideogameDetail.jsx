import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getVideogameById, clearVideogame } from "../../redux/actions";
import css from './VideogameDetail.module.css'

export default function VideogameDetail() {

    const {id} = useParams(); 
    const dispatch = useDispatch();
    const videogameDetail = useSelector(state => state.detail)

    useEffect(() => {
        dispatch(clearVideogame())
        dispatch(getVideogameById(id))
    }, [dispatch, id])

    return (
        <div>
            {
                videogameDetail.name ?
                <div className={css.divGeneral}>
                    
                    <div className={css.div}>
                        
                        <h1 className={css.title}>{videogameDetail.name}</h1>
                        
                        <div className={css.divAllInfo}>

                            <div className={css.divImg}>
                                <img className={css.img} src={videogameDetail.image} alt='Img not found' />
                            </div>

                            <div className={css.info}>
                                <p>{videogameDetail.description}</p>
                                <p>
                                    Released: <span>{videogameDetail.released}</span>
                                </p>
                                <p>
                                    Rating: <span>{videogameDetail.rating}</span>
                                </p>
                                <p> 
                                    Platforms: <span>{videogameDetail.platforms.join(', ')}</span> 
                                </p>
                                <p>
                                    Genres: <span>{videogameDetail.genres.join(', ')}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={css.divBack}>
                        <Link to='/home'>
                            <button className={css.btn}>Home</button>
                        </Link>
                    </div>
                </div>
                :
                <div className={css.loading}>
                    <p>Loading</p>
                </div>
            }
        </div>
    )
}