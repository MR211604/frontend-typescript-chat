import SearchBox from "./SearchBox";
import { Sidebar } from "./Sidebar";

export default function InboxPeople() {
  return (
    <>
      {/* <!-- Inbox people inicio --> */}
      <div className="inbox_people">

        <SearchBox />
        <Sidebar />

      </div>
      {/* <!-- Inbox people Fin --> */}
    </>
  )
}
