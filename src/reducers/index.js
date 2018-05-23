import {combineReducers} from "redux";
import characters from "./charactersReducer";
import heroes from "./heroesReducer";

export default combineReducers({
    characters, heroes
})