import { GET_CHARACTERS } from "../actions"

export const characters = (state = [], action) => {
    switch (action.type) {
        case GET_CHARACTERS :
            return { ...state, list: action.payload }
        default: 
            return state;
    }
}
