export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

export function addCharacterById(id) {
    return {
        type: ADD_CHARACTER,
        id
    }

}


export function removeCharacterById(id) {
    const action = {
        type: REMOVE_CHARACTER,
        id
    };

    return action;
}