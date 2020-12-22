import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
    Container,
    Wrapper,
    DropdownContainer,
    DropdownButton,
    DropdownParagraph,
    DropdownItems,
    DropdownItem,
    Arrow,
    MonthList,
    MonthItem,
    MonthParagraph,
    AddButton,
    AddParagraph
} from './Styles'

const Sidebar = ({ data }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [currentYear, setCurrentYear] = useState(2020)

    // Set current year to the closest current one
    useEffect(() => {
        const date = new Date()
        const currentYear = date.getFullYear()
        const existingYears = data.map(item => item.year)
        const uniqueYears = existingYears.filter((year, i) => existingYears.indexOf(year) === i)
        
        const closestYear = uniqueYears.reduce((a, b) => 
            Math.abs(b - currentYear) < Math.abs(a - currentYear) ? b : a
        )

        setCurrentYear(closestYear)
    }, [data])

    // Map month buttons (1-12)
    const monthButtons = () => {
        const matchingMonths = data.filter(item => item.year === currentYear)
            .map(item => parseInt(item.month))

        const result = []

        for(let i = 1; i <= 12; i++) {
            const classes = []
            if(matchingMonths.includes(i)) classes.push('exists')
            result.push(
                <MonthItem 
                    as={!classes.includes('exists') ? 'li' : ''}
                    to={`/dashboard/${currentYear}/${i}`} 
                    key={i} 
                    className={classes.join(' ')}
                >
                    <MonthParagraph>{i}</MonthParagraph>
                </MonthItem>
            )
        }

        return result
    }

    const sidebarItems = () => {
        const existingYears = data.map(item => item.year)
        const uniqueYears = existingYears.filter((year, i) => existingYears.indexOf(year) === i)

        return uniqueYears.map(year => 
            <DropdownItem key={year} onClick={() => sidebarSetYear(year)}>{year}</DropdownItem>
        )
    }

    const sidebarSetYear = year => {
        setCurrentYear(year)
        setDropdownOpen(false)
    }

    return (
        <Container>
            <Wrapper>
                <DropdownContainer className={dropdownOpen ? 'active' : ''}>
                    <DropdownButton className='dropdown-btn' onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <DropdownParagraph>{currentYear}</DropdownParagraph>
                        <Arrow />
                    </DropdownButton>

                    <DropdownItems>
                        { sidebarItems() }
                    </DropdownItems>
                </DropdownContainer>

                <MonthList>
                    { monthButtons() }
                </MonthList>

                <AddButton to='/dashboard/add-month'>
                    <AddParagraph>Add</AddParagraph>
                </AddButton>
            </Wrapper>
        </Container>
    )
}

const mapStateToProps = state => ({
    data: state.months.data
})

export default connect(mapStateToProps)(Sidebar)
