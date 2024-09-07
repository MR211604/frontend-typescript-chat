import { createContext, useReducer } from "react";
import { ChatReducer } from "./ChatReducer";
import { ChatContextType } from "../../types/chat";

export const ChatContext = createContext<ChatContextType | null>(null);

const initialState = {
  uid: '',
  activeChat: null,
  users: [],
  messages: []
}

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {

  const [chatState, dispatch] = useReducer(ChatReducer, initialState);

  return (
    <ChatContext.Provider value={
      {
        chatState,
        dispatch
      }
    }>
      {children}
    </ChatContext.Provider>
  )
}