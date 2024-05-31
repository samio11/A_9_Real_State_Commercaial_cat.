import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import WebPaths from './Routes/WebPaths'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={WebPaths}></RouterProvider>
  </React.StrictMode>,
)
