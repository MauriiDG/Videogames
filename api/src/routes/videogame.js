const axios = require('axios');
const { Videogame, Genre } = require('../db')
const { API_KEY } = process.env;

// Para traer el videojuego que coincida con el id pasado

const getApiById = async function(id) {
    try {
        const urlData = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        const gamesData = {
            id: urlData.data.id,
            name: urlData.data.name,
            description: urlData.data.description_raw,
            image: urlData.data.background_image,
            platforms: urlData.data.platforms.map(p => p.platform.name),
            released: urlData.data.released,
            rating: urlData.data.rating,
            genres: urlData.data.genres.map(g => g.name)
        }
        return gamesData
    } catch (error) {
        return null
    }
}

const getDbById = async function(id) {
    try {
        let dbInfo = await Videogame.findOne({
            where: {
                id: id
            },
            include: {
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })

        dbInfo = JSON.parse(JSON.stringify(dbInfo))
        dbInfo.genres = dbInfo.genres.map(g => g.name)

        return dbInfo
    } catch (error) {
        return null
    }
}

const getAllGamesById = async function(id) {
    if (isNaN(id)) {
        const dbInfoId = await getDbById(id)
        return dbInfoId
    } else {
        const apiInfoId = await getApiById(id)
        return apiInfoId
    }
}


// Ruta para encontrar videojuego por id

exports.gameIdRoute = async function(req, res, next) {
    const { id } = req.params

    let gamesById = await getAllGamesById(id)

    if (gamesById != null) {
        res.status(200).json(gamesById)
    } else {
        res.status(404).send('Id not found')
    }
}

// Ruta para crear un videojuego

exports.createVideogame = async function(req, res, next) {
    try {
       const {name, description, released, rating, platforms, image, genres} = req.body

    let getDbGenres = await Genre.findAll({
        where: {
            name: genres
        }
    })

    if (name && description && platforms) {
        let newVideoGame = await Videogame.create({
            name,
            description,
            rating,
            platforms,
            genres,
            released,
            image
        })

        newVideoGame.addGenres(getDbGenres)
        return res.send('Videogame created succesfully')
    }  
    } catch (error) {
        res.status(404).send('Error')
    }
   
}