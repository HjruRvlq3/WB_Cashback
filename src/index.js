import React from "react"
import * as ReactDOMClient from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'
import App from './App'

const root = ReactDOMClient.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>    
)
