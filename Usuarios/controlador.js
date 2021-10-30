const Datausuario = require('./modelo.js')

//creamo Usuario
module.exports.crearUsuario = async (req, res) => {
    try {
        const altaUsuario = new Datausuario(req.body)
        altaUsuario[0].rol='usuario'
        await altaUsuario.save()
        res.json({ mensaje: 'Enhora buena, ya puedes ver nuestras peliculas' })
    } catch (error) {
      res.send({ mensaje: `Lo siento ha ocurrido un error de ${error}`})
    }
}

//login Usuario
module.exports.loggin= async (req,res)=>{
  try{
   const comprobracionEmail = await  Datausuario.findOne({ email: req.body.email, contraseña: req.body.contraseña})
   res.send({comprobracionEmail})
  }catch(error){
    res.send({mensaje: `tus datos son incorrecto: ${error}`})
  }
}
