import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router'

function EditarEstado(){

    const params = useParams()

    //Hooks    
    const[nombre, setNombre]=useState('')
    const[estado, setEstado]=useState('')
   

    //Para volver atrás al index
    const navegar = useNavigate()
    

    useEffect(() => {
       axios.post('/api/estado/obtenerdataestado', {idestado: params.idestado}).then(res => {
           console.log(res.data[0]) 
           const datausuario = res.data[0]
           setNombre(datausuario.nombre)
           setEstado(datausuario.estado)
           
       })
    }, [params.idestado])

    //Función que actualiza
    function editarEstado(){
        //Nuevo objeto para actualizar el usuario
        const actualizarestado = {
            nombre: nombre,
            estado: estado,
            idestado: params.idestado
        }


        //Hacer la petición usando axios
        axios.post('/api/estado/actualizaestado', actualizarestado)
        .then(res => {
            console.log(res.data)
            alert(res.data)
            navegar('/listarestado')
        })
        .then(err => {console.log(err)})
    }

    return(
        <div className="container">
            <div className="row">
                     <h2 className="mt-4">Editar estado</h2>     
                  
            </div> 

             <div className="row">
                <div className="col-sm-6 offset-3">
                     <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="email" className="form-label">estado</label>
                        <input type="email" className="form-control" value={estado} onChange={(e) => {setEstado(e.target.value)}}></input>
                     </div>

                    

                     <button onClick={editarEstado} className="btn btn-success">Editar Estado</button>
                </div>
            </div>          
        </div>
    )
}

export default EditarEstado