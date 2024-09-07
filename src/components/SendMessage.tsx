import { useContext, useState } from "react"
import { SocketContext } from "../context/SocketContext"
import { AuthContext } from "../auth/AuthProvider"
import { ChatContext } from "../context/chat/ChatContext"


export default function SendMessage() {

  const [message, setMessage] = useState('')
  const { socket } = useContext(SocketContext)
  const { Auth } = useContext(AuthContext)
  const { chatState } = useContext(ChatContext)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (message.trim().length === 0) {
      return
    }
    setMessage('')

    socket?.emit('mensaje-personal', {
      from: Auth._id,
      to: chatState.activeChat,
      message: message
    })
  }

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <div className="type_msg row">
          <div className="input_msg_write col-sm-9">
            <input type="text" className="write_msg" placeholder="Mensaje..." value={message} onChange={onChange} />
          </div>
          <div className="col-sm-3 text-center">
            <button className="msg_send_btn mt-3" type="submit">
              enviar
            </button>
          </div>
        </div>
      </form>

    </>
  )
}
