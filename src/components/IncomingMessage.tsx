import { monthHour } from "../helpers/times"
import { Message } from "../types/chat"

interface Props {
  message: Message
}

export default function IncomingMessage({ message }: Props) {

  console.log('props', message)

  return (
    <>
      <div className="incoming_msg">
        <div className="incoming_msg_img">
          <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
        </div>
        <div className="received_msg">
          <div className="received_withd_msg">
            <p>{message.message.trim()}</p>
            <span className="time_date"> {monthHour(message.createdAt)} </span>
          </div>
        </div>
      </div>

    </>
  )
}
