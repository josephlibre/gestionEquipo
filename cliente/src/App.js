//import logo from './logo.svg';
import './App.css';



import Inicio from '../src/componentes/inicio';

import ListaUsuarios from '../src/componentes/usuario/ListaUsuarios';
import AgregarUsuario from '../src/componentes/usuario/AgregarUsuario';
import EditarUsuario from '../src/componentes/usuario/EditarUsuario';
//estados
import ListaEstados from '../src/componentes/estado/ListaEstados';
import AgregarEstado from '../src/componentes/estado/AgregarEstado';
import EditarEstado from '../src/componentes/estado/EditarEstado';
//tipo
import ListaTipos from '../src/componentes/tipo/ListaTipos';
import AgregarTipo from '../src/componentes/tipo/AgregarTipo';
import EditarTipo from '../src/componentes/tipo/EditarTipo';

import ListaMarcas from '../src/componentes/marca/ListaMarca';
import AgregarMarca from '../src/componentes/marca/AgregarMarca';
import EditarMarca from '../src/componentes/marca/EditarMarca';

import ListaInventario from '../src/componentes/inventario/ListaInventario';
import AgregarInventario from '../src/componentes/inventario/AgregarInventario';
import EditarInventario from '../src/componentes/inventario/EditarInventario';



import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">   
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Inicio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="listarusuario">Listar Usuario</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarusuario">Agregar Usuario</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="agregarestado">Agregar Estado</a>
              </li>                        
              
              <li className="nav-item">
                <a className="nav-link" href="listarestado">Listar Estado</a>
              </li> 

              <li className="nav-item">
                <a className="nav-link" href="agregartipo">Agregar Tipo</a>
              </li>                        
              
              <li className="nav-item">
                <a className="nav-link" href="listartipo">Listar Tipo</a>
                </li> 
                <li className="nav-item">
                <a className="nav-link" href="agregarmarca">Agregar Marca</a>
              </li>                        
              
              <li className="nav-item">
                <a className="nav-link" href="listarmarca">Listar Marca</a>
                </li>

                <li className="nav-item">
                <a className="nav-link" href="agregarinventario">Agregar Inventario</a>
              </li>                        
              
              <li className="nav-item">
                <a className="nav-link" href="listarinventario">Listar Inventario</a>


               
              </li>
            </ul>           
          </div>
        </div>
      </nav>
     
    <BrowserRouter>
        <Routes>

        <Route path='/' element={<Inicio/>} exact></Route>
          
          <Route path='/listarusuario' element={<ListaUsuarios/>} exact></Route>
          <Route path='/agregarusuario' element={<AgregarUsuario/>} exact></Route>
          <Route path='/editarusuario/:idusuario' element={<EditarUsuario/>} exact></Route>


          <Route path='/listarestado' element={<ListaEstados/>} exact></Route>
          <Route path='/agregarestado' element={<AgregarEstado/>} exact></Route>
          <Route path='/editarestado/:idestado' element={<EditarEstado/>} exact></Route>


          <Route path='/listartipo' element={<ListaTipos/>} exact></Route>
          <Route path='/agregartipo' element={<AgregarTipo/>} exact></Route>
          <Route path='/editartipo/:idtipo' element={<EditarTipo/>} exact></Route>

          
          <Route path='/listarmarca' element={<ListaMarcas/>} exact></Route>
          <Route path='/agregarmarca' element={<AgregarMarca/>} exact></Route>
          <Route path='/editarmarca/:idmarca' element={<EditarMarca/>} exact></Route>


          <Route path='/listarinventario' element={<ListaInventario/>} exact></Route>
          <Route path='/agregarinventario' element={<AgregarInventario/>} exact></Route>
          <Route path='/editarinventario/:idinventario' element={<EditarInventario/>} exact></Route>

        </Routes>
    </BrowserRouter>     

    </div>
  );
}

export default App;
