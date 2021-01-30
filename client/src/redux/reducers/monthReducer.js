import {
    ADD_MONTH
} from '../types'
import tempData from '../../temp/data'

const initialState = {
    data: tempData
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action

    switch(type) {
        case ADD_MONTH:
            return {
                ...state,
                data: [...state.data, payload]
            }

        default:
            return state
    }
}

export default reducer