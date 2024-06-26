import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import myCreateRouter from './Pages/Route/Route'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreateRouter}></RouterProvider>
  </React.StrictMode>,
)
