import {ADD_CHARACTER, REMOVE_CHARACTER} from "../actions/index";
import {createCharacters} from "./helpers";

function heroes(state = [], action) {
    switch (action.type) {
        case ADD_CHARACTER:
            let heroes = [...state, createCharacters(action.id)];
            return heroes
        case REMOVE_CHARACTER:
            heroes = state.filter(item => action.id !== item.id);
            return heroes;
        default:
            return state
    }
}



export default heroes;