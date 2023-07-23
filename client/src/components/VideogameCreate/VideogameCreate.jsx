import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postVideogames, getGenres } from "../../redux/actions";
import Nav from '../Nav/Nav';
import css from './VideogameCreate.module.css';

export default function VideogameCreate() {

    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector(state => state.genres);

    const platformsApi = 
    ["PC", "PlayStation 5", "PlayStation 4", "PlayStation 3", "Xbox One", "Xbox Series S/X", "Xbox 360", "Xbox",
    "Nintendo Switch", "Nintendo 3DS", "Nintendo DS", "Nintendo DSi", "iOS", "Android", "macOS", "Linux"]

    const [input, setInput] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        platforms: [],
        image: '',
        genres: []
    })

    function handlerSubmit(e) {
        e.preventDefault();
        dispatch(postVideogames(input));
        alert('Videogame created')

        setInput({
            name: '',
            description: '',
            released: '',
            rating: '',
            platforms: [],
            image: '',
            genres: []
        })

        history.push('/home')
    }

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    function handlerChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handlerPlatforms(e) {
        setInput({
            ...input,
            platforms: input.platforms.includes(e.target.value) ? input.platforms : [...input.platforms, e.target.value]
        })
    }

    function deletePlatforms(el) {
        setInput({
            ...input,
            platforms: input.platforms.filter(p => p !== el)
        })
    }
    
    function handlerGenres(e) {
        setInput({
            ...input,
            genres: input.genres.includes(e.target.value) ? input.genres : [...input.genres, e.target.value]
        })
    }

    function deleteGenres(el) {
        setInput({
            ...input,
            genres: input.genres.filter(g => g !== el)
        })
    }

    return (
        <div className={css.divGeneral}>

            <Nav/>

            <div className={css.divCreate}>

                <h1 className={css.title}>New Videogame</h1>

                <form onSubmit={(e) => {handlerSubmit(e)}}>
                    <div className={css.data}>
                        <div className={css.firstColumn}>

                            <div>
                                <label>Name: </label>
                                <input 
                                    type='text'
                                    value={input.name}
                                    name='name'
                                    onChange={(e) => handlerChange(e)}
                                    required={true}
                                    placeholder='Videogame'
                                    className={css.input}
                                />
                            </div>

                            <div>
                                <label>Description: </label>
                                <textarea 
                                    type='text'
                                    value={input.description}
                                    name='description'
                                    onChange={(e) => handlerChange(e)}
                                    required={true}
                                    placeholder='Description'
                                    className={css.inputDescription}
                                />
                            </div>

                            <div>
                                <label>Image: </label>
                                <input 
                                    type='text'
                                    value={input.image}
                                    name='image'
                                    onChange={(e) => handlerChange(e)}
                                    placeholder='Image URL'
                                    className={css.input}
                                />
                            </div>

                            <div className={css.secondColumn}>

                                <div>
                                    <label>Released: </label>
                                    <input 
                                        type='date'
                                        value={input.released}
                                        name='released'
                                        onChange={(e) => handlerChange(e)}
                                        className={css.input}
                                        required={true}
                                    />
                                </div>

                                <div>
                                    <label>Platforms :</label>
                                    <select className={css.input} required={true} onChange={(e) => handlerPlatforms(e)}>
                                        <option value=''>Select Platforms</option>
                                        {
                                            platformsApi && platformsApi.map((p, index) => (
                                                <option key={index} value={p}>{p}</option>
                                            ))
                                        }
                                    </select>
                                    {
                                        input.platforms.map((el, index) => 
                                            <div key={index} className={css.divMultiSelect}>
                                                <p className={css.multiSelect}>{el}</p>
                                                <button type='button' className={css.btnMultiSelect} onClick={() => {deletePlatforms(el)}}>X</button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Rating: </label>
                                    <input 
                                        type='number'
                                        value={input.rating}
                                        name='rating'
                                        onChange={(e) => handlerChange(e)}
                                        className={css.input}
                                        id={css.inputRating}
                                        step={0.01}
                                        placeholder='0.00 - 5.00'
                                        min={0.00}
                                        max={5}
                                        required={true}
                                    />
                                </div>

                                <label>Genres: </label>
                                <select className={css.selectGenres} onChange={(e) => {handlerGenres(e)}}>
                                    <option value=''>Select Genres</option>
                                    {
                                        genres && genres.map(g => (
                                            <option key={g.id} value={g.name}>{g.name}</option> 
                                        ))
                                    }
                                </select>
                                {
                                    input.genres.map((el, index) =>
                                    <div key={index} className={css.divMultiSelect}>
                                        <p className={css.multiSelect}>{el}</p>
                                        <button type='button' className={css.btnMultiSelect} onClick={() => {deleteGenres(el)}}>X</button>
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <button className={css.btn} type='submit'>Create Videogame</button>
                </form>
            </div>
        </div>
    )
}