import axios from 'axios'
import React, {useEffect, useState} from 'react'
import InventarioIndividual from '../inventario/InventarioIndividual'


function ListaInventario(){

    const[datainventarios, setdatatainventario]=useState([])

    useEffect(() => {
        axios.get('api/inventario/obtenerinventarios').then(res => {
            console.log(res.data)  
            setdatatainventario(res.data)          
        }).catch(err => {
            console.log(err)
        })
      
    }, [])

    //Mapear listadeusuario en objeto marca
    const listainventarios = datainventarios.map(inventario => {
        return(
            <div>
                <InventarioIndividual inventario={inventario}/>
            </div>
        )
    })


    return(
        <div>
            <h2>Lista de Inventario</h2>
            {listainventarios}
        </div>
    )
}

export default ListaInventario