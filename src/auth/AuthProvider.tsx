import { createContext, JSX, useCallback, useState } from "react"
import { fetchWithoutToken } from "../helpers/fetch";

export type AuthContextType = {
  login: (data: { email: string, password: string }) => void,
  register: (data: { name: string, email: string, password: string }) => void,
  verifyToken: () => void,
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null);

const initialState = {
  uuid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
}

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [Auth, setAuth] = useState(initialState)

  const login = async ({ email, password }: { email: string, password: string }) => {
    const response = await fetchWithoutToken('login', { email, password }, 'POST')
    console.log(response)
  }

  const register = ({ name, email, password }: { name: string, email: string, password: string }) => {

  }

  //Esto es diferente debido a que estara dentro de un useEffect
  const verifyToken = useCallback(() => {},[])

  const logout = () => {}

  return (
    <AuthContext.Provider value={{
      login, register, verifyToken, logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}
