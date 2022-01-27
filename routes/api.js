const router = require('express').Router();
const middleware = require('./middelwares');
const apiPersonajeRouter =  require('./api/Personajes');
const apiPeliSerieRouter =  require('./api/Pelis_Series');
const apiGeneroRouter =  require('./api/Generos');
const apiUserRouter = require('./api/Usuarios');

router.use('/characters', middleware.checkToken, apiPersonajeRouter );
router.use('/movies', apiPeliSerieRouter );
router.use('/generos', apiGeneroRouter );
router.use('/auth', apiUserRouter);

module.exports =  router;