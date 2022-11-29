import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Roteador from './roteador';
import RouteIndex from './routes/routeIndex';



function App(){
    return(
        <BrowserRouter>
            {/* <BarraNavegacao tema="purple lighten-4" botoes={['Produtos', 'Servicos', 'Clientes', 'Cadastros']} /> */}
            {/* <Roteador /> */}
            <RouteIndex />  
        </BrowserRouter>

    )
}

export default App;