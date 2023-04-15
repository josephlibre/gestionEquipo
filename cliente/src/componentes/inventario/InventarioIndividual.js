import React, {useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

function InventarioIndividual({inventario}){

    const navegar = useNavigate()

    //Para animación de scroll al bajar
    useEffect(() => {
       AOS.init()
    }, [])


    //Función para borrar inventario
    function borrarinventario(idinventario){
        axios.post('/api/inventario/borrarinventario', {idinventario: idinventario}).then(res => {
            console.log(res.data) 
            alert(res.data)  
            navegar(0)
        }).catch(err => {
            console.log(err)
        })
    }


    return(
        <div className="container">
            <div className="row">

                <div className="col-sm-6 offset-3" data-aos="flip-right">
                    <ul className="list-group">
                       
                        <li className="list-group-item">{inventario.serial}</li>
                        <li className="list-group-item">{inventario.modelo}</li>
                        <li className="list-group-item">{inventario.descrip}</li>
                        <li className="list-group-item"><img src={inventario.fotoEquipo} alt='Foto Equipo' height="100" width="100"></img></li>
                        <li className="list-group-item">{inventario.color}</li>
                        <li className="list-group-item">{inventario.fechaCompra}</li>
                        <li className="list-group-item">{inventario.precio}</li>
                        <li className="list-group-item">{inventario.usuarioCargo}</li>
                        <li className="list-group-item">{inventario.marca}</li>
                        <li className="list-group-item">{inventario.estadoEquipo}</li>
                        <li className="list-group-item">{inventario.tipoEquipo}</li>
                                            


                       
                    </ul>

                    <Link to={`/editarinventario/${inventario.idinventario}`}><li className="btn btn-success">Editar</li></Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={()=>{borrarinventario(inventario.idinventario)}}>Borrar</button>
                    <hr className="mt-4"></hr>
                </div>                
            </div>
            
        </div>
    )
}

export default InventarioIndividual