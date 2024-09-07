import { Users } from "./user"
import * as io from 'socket.io-client';

interface ChatState {
  uid: string,
  activeChat: any,
  users: Users[],
  messages: any[]
}

export type ChatContextType = {
  chatState: ChatState,
  dispatch: any
}

export type SocketContextType = {
  socket: io.Socket | undefined,
  online: boolean
}