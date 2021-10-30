const mongoose = require('mongoose');
const EsquemaPersona = new mongoose.Schema({

    nombre: { type: String, required: true, trim: true, },
    apellidos: { type: String, required: true },
    edad: { type: Number, required: true },
    rol: { type: String, required: true, lowercase: true, },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    contraseña: {
        required: true,
        type: String,
        minlength: 8
    },

})
module.exports = mongoose.model('Usario', EsquemaPersona)
