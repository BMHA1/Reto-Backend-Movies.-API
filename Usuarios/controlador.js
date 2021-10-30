const Datausuario = require('./modelo.js')


module.exports.crearUsuario = async (req, res) => {
    try {
        const altaUsuario = new Datausuario(req.body)
        await altaUsuario.save()
        res.json({ mensaje: 'Enhora buena, ya puedes ver nuestras peliculas' })
    } catch (error) {
      res.send({ mensaje: `Lo siento ha ocurrido un error${error}` })
    }
}


