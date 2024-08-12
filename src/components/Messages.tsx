import IncomingMessage from "./IncomingMessage";
import OutgoingMessage from "./OutgoingMessage";
import SendMessage from "./SendMessage";

export default function Messages() {

  const msgs: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="mesgs">
        <div className="msg_history">
          {
            msgs.map(msg => (
              msg % 2 === 0
                ? <IncomingMessage key={msg} />
                : <OutgoingMessage key={msg} />
            ))
          }
        </div>
        <SendMessage />
      </div>
    </>
  )
}
