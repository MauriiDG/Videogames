const initialState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    detail: []
}

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_VIDEOGAMES':
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload
            }

        case 'GET_GENRES':
            return {
                ...state,
                genres: action.payload
            }

        case 'FILTER_BY_GENRES':
            const allGamesGenre = state.allVideogames;
            const filteredGenre = action.payload === 'All'? allGamesGenre : allGamesGenre.filter(v => v.genres?.find(v => v === action.payload)) 
            return {
                ...state,
                videogames: filteredGenre
            }

        case 'FILTER_BY_CREATED':
            const allGames = state.allVideogames;
            const filteredCreated = action.payload === 'Created' ? allGames.filter(el => el.createdInDb) : allGames.filter(el => !el.createdInDb) 
            return {
                ...state,
                videogames: action.payload === 'All' ? allGames : filteredCreated
            }

        case 'ORDER_BY_NAME':
            if(action.payload === '') {
                return {
                    ...state,
                    videogames: state.allVideogames
                }
            }
            let gamesName = state.videogames.slice()
            let orderAsc = gamesName.sort((a, b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()) {
                    return action.payload === 'asc' ? -1 : 1
                }
                if(a.name.toLowerCase() > b.name.toLowerCase()) {
                    return action.payload === 'desc' ? -1 : 1
                }
                return 0;
            })
            return {
                ...state,
                videogames: orderAsc
            }

        
        case 'ORDER_BY_RATING':
            if(action.payload === '') {
                return {
                    ...state,
                    videogames: state.allVideogames
                }
            }
            let gamesRating = state.videogames.slice()
            let orderRating = gamesRating.sort((a, b) => {
                if(Number(a.rating) < Number(b.rating)) {
                    return action.payload === 'asc' ? -1 : 1
                }
                if(Number(a.rating) > Number(b.rating)) {
                    return action.payload === 'desc' ? -1 : 1
                }
                return 0;
            })
            return {
                ...state,
                videogames: orderRating
            }

        case 'GET_VIDEOGAMES_BY_NAME':
            return {
                ...state,
                videogames: action.payload
            }

        case 'GET_VIDEOGAME_BY_ID':
            return {
                ...state,
                detail: action.payload
            }

        default:
            return state;
    }
}

export default rootReducer;