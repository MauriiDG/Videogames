export const GET_GAMES = 'GET_GAMES'

export function getGames(game) {
    return function(dispatch) {
        return fetch(`https://api.rawg.io/api/games/?key=736cfa1f76a743008958ce3e27b1408f`)
        .then(response => response.json())
        .then(obj => {
            dispatch({type: GET_GAMES, payload: obj})
        })
    }
}