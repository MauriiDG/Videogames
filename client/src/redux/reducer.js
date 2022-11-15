const initialState = {
    gameDetail: {},
    gameLoaded: []
}

export function rootReducer(state = initialState, action) {
    if (action.type === 'GET_GAMES') {
        return {
            ...state, 
            gameLoaded: action.payload  
        }
    }

    return state;
}