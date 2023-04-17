import React, {useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

function EstadoIndividual({estado}){

    const navegar = useNavigate()

    //Para animación de scroll al bajar
    useEffect(() => {
       AOS.init()
    }, [])


    //Función para borrar estado
    function borrarestado(idestado){
        axios.post('https://gestionequipo.onrender.com/api/estado/borrarestado', {idestado: idestado}).then(res => {
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
                       
                        <li className="list-group-item">{estado.nombre}</li>
                        <li className="list-group-item">{estado.estado}</li>
                       
                    </ul>

                    <Link to={`/editarestado/${estado.idestado}`}><li className="btn btn-success">Editar</li></Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={()=>{borrarestado(estado.idestado)}}>Borrar</button>
                    <hr className="mt-4"></hr>
                </div>                
            </div>
            
        </div>
    )
}

export default EstadoIndividual