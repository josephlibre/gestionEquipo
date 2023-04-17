import axios from 'axios'
import React, {useEffect, useState} from 'react'
import EstadoIndividual from '../estado/EstadoIndividual'
function ListaEstados(){

    const[dataestados, setdataestado]=useState([])

    useEffect(() => {
        axios.get('https://gestionequipo.onrender.com/api/estado/obtenerestados').then(res => {
            console.log(res.data)  
            setdataestado(res.data)          
        }).catch(err => {
            console.log(err)
        })
      
    }, [])

    //Mapear listadeusuario en objeto estado
    const listaestados = dataestados.map(estado => {
        return(
            <div>
                <EstadoIndividual estado={estado}/>
            </div>
        )
    })


    return(
        <div>
            <h2>Lista de estados</h2>
            {listaestados}
        </div>
    )
}

export default ListaEstados