import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router'

function EditarTipo(){

    const params = useParams()

    //Hooks    
    const[nombre, setNombre]=useState('')
    const[estado, setEstado]=useState('')
   

    //Para volver atrás al index
    const navegar = useNavigate()
    

    useEffect(() => {
       axios.post('/api/tipo/obtenerdatatipo', {idtipo: params.idtipo}).then(res => {
           console.log(res.data[0]) 
           const datatipo = res.data[0]
           setNombre(datatipo.nombre)
           setEstado(datatipo.estado)
           
       })
    }, [params.idtipo])

    //Función que actualiza
    function editarTipo(){
        //Nuevo objeto para actualizar el usuario
        const actualizartipo = {
            nombre: nombre,
            estado: estado,
            idtipo: params.idtipo
        }


        //Hacer la petición usando axios
        axios.post('/api/tipo/actualizatipo', actualizartipo)
        .then(res => {
            console.log(res.data)
            alert(res.data)
            navegar('/listartipo')
        })
        .then(err => {console.log(err)})
    }

    return(
        <div className="container">
            <div className="row">
                     <h2 className="mt-4">Editar tipo</h2>     
                  
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

                    

                     <button onClick={editarTipo} className="btn btn-success">Editar Tipo</button>
                </div>
            </div>          
        </div>
    )
}

export default EditarTipo