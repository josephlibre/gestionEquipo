import axios from 'axios'
import React, {useEffect, useState} from 'react'
import MarcaIndividual from '../marca/MarcaIndividual'
function ListaMarca(){

    const[datamarcas, setdatamarca]=useState([])

    useEffect(() => {
        axios.get('api/marca/obtenermarcas').then(res => {
            console.log(res.data)  
            setdatamarca(res.data)          
        }).catch(err => {
            console.log(err)
        })
      
    }, [])

    //Mapear listadeusuario en objeto marca
    const listamarcas = datamarcas.map(marca => {
        return(
            <div>
                <MarcaIndividual marca={marca}/>
            </div>
        )
    })


    return(
        <div>
            <h2>Lista de Marcas</h2>
            {listamarcas}
        </div>
    )
}

export default ListaMarca