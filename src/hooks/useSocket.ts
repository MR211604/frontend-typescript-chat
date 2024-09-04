import { useCallback, useEffect, useState } from 'react';
import * as io from 'socket.io-client';

interface returnType {
  socket: io.Socket | undefined;
  online: boolean;
  conectarSocket: () => void;
  desconectarSocket: () => void;
}

export const useSocket = (serverPath: string): returnType => {

  const [online, setOnline] = useState(false);

  const [socket, setSocket] = useState<io.Socket>();

  const conectarSocket = useCallback(() => {
    const socketTemp = io.connect(serverPath, {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true,
      query: {
        'x-token': localStorage.getItem('token') || ''
      }
    })
    setSocket(socketTemp)
  }, [serverPath])

  const desconectarSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket])


  useEffect(() => {
    setOnline(socket?.connected || false);
  }, [socket])

  useEffect(() => {
    socket?.on('connect', () => setOnline(true));
  }, [socket])

  useEffect(() => {
    socket?.on('disconnect', () => setOnline(false));
  }, [socket])

  return {
    socket,
    online,
    conectarSocket,
    desconectarSocket
  }
}