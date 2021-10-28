const express = require('express')//requerimo un module de express
const mongoose = require('mongoose')
const app = express();
const rutasPeliculas= require('./Peliculas/rutas')
app.use(express.json()); //conversor a codigo JSON: MIDELWARE


mongoose.connect('mongodb://localhost:27017/backend_netflix',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
})

.then(()=> console.log('conectado a la base de datos'))
.catch((e)=> console.log(e))


app.use('/peliculas', rutasPeliculas)
app.listen(3000, () => console.log('servidor levantado en puerto 3000'))

