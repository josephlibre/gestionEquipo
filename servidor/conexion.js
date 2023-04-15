const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/crud');

mongoose.connect('mongodb+srv://admin:nwqVYCL0WZNX59v4@cluster0.qihhlsg.mongodb.net/crud?retryWrites=true&w=majority');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conexión correcta a MongoDB')})
objetobd.on('error', ()=>{console.log('Error en la conexión a MongoDB')})

module.exports = mongoose