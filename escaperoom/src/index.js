import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client'
import './index.css'

const rootElement = document.getElementById('root'); //tomamos el elemento root del id en index.html
const root = createRoot(rootElement) //cargamos eso en una variable root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
