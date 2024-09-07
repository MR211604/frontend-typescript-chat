import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext, } from "../auth/AuthProvider";
import { toast, Toaster } from "sonner";
import { AuthContextType } from "../types/auth";

type Form = {
  name: string,
  email: string,
  password: string,
}


export default function RegisterPage() {

  const { register } = useContext(AuthContext) as AuthContextType

  const [form, setForm] = useState<Form>({
    name: '',
    email: '',
    password: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, password } = form
    const response = await register({ name, email, password })
    if (!response.ok) {
      toast.error(`Error: ${response.message}`)
    } else {
      toast.success('User created successfully')
    }

  }

  const isValidForm = () => {
    return form.email.trim() !== '' && form.password.trim() !== '' && form.name.trim() !== ''
  }

  return (
    <>
      <Toaster richColors />
      <form className="login100-form validate-form flex-sb flex-w" onSubmit={onSubmit}>
        <span className="login100-form-title mb-3">
          Chat - Registro
        </span>

        <div className="wrap-input100 validate-input mb-3">
          <input className="input100" type="text" name="name" placeholder="Nombre" value={form.name} onChange={onChange} />
          <span className="focus-input100"></span>
        </div>


        <div className="wrap-input100 validate-input mb-3">
          <input className="input100" type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} />
          <span className="focus-input100"></span>
        </div>


        <div className="wrap-input100 validate-input mb-3">
          <input className="input100" type="password" name="password" placeholder="Password" value={form.password} onChange={onChange} />
          <span className="focus-input100"></span>
        </div>

        <div className="row mb-3">
          <div className="col text-right">
            <Link to={'/auth/login'} className="txt1">
              Ya tienes cuenta?
            </Link>
          </div>
        </div>

        <div className="container-login100-form-btn m-t-17">
          <button className="login100-form-btn" disabled={!isValidForm()}>
            Crear cuenta
          </button>
        </div>

      </form>
    </>

  )
}
