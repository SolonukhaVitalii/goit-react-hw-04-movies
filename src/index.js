import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import Routing from './Routing';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routing />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);