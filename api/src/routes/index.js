const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { videogamesRoute, deleteVideogame} = require('./videogames');
const { gameIdRoute, createVideogame } = require('./videogame');
const {Genres}  = require('./genres');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames', videogamesRoute);
router.get('/videogames/:id', deleteVideogame);
router.get('/videogame/:id', gameIdRoute);
router.get('/genres', Genres);

router.post('/videogames', createVideogame)

module.exports = router;
