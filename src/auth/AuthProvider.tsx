import { createContext, JSX, useCallback, useState } from "react"


export const AuthContext = createContext({});

const initialState = {
  uuid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
}

export function AuthProvider({ children }: { children: JSX.Element }) {

  const [Auth, setAuth] = useState(initialState)

  const login = ({ email, password }: { email: string, password: string }) => {

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
