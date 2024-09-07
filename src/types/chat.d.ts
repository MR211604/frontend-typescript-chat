import { Users } from "./user"

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