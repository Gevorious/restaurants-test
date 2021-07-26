import axios from "axios"
import {FETCH_DATA, ADD_DATA, UPDATE_VOTES} from "./types"

const _APIUrlBase = 'https://restaurants-guide-fa4bd-default-rtdb.europe-west1.firebasedatabase.app/'

export const fetchRestaurants = () => dispatch => {
        axios.get(`${_APIUrlBase}.json`)
        .then(res=>
            dispatch({
                type: FETCH_DATA,
                payload: res.data
            })
        )            
}

export const addRestaurant = (data) => dispatch => {
        axios.post(`${_APIUrlBase}.json`, data)
        .then(res => dispatch({ type: ADD_DATA, }))  
}
export const updateVotes = (vote, key) => dispatch => {
        axios.post(`${_APIUrlBase}${key}/votes/.json`, vote)
        .then(res => dispatch({ type: UPDATE_VOTES, }))
     
}