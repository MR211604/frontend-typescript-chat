import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthContext, AuthContextType } from "../auth/AuthProvider"
import PublicRoute from "./PublicRoute"
import PrivateRoute from "./PrivateRoute"

type Props = {}

export default function AppRouter({ }: Props) {

  const { Auth, verifyToken } = useContext(AuthContext) as AuthContextType

  useEffect(() => {
    verifyToken();
  }, [verifyToken])

  if (Auth.checking) {
    return <h1>Cargando...</h1>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<PublicRoute isAuthenticated={Auth.logged} />} />
        <Route path="/" element={<PrivateRoute isAuthenticated={Auth.logged} />} />
        <Route path="*" element={<div> <h2>404</h2> La pagina no existe</div>} />
      </Routes>
    </BrowserRouter>
  )
}