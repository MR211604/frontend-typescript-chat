import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import '../css/login-register.css'

export default function AuthRouter() {

  return (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-t-50 p-b-90">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={
                <div>
                  <h1>404</h1>
                  <p>La pagina no existe</p>
                </div>
              } />
            </Routes>
          </div>
        </div>
      </div>

    </>
  )
}
