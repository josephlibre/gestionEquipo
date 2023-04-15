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
   
    

    function agregarTipo(){
        var tipos = {
            nombre: nombre,
            estado: estado,
            idtipo: uniquid()
        }
        console.log(tipos)

        axios.post('/api/tipo/agregartipo', tipos)
        .then(res => {
            //alert(res.data)
            Swal.fire('Felicidades', 'El registro se creó con éxito')
            navegar('/listartipo')
        })
        .then(err => {console.log(err)})
    }



    return(
        <div className="container">
            <div className="row">
                     <h2 className="mt-4">Crear un nuevo Tipo</h2>               
            </div> 

             <div className="row">
                <div className="col-sm-6 offset-3">
                     <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" placeholder="Movil o Computo" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="tipo" className="form-label">Estado</label>
                        <input type="text" className="form-control" placeholder="Activo o Inactivo" bvalue={estado} onChange={(e) => {setTipo(e.target.value)}}></input>
                     </div>

                   
                     <button onClick={agregarTipo} className="btn btn-success">Guardar Tipo</button>
                </div>
            </div>          
        </div>
    )
}

export default AgregarEstado