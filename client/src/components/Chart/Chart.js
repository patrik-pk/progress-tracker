import React from 'react'
import {
    Container,
    TopContainer,
    Heading,
    OptionsList,
    OptionItem,
    ActualChart,
    ChartHead,
    ChartBody,
    ChartRow,
    RowItem,
} from './Styles'

const Chart = () => {
    return (
        <Container>
            <TopContainer>
                <Heading>January 2020</Heading>

                <OptionsList>
                    <OptionItem>Week 1</OptionItem>
                    <OptionItem>Week 2</OptionItem>
                    <OptionItem>Week 3</OptionItem>
                    <OptionItem>Week 4</OptionItem>
                    <OptionItem>Week 5</OptionItem>
                    <OptionItem className='active'>All</OptionItem>
                </OptionsList>
            </TopContainer>

            <ActualChart>
                <ChartHead>
                    <ChartRow>
                        <RowItem>Day</RowItem>
                        <RowItem>Sleep Time</RowItem>
                        <RowItem>Food</RowItem>
                        <RowItem>Exercise</RowItem>
                        <RowItem>Productive Hours</RowItem>
                    </ChartRow>
                </ChartHead>

                <ChartBody>
                    <ChartRow>
                        <RowItem>1</RowItem>
                        <RowItem>22 - 6</RowItem>
                        <RowItem>2300kcal 10/10</RowItem>
                        <RowItem>Fullbody 45min</RowItem>
                        <RowItem>2h PROGRESS TRACKER</RowItem>
                    </ChartRow>

                    <ChartRow>
                        <RowItem>2</RowItem>
                        <RowItem>23 - 7</RowItem>
                        <RowItem>2300kcal 10/10</RowItem>
                        <RowItem>Fullbody 45min</RowItem>
                        <RowItem>2h PROGRESS TRACKER</RowItem>
                    </ChartRow>

                    <ChartRow>
                        <RowItem>3</RowItem>
                        <RowItem>22 - 6</RowItem>
                        <RowItem>2300kcal 10/10</RowItem>
                        <RowItem>Run 30min</RowItem>
                        <RowItem>2h PROGRESS TRACKER</RowItem>
                    </ChartRow>

                    <ChartRow>
                        <RowItem>4</RowItem>
                        <RowItem>22 - 6</RowItem>
                        <RowItem>2300kcal 10/10</RowItem>
                        <RowItem>Run 30min</RowItem>
                        <RowItem>2h PROGRESS TRACKER</RowItem>
                    </ChartRow>

                    <ChartRow>
                        <RowItem>5</RowItem>
                        <RowItem>22 - 6</RowItem>
                        <RowItem>2300kcal 10/10</RowItem>
                        <RowItem>Run 30min</RowItem>
                        <RowItem>2h PROGRESS TRACKER</RowItem>
                    </ChartRow>

                    <ChartRow>
                        <RowItem>6</RowItem>
                        <RowItem>22 - 6</RowItem>
                        <RowItem>2300kcal 10/10</RowItem>
                        <RowItem>Run 30min</RowItem>
                        <RowItem>2h PROGRESS TRACKER</RowItem>
                    </ChartRow>
                </ChartBody>
            </ActualChart>
        </Container>
    )
}

export default Chart
