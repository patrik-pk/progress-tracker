import { v4 as uuidv4 } from 'uuid'
import { deepCopy } from '../../../shared/utils'

export const validation = (year, month, items) => {
    const date = new Date()
    const numReg = /^[0-9]+$/
    let result = false
    let output = ''
    let correctYear = false
    let correctMonth = false 
    let correctItems = false

    // validate year
    if(numReg.test(year)) {
        const numYear = parseInt(year)
        if(numYear >= 1920 && numYear <= date.getFullYear() + 100) {
            correctYear = true
        }
        
    }

    // validate month
    if(numReg.test(month)) {
        const numMonth = parseInt(month)
        if(numMonth > 0 && numMonth <= 12) {
            correctMonth = true
        }
    }

    // validate items
    if(items.length > 1) {
        correctItems = true
    }

    // validation result
    if(correctYear && correctMonth && correctItems) {
        result = true
    }

    // validation output
    if(!result) {
        output += 'Please enter:'
        if(!correctYear) output += ` a valid year (1920 - ${date.getFullYear() + 100}),`
        if(!correctMonth) output += ` a valid month (1 - 12),`
        if(!correctItems) output += ` atleast 2 items,`

        output = output.slice(0, -1)
    }

    return {
        result,
        output
    }
}

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