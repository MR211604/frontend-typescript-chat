import SidebarChatitem from "./SidebarChatitem"

export const Sidebar = () => {

  const chats: number[] = [1,2,3,4,5,6,7,8,9,10]

  
  return (
    <>
      {/* <!-- Sidebar inicio --> */}
      <div className="inbox_chat">

        {
          chats.map( chat => (
            <SidebarChatitem key={chat} />
          ))
        }

        {/* <!-- Espacio extra para scroll --> */}
        <div className="extra_space"></div>


      </div>
      {/* <!-- Sidebar Fin --> */}
    </>
  )
}
