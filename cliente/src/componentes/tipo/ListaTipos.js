import axios from 'axios'
import React, {useEffect, useState} from 'react'
import EstadoTipos from '../tipo/TipoIndividual'

function ListaTipos(){

    const[datatipos, setdatatipo]=useState([])

    useEffect(() => {
        axios.get('https://gestionequipo.onrender.com/api/tipo/obtenertipos').then(res => {
            console.log(res.data)  
            setdatatipo(res.data)          
        }).catch(err => {
            console.log(err)
        })
      
    }, [])

    //Mapear lista de tipos en objeto tipo
    const listatipos = datatipos.map(tipo => {
        return(
            <div>
                <EstadoTipos tipo={tipo}/>
            </div>
        )
    })


    return(
        <div>
            <h2>Lista de tipos</h2>
            {listatipos}
        </div>
    )
}

export default ListaTipos