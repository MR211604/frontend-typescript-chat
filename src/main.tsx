import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AuthProvider } from './auth/AuthProvider'
import AppRouter from './routers/AppRouter'
import { SocketProvider } from './context/SocketContext'
import { ChatProvider } from './context/chat/ChatContext'


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          <AppRouter />
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  // </React.StrictMode>,
)
