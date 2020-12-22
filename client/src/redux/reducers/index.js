import { combineReducers } from 'redux'
import monthReducer from './monthReducer'

export default combineReducers({
    months: monthReducer
})