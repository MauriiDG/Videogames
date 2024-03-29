import axios from 'axios';

export function getVideogames() {
    return function(dispatch) {
        axios.get('/videogames')
        .then(response => {
            return dispatch({
                type: 'GET_VIDEOGAMES',
                payload: response.data
            })
        })
    }
}

export function getVideogamesByName(payload) {
    return function(dispatch) {
        axios.get(`/videogames?name=${payload}`)
        .then(response => {
            return dispatch({
                type: 'GET_VIDEOGAMES_BY_NAME',
                payload: response.data
            })
        })
    }
}

export function getVideogameById(id) {
    return function(dispatch) {
        axios.get(`/videogame/${id}`)
        .then(response => {
            return dispatch({
                type: 'GET_VIDEOGAME_BY_ID',
                payload: response.data
            })
        })
    }
}

export function clearVideogame() {
    return function(dispatch) {
        return dispatch({
            type: 'GET_VIDEOGAME_BY_ID',
            payload: []
        })
    }
}

export function postVideogames(payload) {
    return function() {
        axios.post('/videogames', payload)
        .then(response => {
            return response
        })
    }
}

export const deleteVideogame = (id) => {
    return function() {
        axios.get(`/videogames/${id}`)
        .then(response => {
            return response
        })
    }
}

export function getGenres() {
    return function(dispatch) {
        axios.get('/genres')
        .then(response => {
            return dispatch({
                type: 'GET_GENRES',
                payload: response.data
            })
        })
    }
}

export function filterByGenres(payload) {
    return {
        type: 'FILTER_BY_GENRES',
        payload
    }
}

export function filterByCreated(payload) {
    return {
        type: 'FILTER_BY_CREATED',
        payload
    }
}

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByRating(payload) {
    return {
        type: 'ORDER_BY_RATING',
        payload
    }
}