import { v4 as uuidv4 } from 'uuid'
import { deepCopy } from '../../../shared/utils'

export const processData = items => {
    // Format items - create object with unique id and name
    // out of form input array
    const formatedItems = items.map(item => ({
        keyword: item.toLowerCase() + uuidv4(),
        name: item
    }))

    // Create days array and new day empty object 
    const days = []
    const newDay = {}

    // loop trough formatedItems and assign keys
    // to newDay object with value of empty string
    for(const prop in formatedItems) {
        const { keyword } = formatedItems[prop]

        newDay[keyword] = ''
    }

    // loop trough days in that month and set first newDay
    // property (which is always day) to i
    for(let i = 0; i < 30; i++) {
        const newDayCopy = deepCopy(newDay)
        newDayCopy[formatedItems[0].keyword] = i + 1
        days.push(newDayCopy)
    }

    return {
        formatedItems,
        days
    }
}