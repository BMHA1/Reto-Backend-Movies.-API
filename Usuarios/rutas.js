const router = require('express').Router() //middwalre te sirve para conectar las rutas desde app central
const controlador = require('./controlador')

// Películas:
// ● Endpoint busqueda titulo
// ● Endpoint busqueda id
// ● Endpoint todas las peliculas

// Extra points:
// -Endpoint filtrar por género
// -Endpoint filtrar por actores



router.post('/',  controlador.crearUsuario ) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
// router.get('/',  controlador.buscarUsuarios ) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 

module.exports=router;
