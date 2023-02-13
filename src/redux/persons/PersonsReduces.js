import { ADD_PERSON } from "./PersonsConstants";

const initialState = {
    persons: []
}

export default function personsReducer( state = initialState, action) {
    switch (action.type) {
        case ADD_PERSON:
            return {
                ...state,
                persons: [
                    ...state.persons,
                    action.payload
                ]
            };
        default:
            return state;    
    }   
            
}