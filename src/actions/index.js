import { urlsCharacters } from "../constans";

export const GET_FILMS = "GET_FILMS";
export const GET_CHARACTERS = "GET_CHARACTERS";


const getFilms = payload => ({ type: GET_FILMS, payload });
const getCharacters = payload => ({ type: GET_CHARACTERS, payload });

export const fetchList = () => {
    return dispatch => {
        fetch(`https://swapi.co/api/films/`).then(
            resp => (resp.json())
        ).then (
            (data) => {
               dispatch(getFilms (data))
            }
        ).catch( 
            (error) => {
                console.log(error)
            }
        )
    }
};

export const fetchCharacters = () => {
    return dispatch => {
        Promise.all(urlsCharacters.map(url => fetch(url).then(resp => (resp.json()))
        )).then(data => {
            dispatch(getCharacters(data))
        }).catch( 
            (error) => {
                console.log(error)
            }
        )
    }
};