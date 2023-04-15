import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router'

function EditarUsuario(){

    const params = useParams()

    //Hooks    
    const[nombre, setNombre]=useState('')
    const[email, setEmail]=useState('')
    const[estado, setEstado]=useState('')

    //Para volver atrás al index
    const navegar = useNavigate()
    

    useEffect(() => {
       axios.post('/api/usuario/obtenerdatausuario', {idusuario: params.idusuario}).then(res => {
           console.log(res.data[0]) 
           const datausuario = res.data[0]
           setNombre(datausuario.nombre)
           setEmail(datausuario.email)
           setEstado(datausuario.estado)    
       })
    }, [params.idusuario])

    //Función que actualiza
    function editarUsuario(){
        //Nuevo objeto para actualizar el usuario
        const actualizarusuario = {
            nombre: nombre,
            email: email,
            estado: estado,
            idusuario: params.idusuario
        }


        //Hacer la petición usando axios
        axios.post('/api/usuario/actualizausuario', actualizarusuario)
        .then(res => {
            console.log(res.data)
            alert(res.data)
            navegar('/listarusuario')
        })
        .then(err => {console.log(err)})
    }

    return(
        <div className="container">
            <div className="row">
                     <h2 className="mt-4">Editar usuario</h2>     
                  
            </div> 

             <div className="row">
                <div className="col-sm-6 offset-3">
                     <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" placeholder="Nombre del Usuario" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Nombre del Correo Electronico"  value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="estado" className="form-label">Estado</label>
                        <input type="text" className="form-control" placeholder="Usuario Activo o Inactivo" value={estado} onChange={(e) => {setEstado(e.target.value)}}></input>
                     </div>

                     <button onClick={editarUsuario} className="btn btn-success">Editar Usuario</button>
                </div>
            </div>          
        </div>
    )
}

export default EditarUsuario