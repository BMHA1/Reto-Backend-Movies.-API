const Datapeliculas = require('./modelo.js')

//busqueda de peliculas
module.exports.buscarPeliculas = async (req, res) => {
    if (req.query) {
        const parametro = {}
        if (req.query.titulo) parametro.titulo = req.query.titulo
        if (req.query.genero) parametro.genero = req.query.genero
        if (req.query.actores) parametro.actores = req.query.actores
        const filtrado = await Datapeliculas.find(parametro);
        res.json({ data: filtrado })
    } else {
        const todasLasPeliculas = await Datapeliculas.find()
        res.json({ todas: todasLasPeliculas })
    }
}
module.exports.buscarPelicula = async (req, res) => {
     const peticionPelicula =  Datapeliculas.find({ _id:req.params.id})
    res.json({ id:peticionPelicula})
}
// añadir peliculas
module.exports.añadir = async (req, res) => {
    const pelicula = new Datapeliculas(req.body)
    await pelicula.save()
    res.json({ data: pelicula })
}


