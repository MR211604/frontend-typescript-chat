import { createContext, useContext, useEffect } from 'react';
import { useSocket } from '../hooks/useSocket';
import { AuthContext, AuthContextType } from '../auth/AuthProvider';

export const SocketContext = createContext({});

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const { socket, online, conectarSocket, desconectarSocket } = useSocket('http://localhost:3000');
  const { Auth } = useContext(AuthContext) as AuthContextType

  useEffect(() => {
    if (Auth.logged) {
      conectarSocket()
    }
  }, [Auth, conectarSocket])

  useEffect(() => {
    if (!Auth.logged) {
      desconectarSocket()
    }
  }, [Auth, desconectarSocket])

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  )
}