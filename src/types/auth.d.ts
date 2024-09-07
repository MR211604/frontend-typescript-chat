export interface InitialState {
  _id: null | string,
  checking: boolean,
  logged: boolean,
  name: null | string,
  email: null | string
}

export interface AuthContextType {
  login: (data: { email: string, password: string }) => Promise<any>,
  register: (data: { name: string, email: string, password: string }) => Promise<any>,
  verifyToken: () => void,
  logout: () => void,
  Auth: InitialState
}