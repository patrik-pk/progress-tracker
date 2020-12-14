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
    const months = () => {
        const arr = []

        for(let i = 1; i <= 12; i++) {
            const classes = []
            if(i < 6 || i > 8) classes.push('exists')
            if(i === 1) classes.push('active') 
            arr.push(
                <MonthItem key={i} className={classes.join(' ')}>
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
                    <YearParagraph>2020</YearParagraph>
                    <Arrow />
                </YearSelect>

                <MonthList>
                    { months() }
                </MonthList>

                <AddButton>
                    <AddParagraph>Add</AddParagraph>
                </AddButton>
            </Wrapper>
        </Container>
    )
}

export default Sidebar
