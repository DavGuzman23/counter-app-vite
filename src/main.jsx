// .jsx significa que hay codigo de react js+HTML
import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
// import { HelloWorldApp } from './HelloWorldApp'
import FirstApp from './FirstApp'
import './style.css'
import { CounterApp } from './CounterApp'


ReactDOM,createRoot( document.getElementById( 'root' ) ).render(
    <React.StrictMode>
        {/* <CounterApp  value={5}/> */}
        <FirstApp></FirstApp>
    </React.StrictMode>
)

