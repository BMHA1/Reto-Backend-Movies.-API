const router = require('express').Router() //middwalre te sirve para conectar las rutas desde app central
const controlador = require('./controlador')


router.post('/',  controlador.añadir )
router.get('/:id', controlador.buscarPelicula) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
router.get('/',  controlador.buscarPeliculas ) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
router.delete('/eliminar/:id', controlador.eliminarPelicula)
module.exports=router;
