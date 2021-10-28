const express = require('express')//requerimo un module de express
const app = express();
// const rutasPeliculas= require('./Peliculas/router')
app.use(express.json()); //conversor a codigo JSON: MIDELWARE
const arrayPelicula = [
    {
        id: 01,
        nombre: 'Rey Leon',
        genero: ['animacion', 'accion']
    },
    {
        id: 02,
        nombre: 'Pinocho',
        genero: ['animacion', 'accion']
    },
    {
        id: 03,
        nombre: 'La sirenita',
        genero: ['animacion', 'accion']
    },
    {
        id: 04,
        nombre: 'Señor de los anillos',
        genero: ['animacion', 'accion']
    },
    {
        id: 05,
        nombre: 'Harry potter ',
        genero: ['animacion', 'accion']
    },
    {
        id: 06,
        nombre: 'Harry potter ',
        genero: ['animacion', 'accion']
    }
]

app.get('/peliculas', (req, res) => {

    // const buscartodosTitle = (contenido) => {
    //     let mostradorTitulos = []
    //     contenido.forEach(element => { mostradorTitulos.push(element.nombre)})
    //     return mostradorTitulos
    // }
    // let result = buscartodosTitle(arrayPelicula)

    const onlytitle= (contenido) => {
      let  titulo2 = arrayPelicula.filter(({nombre}) => nombre.includes(contenido))
        return titulo2
    }

    let titulo =onlytitle(req.query.buscadortitulo)

     res.json({ El_titulo: titulo })
    // else res.json({ todas_las_pelicula: result })



})





app.listen(3001, () => console.log('servidor levantado en puerto 3001'))

