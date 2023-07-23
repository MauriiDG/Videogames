const { Videogame, Genre } = require('../db');
const { Op } = require('sequelize');
const axios = require('axios');
const { API_KEY } = process.env;

// Traer todos los juegos de la Api

const getApiData = async function() {
    let gamesData = [];

    for (let i = 1; i < 6; i++) {
        gamesData.push(axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`))
    }

    return Promise.all(gamesData) 
        .then ((response) => {

            let pages = [];
            let result = [];

            for (let i = 0; i < response.length; i++) {
                pages = [...pages, response[i].data.results]
            }

            pages.map(p => {
                p.forEach(v => {
                    result.push({
                        id: v.id,
                        name: v.name,
                        image: v.background_image,
                        rating: v.rating.toFixed(2),
                        genres: v.genres.map(g => g.name)
                    })
                })
            })

            return result;
    })
}

// Traer juegos de Db

const getDbData = async function() {

    let dbInfo = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })

    dbInfo = JSON.parse(JSON.stringify(dbInfo));
    //dbInfoModif= dbInfo.reverse()

    return dbInfo.map(game => {
        game.genres = game.genres.map(g => g.name)
        return game;
    })
}

// Traer todos los juegos 

const getAllVideogames = async function() {
    const apiData = await getApiData();
    const dbData = await getDbData();
    const apiDb = apiData.concat(dbData);

    return apiDb;
}

// Para traer los 15 primeros videojuegos que coincidan con el nombre pasado

const apiDataByName = async function(name) {

    let gamesData = [];

    const urlData = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
    urlData.data.results.forEach(g => {
        if(gamesData.length < 15) {
            gamesData.push({
                id: g.id,
                name: g.name,
                description: g.description,
                image: g.background_image,
                released: g.released,
                rating: g.rating.toFixed(2),
                platforms: Array.isArray(g.platforms)?g.platforms.map(p => p.platform.name):'Unspecified platform',
                genres: g.genres.map(g => g.name)
            })
        }
    })
    return gamesData;
}

const dbDataByName = async function(name) {
    let videogames = await Videogame.findAll({
        where: {
            name: {
                [Op.iLike]: '%' + name + '%'
            }
        },
        include: {
        model: Genre,
        attributes: ['name'],
        through: {
            attributes: []
            }
        }
    })

    videogames = JSON.parse(JSON.stringify(videogames));
    // videoGames = videoGames.reverse();

    return videogames.map(vg => {
        vg.genres = vg.genres.map(g => g.name)
        return vg;
    })
}

const getAllGamesByName = async function(name) {
    const apiResult = await apiDataByName(name);
    const dbResult = await dbDataByName(name);
    const allResult = apiResult.concat(dbResult);

    return allResult.slice(0, 15)
}

// Para dirigimos a la ruta videogames ya sea con nombre o sin nombre

exports.videogamesRoute = async function(req, res, next) {
    const { name } = req.query
    
    if(name) {
        let videogamesByName = await getAllGamesByName(name);

        if(videogamesByName.length <= 0) {
            res.status(404).send('No results')
        } else {
            res.status(200).json(videogamesByName)
        }
    } else {
        let videogames = await getAllVideogames();
        res.status(200).send(videogames)
    }
}

// Ruta para eliminar un videojuego

exports.deleteVideogame = async function(req, res, next) {
    const {id} = req.params;

    Videogame.destroy({
        where: {
            id: id
        }
    }).then(function(result) {
        if(result) {
            res.send('Videogame deleted')
        }
    })
}