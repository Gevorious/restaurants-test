// import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import thunkMiddleware from 'redux-thunk'
import restaurantReducer from './restaurantSlice'

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default configureStore({ reducer: restaurantReducer })

// export default store