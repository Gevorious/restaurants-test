import {FETCH_DATA, ADD_DATA, UPDATE_VOTES} from "../actions/types"

const initialState = {
    restaurants: []
}

export default function (state = initialState, action) {
    console.log(action.payload);
    switch(action.type) {
        case FETCH_DATA: 
            return  {...action.payload}
        case ADD_DATA: 
            return {...state}
        case UPDATE_VOTES: 
            return {...state}
        default: return state
    }

}