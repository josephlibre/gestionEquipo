import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'

function AgregarMarca(){
    const navegar = useNavigate()
    //Hooks
    const[nombre, setNombre]=useState('')
    const[estado, setEstado]=useState('')
   
    

    function agregarMarca(){
        var marcas = {
            nombre: nombre,
            estado: estado,
            idmarca: uniquid()
        }
        console.log(marcas)

        axios.post('/api/marca/agregarmarca', marcas)
        .then(res => {
            //alert(res.data)
            Swal.fire('Felicidades', 'El registro se creó con éxito')
            navegar('/listarmarca')
        })
        .then(err => {console.log(err)})
    }



    return(
        <div className="container">
            <div className="row">
                     <h2 className="mt-4">Crear una nuevo Marca del Equipo</h2>               
            </div> 

             <div className="row">
                <div className="col-sm-6 offset-3">
                     <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Marca del Equipo</label>
                        <input type="text" className="form-control" placeholder="Hp, Dell, Cisco.." value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="tipo" className="form-label">Marca</label>
                        <input type="text" className="form-control" placeholder="Activo o Inactivo"  value={estado} onChange={(e) => {setEstado(e.target.value)}}></input>
                     </div>

                   
                     <button onClick={agregarMarca} className="btn btn-success">Guardar Marca</button>
                </div>
            </div>          
        </div>
    )
}

export default AgregarMarca