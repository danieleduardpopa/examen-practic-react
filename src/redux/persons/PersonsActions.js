import { ADD_PERSON } from "./PersonsConstants";

export function addPerson(payload) {
    return {
        type: ADD_PERSON,
        payload
    }
}