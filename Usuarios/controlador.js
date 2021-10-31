const Datausuario = require('./modelo.js')

//creamo Usuario
module.exports.crearUsuario = async (req, res) => {
  try {
    const altaUsuario = new Datausuario(req.body)
    altaUsuario.contraseña = //metodo bycrypt
      altaUsuario.rol = 'usuario'
    await altaUsuario.save()
    res.json({ mensaje: 'Enhora buena, ya puedes ver nuestras peliculas' })
  } catch (error) {

    res.send({ mensaje: `Lo siento ha ocurrido un error de ${error}` })
  }
}
//buscamos Usuario 
// module.exports.buscarUsuario =





//login Usuario
module.exports.login = async (req, res) => {
  try {
    const comprobracionEmail = await Datausuario.findOne({ email: req.body.email })
    /*const comprobacionContraseña = bcripSyn ( passwortextoplano , comprobracionEmail.contraseña)*/
        if (comprobracionEmail /*=== null || !comprobacionContraseña*/ ) {
      res.send({ mensaje: 'Error, tu email o conrtraseña son incorrectos,vete a la mierda' })
    }
    res.json({ devolvertoken })
  } catch (error) {
    res.send({ mensaje: `tus datos son incorrectos: ${error}` })
  }
}

