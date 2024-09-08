import { useContext } from "react"
import { AuthContext } from "../auth/AuthProvider"
import { AuthContextType } from "../types/auth"

export default function SearchBox() {

  const { Auth, logout } = useContext(AuthContext) as AuthContextType



  return (
    <>
      <div className="headind_srch">
        <div className="recent_heading mt-2">
          <h4>{Auth.name}</h4>
        </div>
        <div className="srch_bar">
          <div className="stylish-input-group">
            <button className="btn text-danger" onClick={logout}>
              Salir
            </button>
          </div>
        </div>
      </div>

    </>
  )
}
