const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
const objetobd = mongoose.connection

//console.log(process.env.MONGO_URI);



objetobd.on('connected', ()=>{console.log('Conexión correcta a MongoDB')})
objetobd.on('error', ()=>{console.log('Error en la conexión a MongoDB')})

module.exports = mongoose