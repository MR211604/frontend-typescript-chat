import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AuthProvider } from './auth/AuthProvider'
import AppRouter from './routers/AppRouter'
import { SocketProvider } from './context/SocketContext'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </AuthProvider>
  </React.StrictMode>,
)
