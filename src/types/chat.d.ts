import { Users } from "./user"
import * as io from 'socket.io-client';

interface Message {
  from: string,
  to: string,
  message: string,
  createdAt: string,
  updatedAt?: string,
  _id: string
}

interface ChatState {
  uid: string,
  activeChat: any,
  users: Users[],
  messages: Message[]
}

export type ChatContextType = {
  chatState: ChatState,
  dispatch: any
}

export type SocketContextType = {
  socket: io.Socket | undefined,
  online: boolean
}