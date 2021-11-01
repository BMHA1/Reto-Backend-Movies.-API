const bcrypt = require('bcrypt');

module.exports.crearHash =  (password) => {
    let encriptada = bcrypt.hashSync(password, 10)
    return encriptada
}
module.exports.compararHash=(contraseniaplano,contrasenidb)=>{

let comparacion =bcrypt.compareSync(contraseniaplano,contrasenidb)
return comparacion
}