const express = require('express')
const app = express()


const dotenv = require('dotenv');

//Importar conexión mongoDB
const archivoBD = require('./conexion')

dotenv.config();

//Importación del archivo de rutas y modelos

//base de los otros
const rutausuario = require('./rutas/usuario')

const rutaestado = require('./rutas/estadoModeloRuta')
const rutatipo = require('./rutas/tipoModeloRuta')
const rutamarca = require('./rutas/marcaModeloRuta')
const rutainventario = require('./rutas/inventarioModeloRuta')



//Importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))



//plantilla para el resto
app.use('/api/usuario', rutausuario)
app.use('/api/estado', rutaestado)
app.use('/api/tipo', rutatipo)
app.use('/api/marca', rutamarca)
app.use('/api/inventario', rutainventario)




console.log(process.env.HOLA);


app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js. Corriendo...')
})

const PORT = process.env.PORT || 5000;
//Configurar server básico
app.listen(PORT, function(){
    console.log(`El servidor NODE está corriendo correctamente en el puerto ${PORT}`)
})