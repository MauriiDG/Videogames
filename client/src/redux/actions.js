import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const getGames = createAsyncThunk('GET_GAMES',
    async () => {
        return axios.get(`http://localhost:3001/videogames`)
        .then(response => response.data)
        .catch(error => error)
    })

export const getGame = createAsyncThunk('GET_GAME',
    async (id) => {
        return axios.get(`http://localhost:3001/videogame/${id}`)
        .then(response => response.data)
        .catch(error => error)
    })

export const getGenres = createAsyncThunk('GET_GENRES',
    async () => {
        return axios.get(`http://localhost:3001/genres`)
        .then(response => response.data)
        .catch(error => error)
    })

export const getGamesByGenre = createAsyncThunk('GET_GAMES_BY_GENRE',
    async (genre) => {
        return axios.get(`http://localhost:3001/videogames?genre=${genre}`)
        .then(response => response.data)
        .catch(error => error)
    })

export const getNextPage = createAsyncThunk('GET_NEXT_PAGE',
    async (args) => { 
        args.page++
        let url = `http://localhost:3001/videogames?page=${args.page}`
        
        if (args.genre) {
            url = url + `&genre=${args.genre}`
        }

        if (args.search) {
            url = url + `&search=${args.search}`
        }

        if (args.sort) {
            url = url + `&ordering=${args.sort}`
        }

        return axios.get(url)
        .then(response => response.data)
        .catch(error => error)
    })

export const getPrevPage = createAsyncThunk('GET_PREV_PAGE',
    async (args) => { 
        args.page--
        let url = `http://localhost:3001/videogames?page=${args.page}`
        
        if (args.genre) {
            url = url + `&genre=${args.genre}`
        }

        if (args.search) {
            url = url + `&search=${args.search}`
        }

        if (args.sort) {
            url = url + `&ordering=${args.sort}`
        }
        
        return axios.get(url)
        .then(response => response.data)
        .catch(error => error)
    })

export const sortBy = createAsyncThunk('SORT_BY',
    async(sort) => {
        return axios.get(`http://localhost:3001/videogames?ordering=${sort}`)
        .then(response => response.data)
        .catch(error => error)
    })

export const searchGames = createAsyncThunk('SEARCH_GAMES',
    async (game) => {
        return axios.get(`http://localhost:3001/videogames?search=${game}`)
        .then(response => response.data)
        .catch(error => error)
    })