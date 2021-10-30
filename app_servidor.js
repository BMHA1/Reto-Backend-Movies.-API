const express = require('express')//requerimo un module de express
const mongoose = require('mongoose')
const app = express();
const rutasPeliculas= require('./Peliculas/rutas')
const rutasUsaruio=require('./Usuarios/rutas')
// const jwt=require('jsonwebtoken')
app.use(express.json()); //conversor a codigo JSON: MIDELWARE

mongoose.connect('mongodb://localhost:27017/backend_netflix',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(()=> console.log('conectado a la base de datos'))
.catch((e)=> console.log(e))


app.use('/usuario',rutasUsaruio)
app.use('/peliculas', rutasPeliculas)
app.listen(3000, () => console.log('servidor levantado en puerto 3000'))



// const token=jwt.sign({foo:'bar'},'shhhh')
// console.log(token)


// const decoded = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MzU0OTY0NzZ9.1ZxC-PVqMV_oPBn53JFwkajOUgjLGi8tAi3O99f3eWs', 'shhhh');
// console.log(decoded.foo)