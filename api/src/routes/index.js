const { Router } = require('express');
const { getVideogames, getVideogame, getVideogamesPage, getGenres, getGamesByGenre, sortBy, searchGames } = require('../services');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames', (req, res) => { 
    getVideogames(req.query.page, req.query.genre, req.query.sort, req.query.search)
        .then(videogames => res.json(videogames))
        .catch(error => {
            res.status = 500;
            res.json(error);
        })
})

router.get('/videogames/:page', (req, res) => {
    getVideogamesPage(req.params.page)
    .then(videogames => res.json(videogames))
    .catch(error => {
        res.status = 500;
        res.json(error);
    })
})

router.get('/videogame/:id', (req, res) => {
    getVideogame(req.params.id)
        .then(videogame => res.json(videogame))
        .catch(error => {
            res.status = 500;
            res.json(error);
        })
})

router.get('/genres', (req, res) => {
    getGenres()
        .then(genres => res.json(genres))
        .catch(error => {
            res.status = 500;
            res.json(error);
        })
})

router.get(`/genres/:genre`, (req, res) => {
    getGamesByGenre(req.params.genre)
    .then(genre => res.json(genre))
    .catch(error => {
        res.status = 500;
        res.json(error);
    })
})

router.get(`/sortby/:sort`, (req, res) => {
    sortBy(req.params.sort)
    .then(sort => res.json(sort))
    .catch(error => {
        res.status = 500;
        res.json(error);
    })
})

router.get(`/search/:game`, (req, res) => {
    searchGames(req.params.game)
    .then(game => res.json(game))
    .catch(error => {
        res.status = 500;
        res.json(error)
    })
})

module.exports = router;
