import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router'

function EditarMarca(){

    const params = useParams()

    //Hooks    
    const[nombre, setNombre]=useState('')
    const[estado, setEstado]=useState('')
   

    //Para volver atrás al index
    const navegar = useNavigate()
    

    useEffect(() => {
       axios.post('/api/marca/obtenerdatamarca', {idmarca: params.idmarca}).then(res => {
           console.log(res.data[0]) 
           const datamarca = res.data[0]
           setNombre(datamarca.nombre)
           setEstado(datamarca.estado)
           
       })
    }, [params.idmarca])

    //Función que actualiza
    function editarMarca(){
        //Nuevo objeto para actualizar el usuario
        const actualizamarca = {
            nombre: nombre,
            estado: estado,
            idmarca: params.idmarca
        }


        //Hacer la petición usando axios
        axios.post('/api/marca/actualizamarca', actualizamarca)
        .then(res => {
            console.log(res.data)
            alert(res.data)
            navegar('/listarmarca')
        })
        .then(err => {console.log(err)})
    }

    return(
        <div className="container">
            <div className="row">
                     <h2 className="mt-4">Editar marca</h2>     
                  
            </div> 

             <div className="row">
                <div className="col-sm-6 offset-3">
                     <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre de la marca del Equipo</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="email" className="form-label">Estado</label>
                        <input type="email" className="form-control" value={estado} onChange={(e) => {setEstado(e.target.value)}}></input>
                     </div>

                    

                     <button onClick={editarMarca} className="btn btn-success">Editar Marca</button>
                </div>
            </div>          
        </div>
    )
}

export default EditarMarca