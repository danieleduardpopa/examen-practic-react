import { SET_VALUE } from "./FilterConstants";

const initialState = {
    filter: [0]
}

export default function filterReducer( state = initialState, action) {
    switch (action.type) {
        case SET_VALUE:
            return {
                filter: [
                    action.payload
                ]
            };
        default:
            return state;    
    }   
            
}