import { useContext } from "react"
import { ChatContext } from "../context/chat/ChatContext"
import { types } from "../types/reducerTypes/types"
import { ChatContextType } from "../types/chat"
import { Users } from "../types/user"

interface Props {
  user: Users
}

export default function SidebarChatitem({ user }: Props) {

  const { chatState, dispatch } = useContext(ChatContext) as ChatContextType

  const onClick = () => {
    dispatch({
      type: types.activarChat,
      payload: user._id
    })
  }

  return (
    <>
      {/* <!-- conversación activa inicio --> */}
      <div className={`chat_list ${(user._id === chatState.activeChat) && 'active_chat'} `} onClick={onClick}>
        <div className="chat_people">
          <div className="chat_img">
            <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
          </div>
          <div className="chat_ib">
            <h5>{user.name}</h5>
            {
              (user.online) ?
                <span className="text-success">Online</span> :
                <span className="text-danger">Offline</span>
            }
          </div>
        </div>
      </div>
      {/* <!-- conversación activa Fin --> */}
    </>
  )
}
