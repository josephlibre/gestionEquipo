import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router'

function EditarMarca(){

    const params = useParams()

    //Hooks    
    const[serial, setSerial]=useState('')
const[modelo, setModelo]=useState('')
    const[descrip, setDescrip]=useState('')
    const[fotoEquipo, setFotoEquipo]=useState('')
    const[color, setColor]=useState('')
    const[fechaCompra, setFechaCompra]=useState('')
    const[precio, setPrecio]=useState('')
    const[usuarioCargo, setUsuarioCargo]=useState('')
    const[marca, setMarca]=useState('')
    const[estadoEquipo, setEquipo]=useState('')
    const[tipoEquipo, setTipo]=useState('')
   

    //Para volver atrás al index
    const navegar = useNavigate()
    

    useEffect(() => {
       axios.post('/api/inventario/obtenerdatainventario', {idinventario: params.idinventario}).then(res => {
           console.log(res.data[0]) 
           const datamarca = res.data[0]
          
           setSerial(datamarca.serial)
          setModelo(datamarca.modelo)
           setDescrip(datamarca.descrip)
           setFotoEquipo(datamarca.fotoEquipo)
           setColor(datamarca.color)
           setFechaCompra(datamarca.fechaCompra)
           setPrecio(datamarca.precio)
           setUsuarioCargo(datamarca.usuarioCargo)
           setMarca(datamarca.marca)
           setEquipo(datamarca.estadoEquipo)
           setTipo(datamarca.tipoEquipo)
           

           
       })
    }, [params.idinventario])

    //Función que actualiza
    function editarInventario(){
        //Nuevo objeto para actualizar el usuario
        const actualizainventario = {

            serial: serial,

            modelo: modelo,
                    
            descrip: descrip,
                    
            fotoEquipo: fotoEquipo,
                    
            color: color,
                    
            fechaCompra: fechaCompra,
                    
            precio: precio,
                    
            usuarioCargo: usuarioCargo,
                    
            marca: marca,
                    
            estadoEquipo: estadoEquipo,
                    
            tipoEquipo: tipoEquipo,

            idinventario: params.idinventario
        }


        //Hacer la petición usando axios
        axios.post('/api/inventario/actualizainventario', actualizainventario)
        .then(res => {
            console.log(res.data)
            alert(res.data)
            navegar('/listarinventario')
        })
        .then(err => {console.log(err)})
    }

    return(
        <div className="container">
            <div className="row">
                     <h2 className="mt-4">Editar Inventario</h2>     
                  
            </div> 

             <div className="row">
                <div className="col-sm-6 offset-3">
                     <div className="mb-3">
                      
                      
                     <div className="mb-3">
                        <label htmlFor="serial" className="form-label">Serial del Equipo</label>
                        <input type="text" className="form-control" placeholder="Numero del Serial del Equipo" value={serial} onChange={(e) => {setSerial(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="modelo" className="form-label">Modelo del Equipo</label>
                        <input type="text" className="form-control" placeholder="Modelo Equipo"  value={modelo} onChange={(e) => {setModelo(e.target.value)}}></input>
                     </div>


                     <div className="mb-3">
                        <label htmlFor="descrip" className="form-label">Descripcion del Equipo</label>
                        <input type="text" className="form-control" placeholder="Una Pequeña Descripcion del Equipo"  value={descrip} onChange={(e) => {setDescrip(e.target.value)}}></input>
                     </div>



                     <div className="mb-3">
                        <label htmlFor="fotoEquipo" className="form-label"> Direccion Web o link de la foto del Equipo</label>
                        <input type="text" className="form-control" placeholder="URL ejemplo https://i.pinimg.com/originals/d6/93/20/d69320c6c75da9491c38bff2048832fd.jpg"  value={fotoEquipo} onChange={(e) => {setFotoEquipo(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="setColor" className="form-label"></label> Color
                        <input type="text" className="form-control" placeholder="Color Principal del Equipo"  value={color} onChange={(e) => {setColor(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="fechaCompra" className="form-label">Fecha</label>
                        <input type="text" className="form-control" placeholder="fecha de la Compra"  value={fechaCompra} onChange={(e) => {setFechaCompra(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="precio" className="form-label">Precio</label>
                        <input type="text" className="form-control" placeholder="Precio o Valor del Equipo"  value={precio} onChange={(e) => {setPrecio(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="usuarioCargo" className="form-label">Usuario a Cargo</label>
                        <input type="text" className="form-control" placeholder="Usuario a Cargo del Equipo"  value={usuarioCargo} onChange={(e) => {setUsuarioCargo(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="marca" className="form-label">Marca del Equipo</label>
                        <input type="text" className="form-control" placeholder="Marca Equipo"  value={marca} onChange={(e) => {setMarca(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="estadoEquipo" className="form-label">Estado  del Equipo</label>
                        <input type="text" className="form-control" placeholder="El estado del Equipo"  value={estadoEquipo} onChange={(e) => {setEquipo(e.target.value)}}></input>
                     </div>

                     <div className="mb-3">
                        <label htmlFor="tipoEquipo" className="form-label">Estado  del Equipo</label>
                        <input type="text" className="form-control" placeholder="El estado del Equipo"  value={tipoEquipo} onChange={(e) => {setTipo(e.target.value)}}></input>
                     </div>

                    </div>

                     <button onClick={editarInventario} className="btn btn-success">Editar Inventario</button>
                </div>
            </div>          
        </div>
    )
}

export default EditarMarca