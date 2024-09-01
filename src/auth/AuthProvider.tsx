import { createContext, JSX, useCallback, useState } from "react"
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { InitialState } from "../types/types";

export type AuthContextType = {
  login: (data: { email: string, password: string }) => void,
  register: (data: { name: string, email: string, password: string }) => void,
  verifyToken: () => void,
  logout: () => void,
  Auth: InitialState
}

export const AuthContext = createContext<AuthContextType | null>(null);

const initialState = {
  _id: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
}

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [Auth, setAuth] = useState(initialState)

  const login = async ({ email, password }: { email: string, password: string }) => {
    const response = await fetchWithoutToken('login', { email, password }, 'POST')
    if (response.ok) {
      console.log('respuesta del login', response)
      setAuth({
        _id: response.user._id,
        checking: false,
        logged: true,
        name: response.user.name,
        email: response.user.email,
      })
    }
  }

  const register = async ({ name, email, password }: { name: string, email: string, password: string }) => {
    const response = await fetchWithoutToken('register', { name, email, password }, 'POST')
    if (response.ok) {
      setAuth({
        _id: response.user._id,
        checking: false,
        logged: true,
        name: response.user.name,
        email: response.user.email,
      })
      return true
    }
  }

  //Esto es diferente debido a que estara dentro de un useEffect
  const verifyToken = useCallback(async () => {

    const token = localStorage.getItem('token')

    if (!token) {
      setAuth({
        _id: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      })
      console.log('no hay token')
      return false
    }

    const response = await fetchWithToken('renew')
    if (response.ok) {
      setAuth({
        _id: response.user._id,
        checking: false,
        logged: true,
        name: response.user.name,
        email: response.user.email,
      })
      return true
    } else {
      setAuth({
        _id: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      })
      return false
    }
  }, [])

  const logout = () => { }

  return (
    <AuthContext.Provider value={{
      login, register, verifyToken, logout, Auth
    }}>
      {children}
    </AuthContext.Provider>
  )
}
