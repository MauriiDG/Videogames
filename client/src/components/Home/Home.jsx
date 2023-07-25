import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, filterByGenres, filterByCreated, orderByName, orderByRating } from "../../redux/actions";
import Nav from '../Nav/Nav';
import VideogameCard from "../VideogameCard/VideogameCard";
import Pagination from '../Pagination/Pagination';
import Filter from "../Filter/Filter";
import OrderBy from '../OrderBy/OrderBy';
import css from './Home.module.css';

export default function Home() {

    let dispatch = useDispatch();

    const allVideoGames = useSelector(state => state.videogames);
    const [currentPage, setCurrentPage] = useState(1);
    const [videogamesPerPage] = useState(15);
    const indexLastVideogame = currentPage * videogamesPerPage;
    const indexFirstVideogame = indexLastVideogame - videogamesPerPage;
    const currentVideogames = allVideoGames.slice(indexFirstVideogame, indexLastVideogame);
    const [source, setSource] = useState('All');
    const [nameChange, setNameChange] = useState('');
    const [ratingChange, setRatingChange] = useState('');
    const [genreChange, setGenreChange] = useState('');
    const [, setOrder] = useState();

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getVideogames());
    }, [dispatch])

    function handlerReset(e) {
        e.preventDefault();
        dispatch(getVideogames());
        setNameChange('');
        setRatingChange('');
        setGenreChange('');
        setCurrentPage(1);
        setSource('All');
    }

    function handlerGenres(e) {
        e.preventDefault();
        dispatch(filterByGenres(e.target.value));
        setCurrentPage(1);
        setSource('All');
        setGenreChange(e.target.value);
        setOrder(e.target.value)
    }

    function handlerCreated(e) {
        dispatch(filterByCreated(e));
        setSource(e);
        setCurrentPage(1);
        setGenreChange('');
        setOrder(e)
    }

    function handlerByName(e) {
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setRatingChange('');
        setNameChange(e.target.value);
        setOrder(e.target.value)
    }

    function handlerByRating(e) {
        dispatch(orderByRating(e.target.value));
        setCurrentPage(1);
        setNameChange('');
        setRatingChange(e.target.value);
        setOrder(e.target.value)
    }

    return (
        <div>

            <Nav />

            <div className={css.divTwoColum}>
                
                <div className={css.firstColum}>
                    <OrderBy handlerByName={handlerByName} handlerByRating={handlerByRating} nameChange={nameChange} ratingChange={ratingChange} />
                    <Filter handlerGenres={handlerGenres} handlerCreated={handlerCreated} source={source} genreChange={genreChange} />
                    <button onClick={e => {handlerReset(e)}} className={css.btn}>Reset</button>
                </div>

                <div className={css.secondColum}>                    

                    <Pagination videogamesPerPage={videogamesPerPage} allVideogames={allVideoGames.length} pagination={pagination} currentPage={currentPage} />

                    <div className={css.home}>
                        <div className={css.divCards}>  
                            {currentVideogames.map(el => {
                                return (
                                    <div key={el.id}>
                                        <VideogameCard name={el.name} genres={el.genres} image={el.image ? el.image : 'Img not found'} rating={el.rating} id={el.id} createdInDb={el.createdInDb} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
