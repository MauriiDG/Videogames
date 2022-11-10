import { GET_GAMES } from "./actions";

const initialState = {
    gameName: {}
}

export function rootReducer(state = initialState, action) {
    if(action.type === GET_GAMES) {
        return {
            ...state, 
        }
    }

    return state;
}