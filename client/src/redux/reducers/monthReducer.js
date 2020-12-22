import {

} from '../types'
import tempData from '../../temp/data'

const initialState = {
    data: tempData
}

const reducer = (state = initialState, action) => {
    const { type/*, payload*/} = action

    switch(type) {
        default:
            return state
    }
}

export default reducer