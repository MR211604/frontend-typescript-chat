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
    default:
      return state
  }

}