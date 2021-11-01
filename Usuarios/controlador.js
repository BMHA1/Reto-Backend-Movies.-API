const Datausuario = require('./modelo.js')
const metodo = require('./funciones')



//creamo Usuario
module.exports.crearUsuario = async (req, res) => {
  try {
    const altaUsuario = new Datausuario(req.body)
    altaUsuario.rol = 'usuario'
    await altaUsuario.save()
    res.json({ mensaje: 'Enhora buena, ya puedes ver nuestras peliculas' })
  } catch (error) {
    res.send({ mensaje: `Lo siento ha ocurrido un error de ${error}` })
  }
}
//buscamos Usuario 
module.exports.buscarUsuarios = async (req, res) => {
  try {
    const buscarId = await Datausuario.find({ _id: req.params.id })
    res.json({ buscarId })

  } catch (error) {
    res.send({ mensaje: `Lo siento ha ocurrido un error de ${error}` })
  }
}

// login Usuario
module.exports.login = async (req, res) => {
  try {

    const comprobracionEmail = await Datausuario.findOne({ email: req.body.email })
    const comprobacionContrasenia = metodo.compararHash(req.body.contrasenia, comprobracionEmail.contrasenia)
    if (comprobracionEmail === null || !comprobacionContrasenia) {
      res.send({ mensaje: 'Error, tu email o conrtraseña son incorrectos,vete a la mierda' })
    }
    res.json({ data: 'acceso permitido' })

  } catch (error) {
    res.send({
      mensaje: `tus datos son incorrectos: ${error}`
    })
  }
}
