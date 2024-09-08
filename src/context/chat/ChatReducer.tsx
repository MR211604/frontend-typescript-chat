import { types } from "../../types/reducerTypes/types"

export const ChatReducer = (state: any, action: any) => {

  switch (action.type) {

    case types.usuariosCargados:
      return {
        ...state,
        users: [...action.payload]
      }
    case types.activarChat:
      if (state.activeChat === action.payload) return state
      return {
        ...state,
        activeChat: action.payload,
        messages: []
      }
    case types.nuevoMensaje:
      if (state.activeChat === action.payload.from || state.activeChat === action.payload.to) {
        return {
          ...state,
          messages: [...state.messages, action.payload]
        }
      } else {
        return state
      }
    case types.cargarMensajes:
      return {
        ...state,
        messages: [...action.payload]
      }
    default:
      return state
  }

}