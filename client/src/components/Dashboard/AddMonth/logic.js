import { v4 as uuidv4 } from 'uuid'
import { deepCopy } from '../../../shared/utils'

export const processData = (items, year, month) => {
    // Format items - create object with unique id and name
    // out of form input array
    const formatedItems = items.map(item => ({
        keyword: item.toLowerCase() + uuidv4(),
        name: item
    }))

    // Create days array and new day empty object 
    const days = []
    const newDay = {
        week: 1,
        items: {}
    }

    // loop trough formatedItems and assign keys
    // to newDay object with value of empty string
    for(const prop in formatedItems) {
        const { keyword } = formatedItems[prop]

        newDay.items[keyword] = ''
    }

    const daysInMonth = new Date(year, month, 0).getDate()

    let amountOfWeeks = 1

    // loop trough and create days in that month, set first newDay
    // property (which is equals to day index) to i + 1,
    // also add proper week to that day
    for(let i = 0; i < daysInMonth; i++) {
        const newDayCopy = deepCopy(newDay)
        const date = new Date(year, month - 1, i + 1)
        const weekDay = date.getDay()

        if(weekDay === 1 && i !== 0) amountOfWeeks += 1

        // set the day to i + 1
        newDayCopy.items[formatedItems[0].keyword] = i + 1
        newDayCopy.week = amountOfWeeks

        days.push(newDayCopy)
    }

    return {
        formatedItems,
        days,
        amountOfWeeks
    }
}