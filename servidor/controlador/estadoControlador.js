const modeloEstado=require("../modelo/estado");

router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new modeloEstado({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idestado: req.body.idestado
    })
    nuevousuario.save(function(err){
        if(!err){
            res.send('Estado agregado correctamente')
        }else{
            res.send(err)
        }
    })
})


//Obtener todos los usuarios
router.get('/obtenerusuarios', (req, res) =>{
    modeloEstado.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//Obtener data de usuario
router.post('/obtenerdatausuario', (req, res) =>{
    modeloEstado.find({idestado:req.body.idestado}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//actualizar usuario
router.post('/actualizausuario', (req, res) => {
    
    modeloEstado.findOneAndUpdate({idestado:req.body.idestado}, {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    }, (err) => {
        if(!err){
            res.send('Estado actualizado correctamente')
        }else{
            res.send(err)
        }
    })
})

//Borrar usuario
router.post('/borrarusuario', (req, res) => {
    
    modeloEstado.findOneAndDelete({idestado:req.body.idestado}, (err) => {
        if(!err){
            res.send('Estado borrado correctamente')
        }else{
            res.send(err)
        }
    })
})
