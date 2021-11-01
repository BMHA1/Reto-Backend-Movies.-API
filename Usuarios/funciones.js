const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const moment = require("moment")


module.exports.crearHash = (password) => {
    let encriptada = bcrypt.hashSync(password, 10)
    return encriptada
}
module.exports.compararHash = (contraseniaplano, contrasenidb) => {

    let comparacion = bcrypt.compareSync(contraseniaplano, contrasenidb)
    return comparacion
}
module.exports.crearToken = (usuario) => {
    const payload = {
        data: usuario._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    }
    return jwt.sign(payload, process.env.TOKEN)
}
