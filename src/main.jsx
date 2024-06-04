import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import WebPaths from './Routes/WebPaths'
import AuthContext from './AllContextes/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={WebPaths}></RouterProvider>
    </AuthContext>
  </React.StrictMode>,
)
