import {ADD_CHARACTER, REMOVE_CHARACTER} from "../actions/index";
import characters_json from "../data/chatacters.json";
import {createCharacters} from "./helpers";

function characters(state =characters_json, action ) {
    switch (action.type){
        case ADD_CHARACTER:
            let characters = state.filter(item => item.id !== action.id);
            return characters;
        case REMOVE_CHARACTER:
            return [...state, createCharacters(action.id)];
        default:
            return state;
    }
}

export default characters;