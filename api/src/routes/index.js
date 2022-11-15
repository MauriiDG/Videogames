const { Router } = require('express');
const { getVideogames, getVideogame, getVideogamesPage, getGenre } = require('../services');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames/', (req, res) => {
    getVideogames()
        .then(videogames => res.json(videogames))
        .catch(error => {
            res.status = 500;
            res.json(error);
        })
})

router.get('/videogames/:page', (req, res) => {
    getVideogamesPage(req.params.page, req.query.genres)
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
    getGenre()
        .then(genres => res.json(genres))
        .catch(error => {
            res.status = 500;
            res.json(error);
        })
})



module.exports = router;
