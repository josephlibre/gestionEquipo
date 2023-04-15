import React, {useState} from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'



function AgregarUsuario(){

    const navegar = useNavigate()
    //Hooks
    const[nombre, setNombre]=useState('')
    const[email, setEmail]=useState('')
    const[estado, setEstado]=useState('')
    



    function agregarUsuario(){
        var usuario = {
            nombre: nombre,
            email: email,
            estado: estado,
            idusuario: uniquid()
        }
        console.log(usuario)

        axios.post('/api/usuario/agregarusuario', usuario)
        .then(res => {
            alert(res.data)
            Swal.fire('Felicidades', 'El usuario se creó con éxito')
            navegar('/listarusuario')
        })
        .then(err => {console.log(err)})
    }



    return(
        <div className="container">
            <div className="row">
                     <h2 className="mt-4">Crear un nuevo usuario</h2>               
            </div> 

             <div className="row">
                <div className="col-sm-6 offset-3">
                     <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" placeholder="Nombre del Usuario" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                     </div>



                     <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Correo Electronico del Usuario" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="estado" className="form-label">Estado</label>
                        <input type="text" className="form-control" placeholder="Activo o Inactivo" value={estado} onChange={(e) => {setEstado(e.target.value)}}></input>
                     </div>

                     <button onClick={agregarUsuario} className="btn btn-success">Guardar Usuario</button>
                </div>
            </div>          
        </div>
    )
}

export default AgregarUsuario