import { SET_VALUE } from './FilterConstants';


export function setValue(payload) {
    return {
        type: SET_VALUE,
        payload
    }
}
