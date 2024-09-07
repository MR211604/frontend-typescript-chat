import { useContext } from "react"
import SidebarChatitem from "./SidebarChatitem"
import { ChatContext } from "../context/chat/ChatContext"
import { AuthContext } from "../auth/AuthProvider"
import { AuthContextType } from "../types/auth"
import { ChatContextType } from "../types/chat"

export const Sidebar = () => {

  const { chatState } = useContext(ChatContext) as ChatContextType
  const { Auth } = useContext(AuthContext) as AuthContextType

  return (
    <>
      {/* <!-- Sidebar inicio --> */}
      <div className="inbox_chat">

        {
          chatState.users
            .filter(chat => chat._id !== Auth._id)
            .map(chat => (
              <SidebarChatitem key={chat._id} user={chat} />
            ))
        }

        {/* <!-- Espacio extra para scroll --> */}
        <div className="extra_space"></div>


      </div>
      {/* <!-- Sidebar Fin --> */}
    </>
  )
}
