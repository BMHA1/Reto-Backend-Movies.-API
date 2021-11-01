const router = require('express').Router() //middwalre te sirve para conectar las rutas desde app central
const controlador = require('./controlador')



router.post('/alta',  controlador.crearUsuario ) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
router.post ('/login', controlador.login)
router.get('/:id',  controlador.buscarUsuarios ) // buscar pelicula mediante un id (posición del array) vamos a utilizar query params para 
rotuter.put('/:id', controlador.modificarNombre)//buscar y cambiar


module.exports=router;