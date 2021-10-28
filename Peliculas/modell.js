const mongoose = requiere('mongoose');
const EsquemaPelicula= new mongoose.Schema({
    titulo:{type:String, require},
    director:{type:String, },
    genero:{type:String, },
    duracion:{type:String, },
    actores:{type:String},
})
module.exports=mongoose.model('Movie', EsquemaPelicula)