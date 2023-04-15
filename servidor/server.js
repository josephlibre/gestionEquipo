const express = require('express')
const app = express()

//Importar conexión mongoDB
const archivoBD = require('./conexion')

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





app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js. Corriendo...')
})


//Configurar server básico
app.listen(5000, function(){
    console.log('El servidor NODE está corriendo correctamente')
})