import React from 'react'
import {
    Container,
    Wrapper,
    YearSelect,
    YearParagraph,
    Arrow,
    MonthList,
    MonthItem,
    MonthParagraph,
    AddButton,
    AddParagraph
} from './Styles'

const Sidebar = () => {
    const currentYear = 2020

    const months = () => {
        const arr = []

        for(let i = 1; i <= 12; i++) {
            const classes = []
            if(i < 6 || i > 8) classes.push('exists')
            arr.push(
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

        return arr
    }

    return (
        <Container>
            <Wrapper>
                <YearSelect>
                    <YearParagraph>{currentYear}</YearParagraph>
                    <Arrow />
                </YearSelect>

                <MonthList>
                    { months() }
                </MonthList>

                <AddButton to='/dashboard/add-month'>
                    <AddParagraph>Add</AddParagraph>
                </AddButton>
            </Wrapper>
        </Container>
    )
}

export default Sidebar
