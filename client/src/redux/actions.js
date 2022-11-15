export const GET_GAMES = 'GET_GAMES'

export function getGames() {
    return function(dispatch) {
        return fetch(`http://localhost:3001/videogames/`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch({type: GET_GAMES, payload: data})
        })
    }
}