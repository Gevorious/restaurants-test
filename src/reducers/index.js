import { combineReducers } from "redux"
import dataManagmentReducer from './dataManagementReducer'

export default combineReducers({ restaurants: dataManagmentReducer})