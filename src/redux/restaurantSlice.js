import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const _APIUrlBase = 'https://restaurants-guide-fa4bd-default-rtdb.europe-west1.firebasedatabase.app/'

export const fetchRestaurants = createAsyncThunk('restaurants/fetchRestaurants', async () => {
        return axios.get(`${_APIUrlBase}.json`).then(res=>res.data)      
    }
)

export const addRestaurant = createAsyncThunk('restaurants/addRestaurant', async (data) => {
      axios.post(`${_APIUrlBase}.json`, data)      
    }
)
export const updateVotes = createAsyncThunk('restaurants/addRestaurant', async ({vote, dbkey: key}) => {
        axios.post(`${_APIUrlBase}${key}/votes/.json`, vote)   
    }
)


const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState: {
        restaurants: []
    },

    extraReducers: {
        [fetchRestaurants.fulfilled]: (state, {payload}) => {
            state.restaurants = payload
        },
        [addRestaurant.fulfilled]: (state) => state,
        [updateVotes.fulfilled]: (state) => state,
    }
})

export default restaurantSlice.reducer