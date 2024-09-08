import { monthHour } from "../helpers/times"
import { Message } from "../types/chat"

interface Props {
  message: Message
}

//TODO: Crear un tipo para la interfaz del mensaje y desestructurar el mensaje, la fecha y la hora
export default function OutgoingMessage({ message }: Props) {


  return (
    <>
      <div className="outgoing_msg">
        <div className="sent_msg">
          <p>{message.message.trim()}</p>
          <span className="time_date"> { monthHour(message.createdAt) } </span>
        </div>
      </div>
    </>
  )
}
