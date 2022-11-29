import React from 'react';
import ReactDOM from 'react-dom';
import Roteador from './componentes/roteador';
import reportWebVitals from './reportWebVitals';
import App from './componentes/app'
import BarraNavegacao from './componentes/barraNavegacao';

ReactDOM.render(
  <React.StrictMode>
    <App/> 
    {/* <Roteador />  */}
   
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
