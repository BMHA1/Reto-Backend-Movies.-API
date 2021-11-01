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
    res.send({ mensaje: `Lo siento ha ocurrido un error de ${error}`})
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
    } else {
      res.json({ data: metodo.crearToken(comprobracionEmail) })
      
    }


  } catch (error) {
    res.send({
      mensaje: `tus datos son incorrectos: ${error}`
    })
  }
}
//cambiar usurario
module.exports.cambiarNombre = async (req, res) => {
  try {
    await Datausuario.findOneAndUpdate({ _id: req.params.id }, { nombre: req.body.nombre })
    res.send('el nombre se ha cambiado perfectamente por:' + ' ' + req.body.nombre)
  } catch (error) {
    res.send({ mensaje: `Lo siento ha ocurrido un error de ${error}` })
  }
}
//eliminar usuario
module.exports.eliminarUsuario = async (req, res) => {
  const eliminar = await Datausuario.findOneAndDelete({ _id: req.params.id })
  res.json({ data: eliminar.nombre })
}