const axios = require("axios")

function getVideogames() {
    return new Promise((resolve, reject) => {
        axios.get('https://api.rawg.io/api/games?key=736cfa1f76a743008958ce3e27b1408f')
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

function getVideogamesPage(page, genre) {
    return new Promise ((resolve, reject) => {
        axios.get(`https://api.rawg.io/api/games?key=736cfa1f76a743008958ce3e27b1408f&page=${page}&page_size=15${genre !== undefined ? `&genres=${genre}` : '' }`)
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

function getGenre () {
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

module.exports = { getVideogames, getVideogame, getVideogamesPage, getGenre }