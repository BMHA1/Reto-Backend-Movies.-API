const Datausuario = require('./modelo.js')

// //busqueda de peliculas
// module.exports.buscarUsuarios = async (req, res) => {
//     // if (req.query) {
//     //     // const parametro = {}
//     //     // if (req.query.titulo) parametro.titulo = req.query.titulo
//     //     // if (req.query.genero) parametro.genero = req.query.genero
//     //     // if (req.query.actores) parametro.actores = req.query.actores
//     //     const filtrado = await Datausuario.find(parametro);
//     //     res.json({ data: filtrado })
//     // } else {
//     //     const todasLasPeliculas = await Datausuario.find()
//     //     res.json({ todas: todasLasPeliculas })
//     // }
// }

// module.exports.buscarusuario = async (req, res) => {
//     //  const peticionPelicula =  Datausuario.find({ _id:req.params.id})
//     // res.json({ id:peticionPelicula})
// }
// // añadir isario
module.exports.crearUsuario = async (req, res) =>{
try{
    const altaUsuario = new Datausuario(req.body)
    altaUsuario[0].usario.rol='usario'
    await altaUsuario.create()
    res.send({ altaUsuario, mensaje: 'Enhora buena, ya puedes ver nuestras peliculas'})
}catch(error){
    res.send({mensaje:`Lo siento ha ocurrido un error${error}`})
}

}



// module.exports.eliminarUsuario=async(req, res)=>{
//     const eliminarPelicula= Datausuario.findOneAndDelete
// }


