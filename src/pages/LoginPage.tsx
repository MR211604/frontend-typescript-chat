import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext, AuthContextType } from "../auth/AuthProvider";

type Form = {
  email: string,
  password: string,
  rememberMe: boolean
}


export default function LoginPage() {

  const { login } = useContext(AuthContext) as AuthContextType

  const [form, setForm] = useState<Form>({
    email: '',
    password: '',
    rememberMe: true
  })

  useEffect(() => {
    const email = localStorage.getItem('email')
    if (email) {
      setForm({
        ...form,
        rememberMe: true,
        email
      })
    }
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //Esto almacenará el email en el localStorage si el checkbox está marcado
    form.rememberMe
      ? localStorage.setItem('email', form.email)
      : localStorage.removeItem('email')

    //Llamar al metodo de login
    const { email, password } = form
    login({ email, password })
  }

  const toggleCheck = () => {
    setForm({
      ...form,
      rememberMe: !form.rememberMe
    })
  }

  return (
    <form className="login100-form validate-form flex-sb flex-w" onSubmit={onSubmit}>
      <span className="login100-form-title mb-3">
        Chat - Ingreso
      </span>

      <div className="wrap-input100 validate-input mb-3">
        <input className="input100" type="email" name="email" placeholder="Email" value={form.email}
          onChange={onChange} />
        <span className="focus-input100"></span>
      </div>


      <div className="wrap-input100 validate-input mb-3">
        <input className="input100" type="password" name="password" placeholder="Password"
          value={form.password} onChange={onChange} />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col" onClick={toggleCheck} >
          <input className="input-checkbox100" id="ckb1" type="checkbox" checked={form.rememberMe} readOnly name="remember-me" />
          <label className="label-checkbox100">
            Recordarme
          </label>
        </div>

        <div className="col text-right">
          <Link to={'/auth/register'} className="txt1">
            Nueva cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button className="login100-form-btn">
          Ingresar
        </button>
      </div>

    </form>
  )
}
