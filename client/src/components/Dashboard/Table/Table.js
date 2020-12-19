import React from 'react'
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
import data from '../../../temp/data'
import months from './months'

const Table = ({ match: { params } }) => {
    // if no params, redirect to most actual existing one,
    // if no params and no existing ones, render 'start by adding month...'
    // if bad params, do something
    const matchingItem = data.find(item => 
        item.year === params.year && 
        item.month === params.month
    )

    if(!matchingItem) {
        return (
            <Container>
                <Heading>No matching month found</Heading>
            </Container>
        )
    } else {
        const { month, year, items, days } = matchingItem

        const mappedItemKeywords = items.map(item => item.keyword)
        const mappedItemNames = items.map(item => <RowItem key={item.keyword}>{item.name}</RowItem>) 

        const mappedDays = days.map(day => {
            const result = []
            
            mappedItemKeywords.forEach(keyword => {
                result.push(<RowItem key={keyword}>{day[keyword] ? day[keyword] : '-'}</RowItem>)
            })

            return (
                <TableRow key={day.day}>
                    { result }
                </TableRow>
            )
        })

        const mappedTotal = items.map(item => {
            return (
                <RowItem key={item.keyword}>{item.keyword === 'day' ? 'Total' : '-'}</RowItem>
            )
        })

        return (
            <Container>
                <TopContainer>
                    <Heading>{months[month - 1]} {year}</Heading>

                    <OptionsList>
                        <OptionItem>Week 1</OptionItem>
                        <OptionItem>Week 2</OptionItem>
                        <OptionItem>Week 3</OptionItem>
                        <OptionItem>Week 4</OptionItem>
                        <OptionItem>Week 5</OptionItem>
                        <OptionItem className='active'>All</OptionItem>
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

export default Table
