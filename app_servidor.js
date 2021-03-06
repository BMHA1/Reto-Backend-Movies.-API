const express = require('express')//requerimo un module de express
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const app = express();
const rutasPeliculas = require('./Peliculas/rutas')
const rutasUsuario = require('./Usuarios/rutas')

app.use(express.json()); //conversor a codigo JSON: MIDELWARE

mongoose.connect('mongodb://localhost:27017/backend_netflix', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('conectado a la base de datos'))
    .catch((e) => console.log(e))

app.use('/usuario', rutasUsuario)
app.use('/peliculas', rutasPeliculas)
app.listen(process.env.PORT, () => console.log('funcionando'))
console.log(process.env.PORT)


