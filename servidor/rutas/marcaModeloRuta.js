const express = require('express')
const router = express.Router()

const mongo=require("mongoose");




const tipoSchema=mongo.Schema(
{
    nombre:{
        type: String,
       
    },
    estado:{
        type: String,
       

    },

    fechaCrea:{
        type: Date,
        default: Date.now()
       },


 fechaAct:{
        type: Date,
        default: Date.now()
       },

    idmarca:{
        type: String,
      

    },


});


const modeloMarca = mongo.model("marca",tipoSchema);


//Agregar usuario
router.post('/agregarmarca', (req, res) => {
    const nuevoestado = new modeloMarca({
        nombre: req.body.nombre,
        estado: req.body.estado,
       
        idmarca: req.body.idmarca
    })
    nuevoestado.save(function(err){
        if(!err){
            res.send('Marca agregado correctamente')
        }else{
            res.send(err)
        }
    })
})


//Obtener todos los usuarios
router.get('/obtenermarcas', (req, res) =>{
    modeloMarca.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//Obtener data de usuario
router.post('/obtenerdatamarca', (req, res) =>{
    modeloMarca.find({idmarca:req.body.idmarca}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//actualizar usuario
router.post('/actualizamarca', (req, res) => {
    
    modeloMarca.findOneAndUpdate({idmarca:req.body.idmarca}, {
        nombre: req.body.nombre,
        estado: req.body.estado,
       
       
    }, (err) => {
        if(!err){
            res.send('Marca actualizado correctamente')
        }else{
            res.send(err)
        }
    })
})

//Borrar usuario
router.post('/borrarmarca', (req, res) => {
    
    modeloMarca.findOneAndDelete({idmarca:req.body.idmarca}, (err) => {
        if(!err){
            res.send('Marca borrado correctamente')
        }else{
            res.send(err)
        }
    })
})

module.exports = router
