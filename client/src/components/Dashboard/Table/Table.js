import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    TopContainer,
    Heading,
    OptionsList,
    OptionItem,
    ActualTable,
    TableHead,
    TableBody,
    TableRow,
    RowItem,
} from './Styles'
import { Container } from '../Styles'
import months from './months'

const Table = ({ match: { params }, data }) => {
    // if no params, redirect to most actual existing one,
    // if no params and no existing ones, render 'start by adding month...'
    // if bad params, do something
    const matchingItem = data.find(item => 
        item.year === params.year && 
        item.month === params.month
    )

    // currentWeek state for week options,
    // 0 stands for all, 1 is for week 1, etc.
    const [currentWeek, setCurrentWeek] = useState(0)

    if(!matchingItem) {
        return (
            <Container>
                <Heading>No matching month found</Heading>
            </Container>
        )
    } else {
        const { month, year, items, weeks, days } = matchingItem

        const mappedItemKeywords = items.map(item => item.keyword)

        // Week Options
        const mappedWeekOptions = () => {
            const result = []

            for(let i = 0; i < weeks; i++) {
                result.push(
                    <OptionItem
                        key={i + 1}
                        className={currentWeek === i + 1 ? 'active': ''} 
                        onClick={() => setCurrentWeek(i + 1)}
                    >Week {i + 1}</OptionItem>
                )
            }

            return result
        }

        // Top Row (Item Headings)
        const mappedItemNames = items.map(item => <RowItem key={item.keyword}>{item.name}</RowItem>) 

        // Data Rows

        // filter days based on current week state
        const filteredDays = (days => {
            if(currentWeek === 0) return days
            
            return days.filter(day => day.week === currentWeek)
        })(days)

        // then map the filtered days into rows
        const mappedDays = filteredDays.map(day => {
            const result = []
            const { items: dayItems } = day
            
            mappedItemKeywords.forEach(keyword => {
                result.push(<RowItem key={keyword}>{dayItems[keyword] ? dayItems[keyword] : '-'}</RowItem>)
            })

            return (
                <TableRow key={dayItems[mappedItemKeywords[0]]}>
                    { result }
                </TableRow>
            )
        })

        // Total Row
        const mappedTotal = items.map((item, index) => {
            return (
                <RowItem key={item.keyword}>{index === 0 ? 'Total' : '-'}</RowItem>
            )
        })

        return (
            <Container>
                <TopContainer>
                    <Heading>{months[month - 1]} {year}</Heading>

                    <OptionsList>
                        { mappedWeekOptions() }
                        <OptionItem 
                            className={currentWeek === 0 ? 'active' : ''}
                            onClick={() => setCurrentWeek(0)}
                        >All</OptionItem>
                    </OptionsList>
                </TopContainer>

                <ActualTable className='actual-table'>
                    <TableHead>
                        <TableRow>
                            { mappedItemNames }
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        { mappedDays }
                    </TableBody>

                    <TableHead>
                        <TableRow>
                            { mappedTotal }
                        </TableRow>
                    </TableHead>
                </ActualTable>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    data: state.months.data
})

export default connect(mapStateToProps)(Table)
