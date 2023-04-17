import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'

function AgregarEstado(){
    const navegar = useNavigate()
    //Hooks
    const[nombre, setNombre]=useState('')
    const[estado, setTipo]=useState('')
   
    

    function agregarEstado(){
        var estados = {
            nombre: nombre,
            estado: estado,
            idestado: uniquid()
        }
        console.log(estados)

        axios.post('https://gestionequipo.onrender.com/api/estado/agregarestado', estados)
        .then(res => {
            //alert(res.data)
            Swal.fire('Felicidades', 'El registro se creó con éxito')
            navegar('/listarestado')
        })
        .then(err => {console.log(err)})
    }



    return(
        <div className="container">
            <div className="row">
                     <h2 className="mt-4">Crear un nuevo Estado del Equipo</h2>               
            </div> 

             <div className="row">
                <div className="col-sm-6 offset-3">
                     <div className="mb-3">
                        <label htmlFor="nombre" required className="form-label">Nombre</label>
                        <input type="text" className="form-control" placeholder="En uso, en bodega, depreciado" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="tipo" className="form-label">Estado</label>
                        <input type="text" className="form-control" placeholder="Activo o Inactivo"  value={estado} onChange={(e) => {setTipo(e.target.value)}}></input>
                     </div>

                   
                     <button onClick={agregarEstado} className="btn btn-success">Guardar Estado</button>
                </div>
            </div>          
        </div>
    )
}

export default AgregarEstado