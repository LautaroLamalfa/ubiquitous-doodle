import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes } from './routes'
import { CartUser} from '././context/cartContext'

ReactDOM.render(
  <React.StrictMode>
  <CartUser>
    <Routes />
  </CartUser>
  </React.StrictMode>,
  document.getElementById('root')
);


