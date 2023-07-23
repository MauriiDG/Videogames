const { Genre } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;


// Para traer todos los génerenos desde la api
const getApiGenres = async function() {
    let gamesData = []

    const urlData = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    urlData.data.results.forEach(v => {
        gamesData.push({
            id: v.id,
            name: v.name
        })
    })

    gamesData.forEach(el => {
        Genre.findOrCreate({
            where: {
                id: el.id,
                name: el.name
            }
        })
    })
}

// Ruta para traer todos los generos

exports.Genres = async function(req, res, next) {
    await getApiGenres();

    const getDbGenres = await Genre.findAll();

    res.send(getDbGenres)
};