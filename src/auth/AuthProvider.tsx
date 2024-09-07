import { createContext, useCallback, useState } from "react"
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { AuthContextType } from "../types/auth";


export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

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
      localStorage.setItem('token', response.token);
      setAuth({
        _id: response.user._id,
        checking: false,
        logged: true,
        name: response.user.name,
        email: response.user.email,
      })
    }
    return response
  }

  const register = async ({ name, email, password }: { name: string, email: string, password: string }) => {
    const response = await fetchWithoutToken('register', { name, email, password }, 'POST')  
    if (response.ok) {
      localStorage.setItem('token', response.token);
      setAuth({
        _id: response.user._id,
        checking: false,
        logged: true,
        name: response.user.name,
        email: response.user.email,
      })
      return true
    }
    return response
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
      return false
    }

    const response = await fetchWithToken('renew')
    if (response.ok) {
      localStorage.setItem('token', response.token);
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

  const logout = () => {
    localStorage.removeItem('token')
    setAuth({
      _id: null,
      checking: false,
      logged: false,
      name: null,
      email: null
    })
  }

  return (
    <AuthContext.Provider value={{
      login, register, verifyToken, logout, Auth
    }}>
      {children}
    </AuthContext.Provider>
  )
}
