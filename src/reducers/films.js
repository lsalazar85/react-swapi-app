import { GET_FILMS } from "../actions"

export const films = (state = [], action) => {
    switch (action.type) {
        case GET_FILMS:
            return { ...state, data: action.payload }
        default: 
            return state;
    }
}
