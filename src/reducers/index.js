
import { combineReducers } from "redux";
import { films } from "./films";
import { characters } from "./characters";

export const reducer = combineReducers({
    films,
    characters
}); 