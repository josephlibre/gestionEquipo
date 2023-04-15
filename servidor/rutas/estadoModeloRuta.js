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

    idestado:{
        type: String,
      

    },


});


const modeloEstado = mongo.model("estado",tipoSchema);


//Agregar usuario
router.post('/agregarestado', (req, res) => {
    const nuevoestado = new modeloEstado({
        nombre: req.body.nombre,
        estado: req.body.estado,
       
        idestado: req.body.idestado
    })
    nuevoestado.save(function(err){
        if(!err){
            res.send('Estado agregado correctamente')
        }else{
            res.send(err)
        }
    })
})


//Obtener todos los usuarios
router.get('/obtenerestados', (req, res) =>{
    modeloEstado.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//Obtener data de usuario
router.post('/obtenerdataestado', (req, res) =>{
    modeloEstado.find({idestado:req.body.idestado}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//actualizar usuario
router.post('/actualizaestado', (req, res) => {
    
    modeloEstado.findOneAndUpdate({idestado:req.body.idestado}, {
        nombre: req.body.nombre,
        estado: req.body.estado,
       
       
    }, (err) => {
        if(!err){
            res.send('Estado actualizado correctamente')
        }else{
            res.send(err)
        }
    })
})

//Borrar usuario
router.post('/borrarestado', (req, res) => {
    
    modeloEstado.findOneAndDelete({idestado:req.body.idestado}, (err) => {
        if(!err){
            res.send('Estado borrado correctamente')
        }else{
            res.send(err)
        }
    })
})

module.exports = router
