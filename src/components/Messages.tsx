import { useContext } from "react";
import IncomingMessage from "./IncomingMessage";
import OutgoingMessage from "./OutgoingMessage";
import SendMessage from "./SendMessage";
import { ChatContext } from "../context/chat/ChatContext";
import { AuthContext } from "../auth/AuthProvider";

export default function Messages() {

  const { chatState } = useContext(ChatContext)
  const { Auth } = useContext(AuthContext)

  return (
    <>
      <div className="mesgs">
        <div className="msg_history">
          {
            chatState.messages.map(msg => (
              (msg.from !== Auth._id)
                ? <IncomingMessage key={msg._id} message={msg} />
                : <OutgoingMessage key={msg._id} message={msg} />
            ))
          }
        </div>
        <SendMessage />
      </div>
    </>
  )
}
