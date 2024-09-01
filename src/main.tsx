import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'
import ChatPage from './pages/ChatPage'
import AuthRouter from './routers/AuthRouter'
import { AuthProvider } from './auth/AuthProvider'
import AppRouter from './routers/AppRouter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ChatPage />,
    errorElement: <div> <h2>404</h2> La pagina no existe</div>
  },
  {
    path: '/auth/*',
    element: <AuthRouter />,    
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
      {/* <RouterProvider router={router} /> */}
    </AuthProvider>
  </React.StrictMode>,
)
