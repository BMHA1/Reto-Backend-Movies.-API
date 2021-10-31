const router = require('express').Router() //middwalre te sirve para conectar las rutas desde app central
const controlador = require('./controlador')



router.post('/',  controlador.crearUsuario ) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
router.get ('/login', controlador.login)
// router.get('/',  controlador.buscarUsuarios ) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 

module.exports=router;
