import { createContext, useContext, useEffect } from 'react';
import { useSocket } from '../hooks/useSocket';
import { AuthContext } from '../auth/AuthProvider';
import { ChatContext } from './chat/ChatContext';
import { types } from '../types/reducerTypes/types';
import { AuthContextType } from '../types/auth';
import { ChatContextType, SocketContextType } from '../types/chat';


export const SocketContext = createContext<SocketContextType>({} as SocketContextType);

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const { socket, online, conectarSocket, desconectarSocket } = useSocket('http://localhost:3000');
  const { Auth } = useContext(AuthContext) as AuthContextType
  const { dispatch } = useContext(ChatContext) as ChatContextType

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

  useEffect(() => {
    socket?.on('lista-usuarios', (usuarios) => {
      dispatch({
        type: types.usuariosCargados,
        payload: usuarios
      })
    })
  }, [socket, dispatch])

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  )
}