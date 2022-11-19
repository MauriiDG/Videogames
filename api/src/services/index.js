const axios = require("axios")

function getVideogames(page, genre, sort, search) {
    return new Promise((resolve, reject) => {
        let url = 'https://api.rawg.io/api/games?key=736cfa1f76a743008958ce3e27b1408f&page_size=15';

        if (page) {
            url = url + '&page=' + page
        }

        if (genre) {
            url = url + '&genres=' + genre
        }

        if (sort) {
            url = url + '&ordering=' + sort
        }

        if (search) {
            url = url + '&search=' + search
        }
        
        console.log(url)

        axios.get(url)
            .then(response => {     
                const resp = {
                    hasNext: response.data.next !== null,
                    hasPrev: response.data.previous !== null,
                    videogames: response.data.results.map(videogame => (
                        {
                            id: videogame.id,
                            name: videogame.name,
                            image: videogame.background_image,
                            genres: videogame.genres.map(genre => ({
                                    id: genre.id,
                                    name: genre.name
                                }))
                        }
                    ))
                }
            
                resolve(resp);
            })
            .catch(error => reject(error))
    })
}

function getVideogamesPage(page) {
    return new Promise ((resolve, reject) => {
        axios.get(`https://api.rawg.io/api/games?key=736cfa1f76a743008958ce3e27b1408f&page=${page}&page_size=15`)
        .then(response => {
            const videogames = response.data.results.map(videogame => (
                {
                    id: videogame.id,
                    name: videogame.name,
                    image: videogame.background_image,
                    genres: videogame.genres.map(genre => ({
                            id: genre.id,
                            name: genre.name
                        }))
                }
            ))
            resolve(videogames);
        })
        .catch(error => reject(error))
    })
}

function getVideogame(id) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.rawg.io/api/games/${id}?key=736cfa1f76a743008958ce3e27b1408f`)
            .then(response => resolve({
                id: response.data.id,
                name: response.data.name,
                description: response.data.description,
                image: response.data.background_image,
                genres: response.data.genres.map(genre => ({
                    id: genre.id,
                    name: genre.name
                })),
                released: response.data.released,
                rating: response.data.rating,
                platforms: response.data.parent_platforms.map(parentPlatform => ({
                    id: parentPlatform.platform.id,
                    name: parentPlatform.platform.name
                }))
            }))
            .catch(error => reject(error))
    })
}

function getGenres () {
    return new Promise((resolve, reject) => {
        axios.get('https://api.rawg.io/api/genres?key=736cfa1f76a743008958ce3e27b1408f')
            .then(response => {         
                const genres = response.data.results.map(genre => (
                    {
                     id: genre.id,
                     name: genre.name   
                    }
                ))
                resolve(genres);
            })
            .catch(error => reject(error))
    })
}

function getGamesByGenre (genre) {
    return new Promise ((resolve, reject) => {
        axios.get(`https://api.rawg.io/api/games?key=736cfa1f76a743008958ce3e27b1408f&genres=${genre}&page_size=15`)
        .then(response => {
            const videogames = response.data.results.map(videogame => (
                {
                    id: videogame.id,
                    name: videogame.name,
                    image: videogame.background_image,
                    genres: videogame.genres.map(genre => ({
                            id: genre.id,
                            name: genre.name
                        }))
                }
            ))
            resolve(videogames)
        })
        .catch(error => reject(error))
    })
}

function sortBy (sort) {
    return new Promise ((resolve, reject) => {
        axios.get(`https://api.rawg.io/api/games?key=736cfa1f76a743008958ce3e27b1408f&ordering=${sort}&page_size=15`)
        .then(response => {
            const videogames = response.data.results.map(videogame => (
                {
                    id: videogame.id,
                    name: videogame.name,
                    image: videogame.background_image,
                    genres: videogame.genres.map(genre => ({
                        id: genre.id,
                        name: genre.name
                    }))
                }
            ))
            resolve(videogames)
        })
        .catch(error => reject(error))
    })
}

function searchGames (game) {
    return new Promise ((resolve, reject) => {
        axios.get(`https://api.rawg.io/api/games?key=736cfa1f76a743008958ce3e27b1408f&search=${game}`)
        .then(response => {
            const videogames = response.data.results.map(videogame => (
                {
                    id: videogame.id,
                    name: videogame.name,
                    image: videogame.background_image,
                    genres: videogame.genres.map(genre => ({
                        id: genre.id,
                        name: genre.name
                    }))
                }
            ))
            resolve(videogames)
        })
        .catch(error => reject(error))
    })
}  

module.exports = { getVideogames, getVideogame, getVideogamesPage, getGenres, getGamesByGenre, sortBy, searchGames }