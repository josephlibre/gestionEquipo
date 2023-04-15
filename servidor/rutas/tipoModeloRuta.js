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

    idtipo:{
        type: String,
      

    },


});


const modeloTipo = mongo.model("tipo",tipoSchema);


//Agregar tipo
router.post('/agregartipo', (req, res) => {
    const nuevoestado = new modeloTipo({
        nombre: req.body.nombre,
        estado: req.body.estado,
       
        idtipo: req.body.idtipo
    })
    nuevoestado.save(function(err){
        if(!err){
            res.send('Tipo agregado correctamente')
        }else{
            res.send(err)
        }
    })
})


//Obtener todos los tipos
router.get('/obtenertipos', (req, res) =>{
    modeloTipo.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//Obtener data de tipo
router.post('/obtenerdatatipo', (req, res) =>{
    modeloTipo.find({idtipo:req.body.idtipo}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//actualizar tipo
router.post('/actualizatipo', (req, res) => {
    
    modeloTipo.findOneAndUpdate({idtipo:req.body.idtipo}, {
        nombre: req.body.nombre,
        estado: req.body.estado,
       
       
    }, (err) => {
        if(!err){
            res.send('Tipo actualizado correctamente')
        }else{
            res.send(err)
        }
    })
})

//Borrar tipo
router.post('/borrartipo', (req, res) => {
    
    modeloTipo.findOneAndDelete({idtipo:req.body.idtipo}, (err) => {
        if(!err){
            res.send('Tipo borrado correctamente')
        }else{
            res.send(err)
        }
    })
})

module.exports = router

