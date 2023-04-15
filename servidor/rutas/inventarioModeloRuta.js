const express = require('express')
const router = express.Router()

const mongo=require("mongoose");




const tipoSchema=mongo.Schema(
{
    
    serial:{
        type: String,
        unique:true,
        required: true,
    },
    modelo:{
        type: String,
        unique:true,
        required: true,

    },

    descrip:{
        type: String,
        required: false,
       },


    fotoEquipo:{
    type: String,
    required: true,
    },

       
    color:{
    type: String,
    required: false,
    },

    fechaCompra:{
    type: Date,
    required: true,
    },

    precio:{
    type: Number,
    required: true,
    },

    usuarioCargo:{
        type: String,
    
    required: true,
    },

    marca:{
        type: String,
 
    required: true,
    },

    estadoEquipo:{
        type: String,
    
    required: true,
    },

    tipoEquipo:{
        type: String,
    
    required: true,
    },

    idinventario:{
        type: String,
    }

});


const modeloInventario = mongo.model("inventario",tipoSchema);


//Agregar inventario
router.post('/agregarinventario', (req, res) => {

    const nuevoestado = new modeloInventario({
               
        serial: req.body.serial,

        modelo: req.body.modelo,
                
        descrip: req.body.descrip,
                
        fotoEquipo: req.body.fotoEquipo,
                
        color: req.body.color,
                
        fechaCompra: req.body.fechaCompra,
                
        precio: req.body.precio,
                
        usuarioCargo: req.body.usuarioCargo,
                
        marca: req.body.marca,
                
        estadoEquipo: req.body.estadoEquipo,
                
        tipoEquipo: req.body.tipoEquipo,
           
        idinventario: req.body.idinventario
    })
    nuevoestado.save(function(err){
        if(!err){
            res.send('Registro agregado correctamente')
        }else{
            res.send(err)
        }
    })
})


//Obtener todos los usuarios
router.get('/obtenerinventarios', (req, res) =>{
    modeloInventario.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//Obtener data de usuario
router.post('/obtenerdatainventario', (req, res) =>{
    modeloInventario.find({idinventario:req.body.idinventario}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//actualizar usuario
router.post('/actualizainventario', (req, res) => {
    
    modeloInventario.findOneAndUpdate({idinventario:req.body.idinventario}, {
       
        serial: req.body.serial,

        modelo: req.body.modelo,
                
        descrip: req.body.descrip,
                
        fotoEquipo: req.body.fotoEquipo,
                
        color: req.body.color,
                
        fechaCompra: req.body.fechaCompra,
                
        precio: req.body.precio,
                
        usuarioCargo: req.body.usuarioCargo,
                
        marca: req.body.marca,
                
        estadoEquipo: req.body.estadoEquipo,
                
        tipoEquipo: req.body.tipoEquipo,
           
        idinventario: req.body.idinventario

       
    }, (err) => {
        if(!err){
            res.send('Registro actualizado correctamente')
        }else{
            res.send(err)
        }
    })
})

//Borrar usuario
router.post('/borrarinventario', (req, res) => {
    
    modeloInventario.findOneAndDelete({idinventario:req.body.idinventario}, (err) => {
        if(!err){
            res.send('Registro borrado correctamente')
        }else{
            res.send(err)
        }
    })
})

module.exports = router
